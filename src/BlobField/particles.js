
const { 
    b2BodyDef,
    b2CircleShape,
    b2MouseJointDef,
    b2WeldJointDef,
    b2ParticleGroupDef,
    b2ParticleSystemDef,
    b2PolygonShape,
    b2Vec2,
    b2_springParticle,
    b2_dynamicBody
} = liquidfun;

function createJoint(world, body) {
    const gd = new b2BodyDef();
    gd.position.Set(0, 0);
    const ground = world.CreateBody(gd);
    const jd = new b2WeldJointDef();
    jd.bodyA = ground;
    jd.bodyB = body;
    world.CreateJoint(jd);
    return ground;
}


export function createMouseJoint (world, body, maxForce) {
    var md = new b2MouseJointDef();
    const gd = new b2BodyDef();
    const ground = world.CreateBody(gd);
    md.bodyA = ground;
    md.bodyB = body;
    md.maxForce = maxForce || 100 * body.GetMass();
    const mouseJoint = world.CreateJoint(md);
    body.SetAwake(true);
    return mouseJoint;
}

export function moveBounds({ bounds, width, height, scale }) {
    const { bottom, right } = bounds;
    const w = width/scale;
    const h = height/scale

    bottom.SetTransform(new b2Vec2(0, h+1), 0);
    right.SetTransform(new b2Vec2(w+1, 0), 0);
}

function createBox(world, ...vertices) {
    const bd = new b2BodyDef();
    bd.type = b2_dynamicBody;
    bd.gravityScale = 0;
    const body = world.CreateBody(bd);
    const shape = new b2PolygonShape();
    vertices.forEach((v) => {
        shape.vertices.push(v);
    })
    body.CreateFixtureFromShape(shape, 10);
    return body;
}


export function createBounds({ world, width=800, height=600, scale=10}) {
    var bd = new b2BodyDef();
    const max = 10000 / scale;

    // set boundary box
    // h/v vertices are initially the same and will be translated by #moveBounds
    const horz = [new b2Vec2(0, -1), new b2Vec2(max, -1), new b2Vec2(max, 0), new b2Vec2(0, 0)];
    const top = createJoint(world, createBox(world, ...horz));
    const bottom = createJoint(world, createBox(world, ...horz));
    
    const vert = [new b2Vec2(-1, -1), new b2Vec2(-1, max), new b2Vec2(0, max), new b2Vec2(0, -1)];
    const left = createJoint(world, createBox(world, ...vert));
    const right = createJoint(world, createBox(world, ...vert));
     
    return { 
        bottom,
        left,
        right,
        top
     };
}

export function createParticleSystem(world, radius = 0.3) {
    const psd = new b2ParticleSystemDef();
    psd.radius = radius;
    return world.CreateParticleSystem(psd);
};

export function createBlobs({ artists, particleSystem, width, height, scale }) {
    var spawnRowLen = 5;
    var spawnColLen = 2

    //Use height and magic number to scale blobs
    var blobSize = Math.sqrt((height * height) + (width * width)) / 1100;
    artists.forEach((_, i) =>
        createBlob({
        particleSystem,
        x: (((i % spawnRowLen) / spawnRowLen) * (width*.7)),
        y:  (Math.floor(i / spawnRowLen) * (height*.8)/(spawnColLen+1)),
        radius: blobSize,
        width,
        scale
        }));
}

export function createBlob({ particleSystem, radius = 3, x, y, scale = 10 }) {
    const circle = new b2CircleShape();
    circle.position.Set(radius + x / scale, radius + y / scale);
    circle.radius = radius;
    const pgd = new b2ParticleGroupDef();
    pgd.flags = b2_springParticle;
    pgd.shape = circle;
    pgd.color.Set(Math.random()*255, Math.random()*255, Math.random()*255, 255);
    particleSystem.CreateParticleGroup(pgd);
}

export function createCursor(world, { initialPosition = [1, 1], radius = 1 } = {}) {
    const bd = new b2BodyDef();
    const circle = new b2CircleShape();
    bd.type = b2_dynamicBody;
    bd.gravityScale = 0;
    const body = world.CreateBody(bd);
    circle.position.Set(...initialPosition);
    circle.radius = radius;
    body.CreateFixtureFromShape(circle, 3);
    return body;
}