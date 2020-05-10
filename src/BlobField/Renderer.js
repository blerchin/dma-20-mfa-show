import config from 'src/config';
import { createAlignedText } from './textPath';
import ConvexHull from './convex_hull';
import paper from 'paper';
import { dist } from 'src/utils';
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

export default class Renderer {
  constructor(world, canvasEl, particleSystem, artists,  { radius = .25 } = {}) {
      // init large buffer geometry
      this.world = world;
      this.canvasEl = canvasEl;
      this.particleSystem = particleSystem;
      paper.setup(canvasEl);
      this.ctx = canvasEl.getContext('2d');
      this.radius = radius;
      this.blobs = artists.map((artist) => ({ ...artist, path: new paper.Path(), textItem: null , active: false }));
      this.bounds = [];
      this.activePath = null;
  }

  draw(scale, drawBounds = false) {
    this.ctx.fillStyle = config.style.background;
    this.ctx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);

    // draw particle systems
    this.drawParticleSystem(this.particleSystem, scale);
    
    // only need to draw bounds for debug purposes. they should be out of frame.
    if (drawBounds) {
      this.drawBounds(this.world, scale);
    }
    paper.view.draw();
  }

  getBlobs() {
    return this.blobs;
  }


  drawPath(points, blob, smooth = true, drawPoints = false) {
    const { path } = blob;
    path.strokeWidth = 0;
    path.strokeColor = config.style.blobStroke;
    const radius = dist(blob.center, blob.initialPoint);
    if (blob.active) {
      path.opacity = 1;
      path.fillColor = {
        gradient: {
          stops: ['#e3f994', '#574DC8'],
          radial: true
        },
        origin: blob.center,
        destination: [blob.center[0] + radius + 20, blob.center[1]]
      };
    } else {
      path.opacity = 0.9;
      path.fillColor = {
        gradient: {
          stops: ['#e3f994', '#574DC8'],
          radial: true
        },
        origin: blob.center,
        destination: [blob.center[0] + radius - 20, blob.center[1]]
      };
    }
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

  drawName(blob) {
    const { active, name, center } = blob;
    blob.textItem && blob.textItem.remove();
    blob.textItem = new paper.PointText(new paper.Point(center));
    const { textItem } = blob;
    textItem.content = name.toUpperCase().split(' ').join('\n');
    textItem.justification = 'center';
    textItem.fillColor = '#574DC8';
    textItem.fontSize = 18;
    textItem.fontWeight = 700;
    textItem.opacity = active ? 1 : 0.5;
  }

  drawPolygon(path, vertices, scale) {
    if (!path) {
      path = new paper.Path();
    }
    path.segments = [];
    path.fillColor='black';
    for (let i = 0; i < vertices.length; i++) {
      path.add(new paper.Point(vertices[i].x * scale, vertices[i].y * scale));
    }
  }

  drawBounds(world, scale) {
    for (let i = 0; i < world.bodies.length; i++) {
      const body = world.bodies[i];
      for (var j = 0; j < body.fixtures.length; j++) {
        if (body.fixtures[j].shape instanceof b2PolygonShape ) {
          const transform = body.GetTransform().p;
          const vertices = body.fixtures[j].shape.vertices.map((v) => ({ x: v.x + transform.x, y: v.y + transform.y }));
          this.drawPolygon(this.bounds[j], vertices, scale);
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

      this.blobs[j].center = [groupCenter[0] * scale, groupCenter[1] * scale];
      this.blobs[j].initialPoint = [groupParticles[0] * scale, groupParticles[1] * scale]

      this.drawPath(outerParticles, this.blobs[j]);
      this.drawName(this.blobs[j]);
    }
  }

  hitTest(x, y, _options) {
    const options = { fill: true, tolerance: 5, ..._options };
    const result = paper.project.hitTest({ x, y }, options);
    let activeBlob = null;
    this.blobs.forEach((b) => b.active = false);
    if (result) {
      activeBlob = this.blobs.find(({ path }) => path === result.item);
      if (activeBlob) {
        this.activePath = result.item;
        activeBlob.active = true;
      }
    }

    return activeBlob;
  }
}
