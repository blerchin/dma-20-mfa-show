import { blob, cursor as cursorClass } from './style.module.scss';
import metaball from './metaball';
import {sortPointX, sortPointY, chainHull_2D} from './convex_hull';

function getCenterParticles(p) {
  var xSum = 0;
  var ySum = 0;

  for(var i = 0; i < p.length; i += 2) {
    xSum += p[i];
    ySum += p[i+1];
  }

  return [xSum/(p.length/2), ySum/(p.length/2)];
}

function getClosestParticleToPosition(gp, x, y) {
    var minDist = -1;
    var closest = [0,0];

    for(var i = 0; i < gp.length; i+=2) {
      var x2 = gp[i];
      var y2 = gp[i+1];
      var a = x - x2;
      var b = y - y2;
      var dist = Math.sqrt(a*a + b*b);

      if(minDist === -1 || dist < minDist) {
        minDist = dist;
        closest = [x2,y2]
      }
    }

    return closest;
}




function getOuterParticles(gp, center, radius) {
  /*const outerParticles = [];
  var numOuterParticles = 7;

  for(var i = 0; i < numOuterParticles; i++) {
    var ang = (i / numOuterParticles) * (Math.PI * 2);
    var x = Math.cos(ang) * radius + center[0];
    var y = Math.sin(ang) * radius + center[1];

    outerParticles.push(getClosestParticleToPosition(gp, x, y));
  }

  return outerParticles;*/

  var points = [];
  var hullPoints = [];
  var hullPoints_size;
  for(var i = 0; i < gp.length - 1; i+= 2) {
    points.push([gp[i],gp[i+1]]);
  }

  points.sort(sortPointY);
  points.sort(sortPointX);

  hullPoints_size = chainHull_2D(points, points.length, hullPoints);
  console.log(hullPoints_size);
  return hullPoints;

}





function line(pointA, pointB) {
  const lengthX = pointB[0] - pointA[0]
  const lengthY = pointB[1] - pointA[1]
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  }
}

function controlPoint (current, previous, next, reverse, smoothing = 0.2) {
  // When 'current' is the first or last point of the array
  // 'previous' or 'next' don't exist.
  // Replace with 'current'
  const p = previous || current
  const n = next || current
  // Properties of the opposed-line
  const o = line(p, n)
  // If is end-control-point, add PI to the angle to go backward
  const angle = o.angle + (reverse ? Math.PI : 0)
  const length = o.length * smoothing
  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length
  const y = current[1] + Math.sin(angle) * length
  return [x, y]
}

export default class Renderer {
  constructor(world, canvasEl, { radius = .25, scale = 10} = {}) {
      // init large buffer geometry
      this.world = world;
      this.canvasEl = canvasEl;
      this.ctx = canvasEl.getContext('2d');
      this.scale = scale;
      this.radius = radius;
      this.groupLocations = []
  }

  draw() {
    this.ctx.fillStyle = '#389e6b';
    this.ctx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);

    // draw particle systems
    for (let i = 0, max = this.world.particleSystems.length; i < max; i++) {
        this.drawParticleSystem(this.world.particleSystems[i]);
    }
  }

  getGroupLocations() {
    return this.groupLocations;
  }


  upsertPath(particles, groupIndex, smooth=true) {
    const points = particles.map((p) => [p[0] * this.scale, p[1] * this.scale]);
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.strokeWidth = 1;
    ctx.strokeStyle='black';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    //start by drawing all the particles
    /*
    for(var i = 0; i < points.length; i++) {
      ctx.beginPath();
      ctx.arc(points[i][0], points[i][1], this.radius * this.scale, 0, 2 * Math.PI);
      ctx.fill();
    }
    */
    //then make metaballs of each pair of points
    ctx.beginPath();
    metaball(ctx, this.radius * this.scale, points[0], points[points.length - 1]);
    for(var i = 0; i < points.length - 1; i++) {
      metaball(ctx, this.radius * this.scale, points[i + 1], points[i]);
    }
    ctx.closePath();
    ctx.fill();
    //finally draw crude outline and fill it
    /*
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for(var i = 1; i < points.length; i++) {
       this.ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.closePath();
    ctx.fill();
    */
  }

  drawParticleSystem(system) {
    const particles = system.GetPositionBuffer();
    const particleGroups = system.particleGroups;
    //need to reset this on each step so React knows to rerender
    this.groupLocations = [];

    // loop through particle groups 
    // calculate center of group
    // get list of outmost particles from center of group 
    // draw a line connecting them
    
    for(var j = 0; j < particleGroups.length; j++) {
      var bufferIndex = particleGroups[j].GetBufferIndex();
      var numParticles = particleGroups[j].GetParticleCount();

      // * 2 to account for x and y values in position buffer
      var start = bufferIndex * 2;
      var end = start + numParticles * 2;
      var groupParticles = particles.slice(start, end);

      var groupCenter = getCenterParticles(groupParticles);

      var outerParticles = getOuterParticles(groupParticles, groupCenter, 5);

      this.groupLocations[j] = { 
        centerPoint: [groupCenter[0] * this.scale, groupCenter[1] * this.scale], 
        initialPoint: [groupParticles[0] * this.scale, groupParticles[1] * this.scale]
      };

      this.upsertPath(outerParticles, j);
    }
  }
}
