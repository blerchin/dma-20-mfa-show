
const { 
    b2BodyDef,
    b2CircleShape,
    b2ParticleGroupDef,
    b2ParticleSystemDef,
    b2PolygonShape,
    b2Vec2,
    b2_springParticle,
    b2_solidParticleGroup,
    b2_dynamicBody
} = liquidfun;


export function createBounds({ world, width=800, height=600, scale=10}) {
    var bd = new b2BodyDef();
    var ground = world.CreateBody(bd);

    const w = width/scale;
    const h = height/scale

    //set boundary box
    const shape1 = new b2PolygonShape();
    shape1.vertices.push(new b2Vec2(0, -1));
    shape1.vertices.push(new b2Vec2(w, -1));
    shape1.vertices.push(new b2Vec2(w, 0));
    shape1.vertices.push(new b2Vec2(0, 0));
    ground.CreateFixtureFromShape(shape1, 0);
  
    const shape2 = new b2PolygonShape();
    shape2.vertices.push(new b2Vec2(-1, -1));
    shape2.vertices.push(new b2Vec2(0, -1));
    shape2.vertices.push(new b2Vec2(0, h));
    shape2.vertices.push(new b2Vec2(-1, h));
    ground.CreateFixtureFromShape(shape2, 0);
  
    const shape3 = new b2PolygonShape();
    shape3.vertices.push(new b2Vec2(w + 1, -1));
    shape3.vertices.push(new b2Vec2(w + 1, h + 1));
    shape3.vertices.push(new b2Vec2(w, h + 1));
    shape3.vertices.push(new b2Vec2(w, -1));
    ground.CreateFixtureFromShape(shape3, 0);
    
    const shape4 = new b2PolygonShape();
    shape4.vertices.push(new b2Vec2(-1, h - 2));
    shape4.vertices.push(new b2Vec2(w + 1, h - 2));
    shape4.vertices.push(new b2Vec2(w, h - 1 ));
    shape4.vertices.push(new b2Vec2(-1, h - 1));
    ground.CreateFixtureFromShape(shape4, 0);
}

export function createParticleSystem(world, radius = 0.3) {
    const psd = new b2ParticleSystemDef();
    psd.radius = radius;
    return world.CreateParticleSystem(psd);
};

export function createBlob({ particleSystem, radius = 3, y, width, scale = 10 }) {
    const circle = new b2CircleShape();
    circle.position.Set( width / scale / 2, radius + y / scale);
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
    const body = world.CreateBody(bd);
    circle.position.Set(...initialPosition);
    circle.radius = radius;
    body.CreateFixtureFromShape(circle, 3);
    return body;
}