import { blob, cursor as cursorClass } from './style.module.scss';
import ConvexHull from './convex_hull';
const { b2PolygonShape } = liquidfun;

function getCenterParticles(p) {
  var xSum = 0;
  var ySum = 0;

  for(var i = 0; i < p.length; i += 2) {
    xSum += p[i];
    ySum += p[i+1];
  }

  return [xSum/(p.length/2), ySum/(p.length/2)];
}

function getOuterParticles(gp, scale) {
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
    points.push({ x: gp[i] * scale, y: gp[i+1] * scale });
  }

  const ch = new ConvexHull(points);
  return ch.makeHull().map((p) => [p.x, p.y]);
}

function line(pointA, pointB) {
  const lengthX = pointB[0] - pointA[0]
  const lengthY = pointB[1] - pointA[1]
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  }
}

function controlPoint (current, previous, next, reverse, smoothing = 0.01) {
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
      this.radius = radius;
      this.groupLocations = []
  }

  draw(scale) {
    this.ctx.fillStyle = 'rgb(171,202,204)';
    this.ctx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);

    // draw particle systems
    for (let i = 0, max = this.world.particleSystems.length; i < max; i++) {
        this.drawParticleSystem(this.world.particleSystems[i], scale);
    }
    this.drawBounds(this.world, scale);
  }

  getGroupLocations() {
    return this.groupLocations;
  }


  upsertPath(points, groupIndex, smooth = true, drawPoints = false) {
    this.ctx.beginPath();
    this.lineWidth = '0.1';
    //this.strokeStyle = 'black';
    this.ctx.strokeStyle='rgb(255,255,255)';
    //this.ctx.fillStyle = 'white';
    this.ctx.fillStyle = 'rgb(185,205,210)';
    this.ctx.lineWidth = 0.8;
    this.ctx.moveTo(points[0][0], points[0][1]);
    for(var i = 1; i < points.length; i++) {
      if (smooth) {
        const startCP = controlPoint(points[i - 1], points[i - 2], points[i]);
        const endCP = controlPoint(points[i], points[i - 1],  points[i + 1], true);
        this.ctx.bezierCurveTo(...startCP, ...endCP, ...points[i]);
      } else {
        this.ctx.lineTo(points[i][0], points[i][1]);
      }
    }
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    if (drawPoints) {
      for(var i = 0; i < points.length; i++) {
        this.ctx.fillStyle='black';
        this.ctx.beginPath();
        this.ctx.arc(points[i][0], points[i][1], 3, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
  }

  drawPolygon(vertices, scale) {
    const ctx = this.ctx;
    ctx.fillStyle='black';
    ctx.beginPath();
    ctx.moveTo(vertices[0].x * scale, vertices[0].y * scale);
    for (let i = 1; i < vertices.length; i++) {
      ctx.lineTo(vertices[i].x * scale, vertices[i].y * scale);
    }
    ctx.fill();
  }

  drawBounds(world, scale) {
    for (let i = 0; i < world.bodies.length; i++) {
      const body = world.bodies[i];
      for (var j = 0; j < body.fixtures.length; j++) {
        if (body.fixtures[j].shape instanceof b2PolygonShape ) {
          const transform = body.GetTransform().p;
          const vertices = body.fixtures[j].shape.vertices.map((v) => ({ x: v.x + transform.x, y: v.y + transform.y }));
          this.drawPolygon(vertices, scale);
        }
      }
    }
  }

  drawParticleSystem(system, scale) {
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

      var outerParticles = getOuterParticles(groupParticles, scale);

      this.groupLocations[j] = {
        centerPoint: [groupCenter[0] * scale, groupCenter[1] * scale],
        initialPoint: [groupParticles[0] * scale, groupParticles[1] * scale]
      };

      this.upsertPath(outerParticles, j);
    }
  }
}
