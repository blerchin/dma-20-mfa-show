(this["webpackJsonpdma-20"]=this["webpackJsonpdma-20"]||[]).push([[0],[,function(e,t,a){e.exports={artistName:"style_artistName__3T0Oq",artistNameTag:"style_artistNameTag__1TD4C",blob:"style_blob__1cFrO",cursor:"style_cursor__1z_IY"}},,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),s=a.n(i),o=(a(15),a(16),a(8)),c=a(4),l=a(5),u=a(9),h=(liquidfun,liquidfun.b2BodyDef),d=liquidfun.b2CircleShape,f=liquidfun.b2ParticleGroupDef,v=liquidfun.b2ParticleSystemDef,p=liquidfun.b2PolygonShape,m=liquidfun.b2Vec2,w=liquidfun.b2_springParticle,g=liquidfun.b2_solidParticleGroup,y=liquidfun.b2_dynamicBody;var b=a(1);liquidfun,liquidfun.b2_dynamicBody;function S(e){for(var t=0,a=0,r=0;r<e.length;r+=2)t+=e[r],a+=e[r+1];return[t/(e.length/2),a/(e.length/2)]}function E(e,t,a){for(var r=-1,n=[0,0],i=0;i<e.length;i+=2){var s=e[i],o=e[i+1],c=t-s,l=a-o,u=Math.sqrt(c*c+l*l);(-1==r||u<r)&&(r=u,n=[s,o])}return n}function q(e,t,a){for(var r=[],n=0;n<20;n++){var i=n/20*(2*Math.PI),s=Math.cos(i)*a+t[0],o=Math.sin(i)*a+t[1];r.push(E(e,s,o))}return r}function C(e,t){var a=t[0]-e[0],r=t[1]-e[1];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(r,2)),angle:Math.atan2(r,a)}}function P(e,t,a,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.1,i=t||e,s=a||e,o=C(i,s),c=o.angle+(r?Math.PI:0),l=o.length*n,u=e[0]+Math.cos(c)*l,h=e[1]+Math.sin(c)*l;return[u,h]}var B=function(){function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.scale,i=void 0===n?10:n;Object(c.a)(this,e),this.world=t,this.svgEl=a,this.scale=i,this.groupLocations=[]}return Object(l.a)(e,[{key:"draw",value:function(){for(var e=0,t=this.world.particleSystems.length;e<t;e++)this.drawParticleSystem(this.world.particleSystems[e])}},{key:"getGroupLocations",value:function(){return this.groupLocations}},{key:"upsertPath",value:function(e,t){for(var a=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e.map((function(e){return[e[0]*a.scale,e[1]*a.scale]})),i="M ".concat(n[0][0]," ").concat(n[0][1]," "),s=1;s<e.length;s++)if(r){var o=P(n[s-1],n[s-2],n[s]),c=P(n[s],n[s-1],n[s+1],!0);i+="C ".concat(o[0],",").concat(o[1]," ").concat(c[0],", ").concat(c[1],", ").concat(n[s][0]," ").concat(n[s][1])}else i+="L ".concat(n[s][0]," ").concat(n[s][1]," ");i+="z";var l=this.svgEl.querySelectorAll(".".concat(b.blob))[t];"undefined"===typeof l&&((l=document.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("class",b.blob),this.svgEl.appendChild(l)),l.setAttribute("d",i),l.setAttribute("stroke","black"),l.setAttribute("fill","transparent")}},{key:"drawCursor",value:function(e){var t=e.GetPosition(),a=this.svgEl.querySelector("#cursor");a||((a=document.createElementNS("http://www.w3.org/2000/svg","circle")).id="cursor",a.setAttribute("class",b.cursor),this.svgEl.appendChild(a)),a.setAttribute("cx",t.x*this.scale),a.setAttribute("cy",t.y*this.scale),a.setAttribute("r",e.fixtures[0].shape.radius*this.scale)}},{key:"drawParticleSystem",value:function(e){var t=e.GetPositionBuffer(),a=e.particleGroups;this.groupLocations=[];for(var r=0;r<a.length;r++){var n=2*a[r].GetBufferIndex(),i=n+2*a[r].GetParticleCount(),s=t.slice(n,i),o=S(s),c=q(s,o,5);this.groupLocations[r]={centerPoint:[o[0]*this.scale,o[1]*this.scale],initialPoint:[s[0]*this.scale,s[1]*this.scale]},this.upsertPath(c,r)}}}]),e}(),M={artists:[{name:"Zeynep Abes"},{name:"Graham Akins"},{name:"Berfin Ataman"},{name:"Erin Cooney"},{name:"Clara Leivas"},{name:"Ben Lerchin"},{name:"Blaine O'Neill"},{name:"Miles Peyton"},{name:"Hirad Sab"},{name:"Dalena Tran"},{name:"Leming Z/C"}]},A=(liquidfun,liquidfun.b2AABB,liquidfun.b2_dynamicBody,liquidfun.b2BodyDef),_=liquidfun.b2MouseJointDef,x=liquidfun.b2Vec2,k=liquidfun.b2World;function G(e){var t=e.scale,a=void 0===t?20:t,i=Object(r.useRef)(null),s=Object(r.useRef)(null),c=Object(r.useState)([]),l=Object(o.a)(c,2),S=l[0],E=l[1];return Object(r.useEffect)((function(){var e=new k(new x(0,5));window.world=e,function(e){if(null!==e){for(;e.joints.length>0;)e.DestroyJoint(e.joints[0]);for(;e.bodies.length>0;)e.DestroyBody(e.bodies[0]);for(;e.particleSystems.length>0;)e.DestroyParticleSystem(e.particleSystems[0])}}(e);var t=new A,r=e.CreateBody(t);!function(e){var t=e.world,a=e.numBlobs,r=void 0===a?11:a,n=e.width,i=void 0===n?800:n,s=e.height,o=void 0===s?600:s,c=e.scale,l=void 0===c?10:c,u=new h,y=t.CreateBody(u),b=i/l,S=o/l,E=new p;E.vertices.push(new m(0,-1)),E.vertices.push(new m(b,-1)),E.vertices.push(new m(b,0)),E.vertices.push(new m(0,0)),y.CreateFixtureFromShape(E,0);var q=new p;q.vertices.push(new m(-1,-1)),q.vertices.push(new m(0,-1)),q.vertices.push(new m(0,S)),q.vertices.push(new m(-1,S)),y.CreateFixtureFromShape(q,0);var C=new p;C.vertices.push(new m(b+1,-1)),C.vertices.push(new m(b+1,S+1)),C.vertices.push(new m(b,S+1)),C.vertices.push(new m(b,-1)),y.CreateFixtureFromShape(C,0);var P=new p;P.vertices.push(new m(-1,S-2)),P.vertices.push(new m(b+1,S-2)),P.vertices.push(new m(b,S-1)),P.vertices.push(new m(-1,S-1)),y.CreateFixtureFromShape(P,0);var B=new v;B.radius=.2;for(var M=t.CreateParticleSystem(B),A=0;A<r;A++){var _=new d;_.position.Set(10*Math.floor(A/4)+10,A%4*6+5),_.radius=3;var x=new f;x.flags=w,x.groupFlags=g,x.shape=_,x.color.Set(255*Math.random(),255*Math.random(),255*Math.random(),255),M.CreateParticleGroup(x)}}({world:e,scale:a,numBlobs:M.artists.length});var n=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.initialPosition,n=void 0===r?[1,1]:r,i=a.radius,s=void 0===i?1:i,o=new h,c=new d;o.type=y;var l=e.CreateBody(o);return(t=c.position).Set.apply(t,Object(u.a)(n)),c.radius=s,l.CreateFixtureFromShape(c,3),l}(e),o=new _;o.bodyA=r,o.bodyB=n,o.maxForce=20*n.GetMass();var c=e.CreateJoint(o);n.SetAwake(!0);var l=new B(e,i.current,{scale:a});l.draw(),window.setInterval((function(){e.Step(1/60,5,3),l.draw(),l.drawCursor(n),E(l.getGroupLocations())}),1e3/60),s.current.addEventListener("mousemove",function(e,t,a){return function(e){if(a){var r=new x(e.offsetX/t,e.offsetY/t);a.SetTarget(r)}}}(0,a,c))}),[a]),n.a.createElement("div",null,n.a.createElement("svg",{ref:s,width:800,height:600},n.a.createElement("defs",null,n.a.createElement("radialGradient",{id:"cursorGradient"},n.a.createElement("stop",{offset:"0%","stop-color":"#00ff3399"}),n.a.createElement("stop",{offset:"100%","stop-color":"#00ff3300"}))),n.a.createElement("g",{ref:i,style:{transform:"scale(1)"}}),S.map((function(e,t){var a=e.initialPoint;return n.a.createElement("g",{key:"artist-".concat(t)},n.a.createElement("rect",{className:b.artistNameTag,x:a[0],y:a[1],width:120,height:20}),n.a.createElement("text",{className:b.artistName,x:a[0],y:a[1]+16,width:120},M.artists[t].name.toUpperCase()))}))))}var F=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.90236660.chunk.js.map