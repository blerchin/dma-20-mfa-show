(this["webpackJsonpdma-20"]=this["webpackJsonpdma-20"]||[]).push([[0],[,function(e,t,a){e.exports={artistName:"style_artistName__12EFZ",artistNameTag:"style_artistNameTag__cy5sA"}},,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),o=(a(12),a(13),a(6)),c=(liquidfun,liquidfun.b2BodyDef),l=liquidfun.b2CircleShape,u=liquidfun.b2ParticleGroupDef,h=liquidfun.b2ParticleSystemDef,d=liquidfun.b2PolygonShape,v=liquidfun.b2Vec2,p=liquidfun.b2_springParticle,m=liquidfun.b2_solidParticleGroup,f=liquidfun.b2_dynamicBody;var w=a(4),g=a(5);function y(e){for(var t=0,a=0,n=0;n<e.length;n+=2)t+=e[n],a+=e[n+1];return[t/(e.length/2),a/(e.length/2)]}function b(e,t,a){for(var n=-1,r=[0,0],i=0;i<e.length;i+=2){var s=e[i],o=e[i+1],c=t-s,l=a-o,u=Math.sqrt(c*c+l*l);(-1==n||u<n)&&(n=u,r=[s,o])}return r}function S(e,t,a){for(var n=[],r=0;r<20;r++){var i=r/20*(2*Math.PI),s=Math.cos(i)*a+t[0],o=Math.sin(i)*a+t[1];n.push(b(e,s,o))}return n}function P(e,t){var a=t[0]-e[0],n=t[1]-e[1];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),angle:Math.atan2(n,a)}}function E(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.1,i=t||e,s=a||e,o=P(i,s),c=o.angle+(n?Math.PI:0),l=o.length*r,u=e[0]+Math.cos(c)*l,h=e[1]+Math.sin(c)*l;return[u,h]}var M=function(){function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.scale,i=void 0===r?10:r;Object(w.a)(this,e),this.world=t,this.svgEl=a,this.scale=i,this.groupLocations=[]}return Object(g.a)(e,[{key:"draw",value:function(){for(var e=0,t=this.world.particleSystems.length;e<t;e++)this.drawParticleSystem(this.world.particleSystems[e])}},{key:"getGroupLocations",value:function(){return this.groupLocations}},{key:"upsertPath",value:function(e,t){for(var a=this,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.map((function(e){return[e[0]*a.scale,e[1]*a.scale]})),i="M ".concat(r[0][0]," ").concat(r[0][1]," "),s=1;s<e.length;s++)if(n){var o=E(r[s-1],r[s-2],r[s]),c=E(r[s],r[s-1],r[s+1],!0);i+="C ".concat(o[0],",").concat(o[1]," ").concat(c[0],", ").concat(c[1],", ").concat(r[s][0]," ").concat(r[s][1])}else i+="L ".concat(r[s][0]," ").concat(r[s][1]," ");i+="z";var l=this.svgEl.children[t];"undefined"==typeof l&&(l=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svgEl.appendChild(l)),l.setAttribute("d",i),l.setAttribute("stroke","black"),l.setAttribute("fill","transparent")}},{key:"drawParticleSystem",value:function(e){var t=e.GetPositionBuffer(),a=e.particleGroups;this.groupLocations=[];for(var n=0;n<a.length;n++){var r=2*a[n].GetBufferIndex(),i=r+2*a[n].GetParticleCount(),s=t.slice(r,i),o=y(s),c=S(s,o,5);this.groupLocations[n]={centerPoint:[o[0]*this.scale,o[1]*this.scale],initialPoint:[s[0]*this.scale,s[1]*this.scale]},this.upsertPath(c,n)}}}]),e}(),C={artists:[{name:"Zeynep Abes"},{name:"Graham Akins"},{name:"Berfin Ataman"},{name:"Erin Cooney"},{name:"Clara Leivas"},{name:"Ben Lerchin"},{name:"Blaine O'Neill"},{name:"Miles Peyton"},{name:"Hirad Sab"},{name:"Dalena Tran"},{name:"Leming Z/C"}]},q=a(1),B=(liquidfun,liquidfun.b2Vec2),k=liquidfun.b2World;function F(e){var t=e.scale,a=void 0===t?20:t,i=Object(n.useRef)(null),s=Object(n.useState)([]),w=Object(o.a)(s,2),g=w[0],y=w[1];return Object(n.useEffect)((function(){var e=new k(new B(0,5));window.world=e,function(e){if(null!==e){for(;e.joints.length>0;)e.DestroyJoint(e.joints[0]);for(;e.bodies.length>0;)e.DestroyBody(e.bodies[0]);for(;e.particleSystems.length>0;)e.DestroyParticleSystem(e.particleSystems[0])}}(e),function(e){var t=e.world,a=e.numBlobs,n=void 0===a?11:a,r=e.width,i=void 0===r?800:r,s=e.height,o=void 0===s?600:s,w=e.scale,g=void 0===w?10:w,y=new c,b=t.CreateBody(y),S=i/g,P=o/g,E=new d;E.vertices.push(new v(0,-1)),E.vertices.push(new v(S,-1)),E.vertices.push(new v(S,0)),E.vertices.push(new v(0,0)),b.CreateFixtureFromShape(E,0);var M=new d;M.vertices.push(new v(-1,-1)),M.vertices.push(new v(0,-1)),M.vertices.push(new v(0,P)),M.vertices.push(new v(-1,P)),b.CreateFixtureFromShape(M,0);var C=new d;C.vertices.push(new v(S+1,-1)),C.vertices.push(new v(S+1,P+1)),C.vertices.push(new v(S,P+1)),C.vertices.push(new v(S,-1)),b.CreateFixtureFromShape(C,0);var q=new d;q.vertices.push(new v(-1,P)),q.vertices.push(new v(S+1,P)),q.vertices.push(new v(S,P+1)),q.vertices.push(new v(-1,P+1)),b.CreateFixtureFromShape(q,0);var B=new h;B.radius=.2;for(var k=t.CreateParticleSystem(B),F=0;F<n;F++){var N=new l;N.position.Set(10*Math.floor(F/4)+10,F%4*6+5),N.radius=3;var x=new u;x.flags=p,x.groupFlags=m,x.shape=N,x.color.Set(255*Math.random(),255*Math.random(),255*Math.random(),255),k.CreateParticleGroup(x)}y=new c;var G=new l;y.type=f;var L=t.CreateBody(y);G.position.Set(0,8),G.radius=.5,L.CreateFixtureFromShape(G,.5)}({world:e,scale:a,numBlobs:C.artists.length});var t=new M(e,i.current,{scale:a});t.draw(),window.setInterval((function(){e.Step(1/60,5,3),t.draw(),y(t.getGroupLocations())}),1e3/60)}),[a]),r.a.createElement("div",null,r.a.createElement("svg",{width:800,height:600},r.a.createElement("g",{ref:i,style:{transform:"scale(1)"}}),g.map((function(e,t){var a=e.initialPoint;return r.a.createElement("g",{key:"artist-".concat(t)},r.a.createElement("rect",{className:q.artistNameTag,x:a[0],y:a[1],width:120,height:20}),r.a.createElement("text",{className:q.artistName,x:a[0],y:a[1]+16,width:120},C.artists[t].name.toUpperCase()))}))))}var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.82a15217.chunk.js.map