
const { b2AABB, b2_dynamicBody, b2Vec2 } = liquidfun;

class QueryCallback {
  constructor(point) {
    this.point = point;
    this.fixture = null;
  }

  ReportFixture(fixture) {
    var body = fixture.body;
    if (body.GetType() === b2_dynamicBody) {
      var inside = fixture.TestPoint(this.point);
      if (inside) {
        this.fixture = fixture;
        return true;
      }
    }
    return false;
  }
}

export function hitTest(world, coords) {
    const bb = new b2AABB();
    const affordance = new b2Vec2(0.01, 0.01);
    b2Vec2.Sub(bb.lowerBound, coords, affordance);
    b2Vec2.Add(bb.upperBound, coords, affordance);

    const queryCallback = new QueryCallback(coords);
    world.QueryAABB(queryCallback, bb);
    return queryCallback.fixture
}