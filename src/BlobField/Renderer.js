import config from 'src/config';
import { createAlignedText } from './textPath';
import ConvexHull from './convex_hull';
import paper from 'paper';
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
  var points = [];
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

function controlPoint (current, previous, next, reverse, smoothing = 0.12) {
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
      paper.setup(canvasEl);
      this.ctx = canvasEl.getContext('2d');
      this.radius = radius;
      this.blobs = config.artists.map(({ name }) => ({ name, path: new paper.Path(), glyphs: [] }));
  }

  draw(scale, drawBounds = false) {
    this.ctx.fillStyle = config.style.background;
    this.ctx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);

    // draw particle systems
    for (let i = 0, max = this.world.particleSystems.length; i < max; i++) {
        this.drawParticleSystem(this.world.particleSystems[i], scale);
    }
    paper.view.draw();
    if (drawBounds) {
      this.drawBounds(this.world, scale);
    }
  }

  getGroupLocations() {
    return this.groupLocations;
  }


  drawPath(points, blob, smooth = true, drawPoints = false) {
    const { path } = blob;
    path.strokeColor = config.style.blobStroke;
    path.fillColor = config.style.blobFill;
    path.lineWidth = 0.8;
    path.closed = true;
    path.segments = [];
    path.segments = points.map((p) => [p, null, null])
    path.smooth({ type: 'catmull-rom', factor: 0.6 });

    if (drawPoints) {
      for(var i = 0; i < points.length; i++) {
        this.ctx.fillStyle='black';
        this.ctx.beginPath();
        this.ctx.arc(points[i][0], points[i][1], 3, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
  }

  drawName({ name, path, glyphs }) {
    const textPath = path.clone();
    textPath.scale(.8);
    textPath.smooth({ type: 'catmull-rom', factor: 1 });
    createAlignedText(name, textPath, glyphs, { fontSize: '20px', baselineShift: 0 });
    textPath.remove();
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

      this.drawPath(outerParticles, this.blobs[j]);
      this.drawName(this.blobs[j]);
    }
  }
}
