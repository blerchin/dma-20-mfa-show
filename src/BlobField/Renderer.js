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
  var numOuterParticles = 30;

  for(var i = 0; i < numOuterParticles; i++) {
    var ang = (i / numOuterParticles) * (Math.PI * 2);
    var x = Math.cos(ang) * radius + center[0];
    var y = Math.sin(ang) * radius + center[1];

    outerParticles.push(getClosestParticleToPosition(gp, x, y));
  }

  return outerParticles;
}

export default class Renderer {
  constructor(world, svgEl, { scale = 10} = {}) {
      // init large buffer geometry
      this.maxVertices = 31000;
      this.world = world;
      this.positions = [];
      this.colors = [];
      this.currentVertex = 0;
      this.svgEl = svgEl;
      this.scale = scale;
  }

  draw() {
    // draw particle systems
    for (let i = 0, max = this.world.particleSystems.length; i < max; i++) {
        this.drawParticleSystem(this.world.particleSystems[i]);
    }
  }

  insertLine(x1, y1, x2, y2, r, g, b) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1 * this.scale);
    line.setAttribute('y1', y1 * this.scale);
    line.setAttribute('x2', x2 * this.scale);
    line.setAttribute('y2', y2 * this.scale);
    line.setAttribute('stroke', 'black');
    line.setAttribute('fill', 'transparent');
    this.svgEl.appendChild(line);
  }

  upsertPath(particles, index) {
    let path = `M ${particles[0][0] * this.scale} ${particles[0][1] * this.scale} `;

    for(var i = 1; i < particles.length; i++) {
      path += `L ${particles[i][0] * this.scale} ${particles[i][1] * this.scale} `;
    }
    path += 'z';
    
    let el = this.svgEl.children[index];
    if (typeof el == 'undefined') {
      el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      this.svgEl.appendChild(el);
    }
    el.setAttribute('d', path);
    el.setAttribute('stroke', 'black');
    el.setAttribute('fill', 'transparent');
  }
  
  drawParticleSystem(system) {
    var particles = system.GetPositionBuffer();
    var particleGroups = system.particleGroups;

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

      this.upsertPath(outerParticles, j);
    }
  }
}
