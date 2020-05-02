import React, { useEffect, useRef } from 'react';

/**
 * Big round of applause for Varun Vachhar
 * http://varun.ca/metaballs
 * Based on Metaball script by Hiroyuki Sato
 * http://shspage.com/aijs/en/#metaball
 */


export default function metaball(ctx, radius, center1, center2, handleSize = 2.4, v = 0.5) {
    const radius1 = radius;
    const radius2 = radius;
    const HALF_PI = Math.PI / 2;
    const d = dist(center1, center2);
    //const maxDist = radius1 + radius2 * 2.5;
    const maxDist = 400;
    let u1, u2;
  
    if (radius1 === 0 || radius2 === 0 || d > maxDist || d <= Math.abs(radius1 - radius2)) {
      return '';
    }
  
    if (d < radius1 + radius2) {
      u1 = Math.acos(
        (radius1 * radius1 + d * d - radius2 * radius2) / (2 * radius1 * d),
      );
      u2 = Math.acos(
        (radius2 * radius2 + d * d - radius1 * radius1) / (2 * radius2 * d),
      );
    } else {
      u1 = 0;
      u2 = 0;
    }
  
    // All the angles
    const angleBetweenCenters = angle(center2, center1);
    const maxSpread = Math.acos((radius1 - radius2) / d);
  
    const angle1 = angleBetweenCenters + u1 + (maxSpread - u1) * v;
    const angle2 = angleBetweenCenters - u1 - (maxSpread - u1) * v;
    const angle3 = angleBetweenCenters + Math.PI - u2 - (Math.PI - u2 - maxSpread) * v;
    const angle4 = angleBetweenCenters - Math.PI + u2 + (Math.PI - u2 - maxSpread) * v;
    // Points
    const p1 = getVector(center1, angle1, radius1);
    const p2 = getVector(center1, angle2, radius1);
    const p3 = getVector(center2, angle3, radius2);
    const p4 = getVector(center2, angle4, radius2);
  
    // Define handle length by the
    // distance between both ends of the curve
    const totalRadius = radius1 + radius2;
    const d2Base = Math.min(v * handleSize, dist(p1, p3) / totalRadius);
  
    // Take into account when circles are overlapping
    const d2 = d2Base * Math.min(1, d * 2 / (radius1 + radius2));
  
    const r1 = radius1 * d2;
    const r2 = radius2 * d2;
  
    const h1 = getVector(p1, angle1 - HALF_PI, r1);
    const h2 = getVector(p2, angle2 + HALF_PI, r1);
    const h3 = getVector(p3, angle3 + HALF_PI, r2);
    const h4 = getVector(p4, angle4 - HALF_PI, r2);
  
    return metaballToPath(ctx,
      p1, p2, p3, p4,
      h1, h2, h3, h4,
      d > radius1,
      radius2,
    );
  }
  
  function metaballToPath(ctx, p1, p2, p3, p4, h1, h2, h3, h4, escaped, r) {
    ctx.moveTo(...p1);
    ctx.bezierCurveTo(...h1, ...h3, ...p3);
    ctx.lineTo(...p4);
    ctx.bezierCurveTo(...h4, ...h2, ...p2);
    /*
    return [
      'M', p1,
      'C', h1, h3, p3,
      'A', r, r, 0, escaped ? 1 : 0, 0, p4,
      'C', h4, h2, p2,
    ].join(' ');
    */
  }
  
  
  function dist([x1, y1], [x2, y2]) {
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
  }
  
  function angle([x1, y1], [x2, y2]) {
    return Math.atan2(y1 - y2, x1 - x2);
  }
  
  function getVector([cx, cy], a, r) {
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }
  
export function Test() {
    //this is just a react component for testing the metaball code
    const metaBall = useRef(null);
    useEffect(() => {
        const ctx = metaBall.current.getContext('2d');
        ctx.fillStyle = 'black';
        const radius = 80;
        const ctr1 = [100, 100];
        ctx.beginPath();
        ctx.arc(...ctr1, radius, 0, Math.PI * 2);
        ctx.fill();
        const ctr2 = [350, 100];
        ctx.beginPath();
        ctx.arc(...ctr2, radius, 0, Math.PI * 2);
        ctx.fill();
        const ctr3 = [250, 300];
        ctx.arc(...ctr3, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle='white';
        ctx.beginPath();
        metaball(ctx, radius, ctr1, ctr2, 1.3, .6);
        metaball(ctx, radius, ctr2, ctr3, 1.3);
        metaball(ctx, radius, ctr3, ctr1, 1.3);
        ctx.fill();
    });
    
    return (
        <canvas ref={metaBall}  width={800} height={800} />
    );
}