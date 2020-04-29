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

export default function createElasticParticles({ world, numBlobs = 11, width=800, height=600, scale=10}) {
    var bd = new b2BodyDef();
    var ground = world.CreateBody(bd);

    window.world = world; //fuckkkkkkkk me

    const w = width/scale;
    const h = height/scale
  
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
    shape4.vertices.push(new b2Vec2(-1, h));
    shape4.vertices.push(new b2Vec2(w + 1, h));
    shape4.vertices.push(new b2Vec2(w, h + 1));
    shape4.vertices.push(new b2Vec2(-1, h + 1));
    ground.CreateFixtureFromShape(shape4, 0);
  
    const psd = new b2ParticleSystemDef();
    psd.radius = 0.1;
    const particleSystem = world.CreateParticleSystem(psd);
  
    for(let i = 0; i < numBlobs; i++) {
        const circle = new b2CircleShape();
        circle.position.Set( Math.floor(i / 4) * 10 + 10, (i % 4) *6 + 5);
        circle.radius = 4;
        const pgd = new b2ParticleGroupDef();
        pgd.flags = b2_springParticle;
        pgd.groupFlags = b2_solidParticleGroup;
        pgd.shape = circle;
        pgd.color.Set(Math.random()*255, Math.random()*255, Math.random()*255, 255);
        particleSystem.CreateParticleGroup(pgd);
    }
  
    // circle
    bd = new b2BodyDef();
    const circle = new b2CircleShape();
    bd.type = b2_dynamicBody;
    const body = world.CreateBody(bd);
    circle.position.Set(0, 8);
    circle.radius = 0.5;
    body.CreateFixtureFromShape(circle, 0.5);
  }