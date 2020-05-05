
const { 
    b2BodyDef,
    b2CircleShape,
    b2MouseJointDef,
    b2ParticleGroupDef,
    b2ParticleSystemDef,
    b2PolygonShape,
    b2Vec2,
    b2Rot,
    b2_staticBody,
    b2_springParticle,
    b2_solidParticleGroup,
    b2_kinematicBody,
    b2_dynamicBody
} = liquidfun;

function createJoint(world, body) {
    const gd = new b2BodyDef();
    const ground = world.CreateBody(gd);
    const jd = new b2MouseJointDef();
    jd.bodyA = ground;
    jd.bodyB = body;
    //jd.maxForce = 200 * body.getMass();
    body.SetAwake(true);
    return world.CreateJoint(jd);
}

export function moveBounds({ bounds, width, height, scale }) {
    const { bottom, left, right, top } = bounds;
    const w = width/scale;
    const h = height/scale
    

    //bottom.SetTarget(new b2Vec2(0, h));
    //right.SetTarget(new b2Vec2(w, 0));
    bottom.SetTransform(new b2Vec2(0, h + 1), 0);
    right.SetTransform(new b2Vec2(w + 1, 0), 0);

}

function createBox(world, ...vertices) {
    const bd = new b2BodyDef();
    bd.type = b2_staticBody;
    bd.gravityScale = 0;
    const body = world.CreateBody(bd);
    const shape = new b2PolygonShape();
    vertices.forEach((v) => {
        shape.vertices.push(v);
    })
    body.CreateFixtureFromShape(shape, 1000);
    return body;
}


export function createBounds({ world, width=800, height=600, scale=10}) {
    var bd = new b2BodyDef();
    var ground = world.CreateBody(bd);

    const w = width/scale;
    const h = height/scale
    const max = 10000 / scale;

    // set boundary box
    // h/v vertices are initially the same and will be translated by #moveBounds
    const horz = [new b2Vec2(0, -1), new b2Vec2(max, -1), new b2Vec2(max, 0), new b2Vec2(0, 0)];
    const top = createBox(world, ...horz);
    const bottom = createBox(world, ...horz);
    
    const vert = [new b2Vec2(-1, -1), new b2Vec2(-1, max), new b2Vec2(0, max), new b2Vec2(0, -1)];
    const left = createBox(world, ...vert);
    const right = createBox(world, ...vert);
     
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

export function createBlob({ particleSystem, radius = 3, x, y, width, scale = 10 }) {
    const circle = new b2CircleShape();
    circle.position.Set(radius + x / scale, radius + y / scale);
    circle.radius = radius;
    const pgd = new b2ParticleGroupDef();
    pgd.flags = b2_springParticle;
    pgd.groupFlags = b2_solidParticleGroup;
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