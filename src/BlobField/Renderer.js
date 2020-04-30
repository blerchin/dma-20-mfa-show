import { blob, cursor as cursorClass } from './style.module.scss';
const { b2_dynamicBody } = liquidfun;

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

      if(minDist == -1 || dist < minDist) {
        minDist = dist;
        closest = [x2,y2]
      }
    }

    return closest;
}

function getOuterParticles(gp, center, radius) {
  const outerParticles = [];
  var numOuterParticles = 20;

  for(var i = 0; i < numOuterParticles; i++) {
    var ang = (i / numOuterParticles) * (Math.PI * 2);
    var x = Math.cos(ang) * radius + center[0];
    var y = Math.sin(ang) * radius + center[1];

    outerParticles.push(getClosestParticleToPosition(gp, x, y));
  }

  return outerParticles;
}

function line(pointA, pointB) {
  const lengthX = pointB[0] - pointA[0]
  const lengthY = pointB[1] - pointA[1]
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  }
}

function controlPoint (current, previous, next, reverse, smoothing = 0.1) {
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
  constructor(world, svgEl, { scale = 10} = {}) {
      // init large buffer geometry
      this.world = world;
      this.svgEl = svgEl;
      this.scale = scale;
      this.groupLocations = []
  }

  draw() {
    // draw particle systems
    for (let i = 0, max = this.world.particleSystems.length; i < max; i++) {
        this.drawParticleSystem(this.world.particleSystems[i]);
    }
  }

  getGroupLocations() {
    return this.groupLocations;
  }


  upsertPath(particles, groupIndex, smooth = true) {
    const points = particles.map((p) => [p[0] * this.scale, p[1] * this.scale]);
    let path = `M ${points[0][0]} ${points[0][1]} `;
    for(var i = 1; i < particles.length; i++) {
      if (smooth) {
        const startCP = controlPoint(points[i - 1], points[i - 2], points[i]);
        const endCP = controlPoint(points[i], points[i - 1],  points[i + 1], true);
        path += `C ${startCP[0]},${startCP[1]} ${endCP[0]}, ${endCP[1]}, ${points[i][0]} ${points[i][1]}`;
      } else {
        path += `L ${points[i][0]} ${points[i][1]} `;
      }
    }
    path += 'z';
    
    let el = this.svgEl.querySelectorAll(`.${blob}`)[groupIndex];
    if (typeof el === 'undefined') {
      el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      el.setAttribute('class', blob);
      this.svgEl.appendChild(el);
    }
    el.setAttribute('d', path);
    el.setAttribute('stroke', 'black');
    el.setAttribute('fill', 'transparent');
  }

  drawCursor(cursor) {
    const position = cursor.GetPosition();
    let el = this.svgEl.querySelector('#cursor');
    if (!el) {
      el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      el.id = 'cursor';
      el.setAttribute('class', cursorClass);
      this.svgEl.appendChild(el);
    }
    el.setAttribute('cx', position.x * this.scale);
    el.setAttribute('cy', position.y * this.scale);
    el.setAttribute('r', cursor.fixtures[0].shape.radius * this.scale);
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
