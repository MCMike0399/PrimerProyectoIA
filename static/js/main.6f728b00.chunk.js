/*! For license information please see main.6f728b00.chunk.js.LICENSE.txt */
(this["webpackJsonpprimer-proyecto-ia"]=this["webpackJsonpprimer-proyecto-ia"]||[]).push([[0],{15:function(n,t,e){var r=e(36).PQ;function i(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.x=n,this.y=t,this.simbol=e,this.digit=null,this.code=r}function a(n){for(var t=0;t<n.length;t++)for(var e=0;e<n[0].length;e++)if(0===n[t][e])return new i(t,e);return null}var o=[new i(-1,0,"^",0),new i(0,-1,"<",1),new i(1,0,"v",2),new i(0,1,">",3)];function c(n){for(var t="",e=0;e<9;e++)t+=n[Math.floor(e/3)][e%3];return t}var s=[0,2];function u(n){var t=function(t,e){return n[e]>=s[0]&&n[e]<=s[1]};return!(!t(0,"x")||!0!==t(0,"y"))}function l(n,t,e){var r=n.arr[t.x][t.y];n.arr[t.x][t.y]=n.arr[e.x][e.y],n.arr[e.x][e.y]=r}var d=[];d.push([2,2]);for(var h=0;h<8;h++)d.push([Math.floor(h/3),h%3]);function f(n){for(var t,e=0,r=0;r<3;r++)for(var i=0;i<3;i++)if(2!==i||2!==r){t=n.arr[r][i];var a=d[t];e+=Math.abs(a[0]-r)+Math.abs(a[1]-i)}return e}function g(n){this.ed=n,this.extract=null,this.add=null,this.calc_custo=null,this.set=function(n){this.ed=n},this.length=function(){return this.ed.length},this.name="BUSCA"}function p(){g.call(this,[]),this.extract=function(){return this.ed.pop()},this.add=function(n){this.ed.push(n)},this.calc_custo=function(n){return n.custo+1},this.name="DFS"}function x(){p.call(this),this.extract=function(){var n=this.ed[0];return this.ed=this.ed.splice(1,this.ed.length),n},this.name="BFS"}function b(){g.call(this,new r),this.extract=function(){return this.ed.extract()},this.add=function(n){this.ed.add(n)},this.calc_custo=function(n){return f(n)},this.length=function(){return this.ed.size()},this.name="GREEDY"}function m(){b.call(this),this.calc_custo=function(n){return f(n)+n.altura},this.name="AESTRELA"}function j(n,t){var e=window.performance.now(),r=function(n,t){t.add(n);for(var e,r,i=1,a=0,s=0,d=0,h=new Map,f=[],g=[],p=0;t.length()>0;){if(e=t.extract(),a++,p=Math.max(e.altura,p),d=Math.max(t.length(),d),(g=[]).push("ESTOU EM:<br>"+e.arr.join("<br>")+"<br>"),!0===("123456780"===e.str))return g.push("EH A SOLUCAO<br>"),f.push(g.join(" ")),{estado_resultado:e,logs:f,nosVisitados:a,nosFronteira:i,maxProfundidade:p,name:t.name,jaVisitados:s,maxFronteira:d};!0!==h.has(e.str)?(h.set(e.str,!0),g.push("Adicionado: <br>"),o.map((function(n){var a,o;if(a=e.zero,o=n,!0===u(r={x:a.x+o.x,y:a.y+o.y})){var s=JSON.parse(JSON.stringify(e));n.digit=s.arr[r.x][r.y],l(s,s.zero,r),s.zero=r,s.str=c(s.arr),s.moves.push(JSON.parse(JSON.stringify(n))),s.altura=e.altura+1,s.custo=t.calc_custo(s),t.add(s),g.push(s.arr.join("<br>")+"<br>--custo: "+s.custo+"--<br><br>"),i++}})),f.push(g.join(" "))):(s++,g.push("JA VISITADO!<br>"),f.push(g.join(" ")))}return null}(n,t);return{time:window.performance.now()-e,resultado_busca:r}}n.exports={DFS:function(n){return j(n,new p)},BFS:function(n){return j(n,new x)},GREEDY:function(n){return j(n,new b)},AESTRELA:function(n){return j(n,new m)},State:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.arr=n,this.str=c(n),this.moves=[],this.zero=a(n),this.custo=t,this.altura=e}}},36:function(n,t){n.exports.PQ=function(){var n=[];function t(t,e){var r=n[t-1];n[t-1]=n[e-1],n[e-1]=r}function e(t,e){return n[t-1].custo<n[e-1].custo}this.up=function(){for(var r=n.length,i=function(n){return Math.floor(n/2)};r>=2&&!0===e(r,i(r));)t(i(r),r),r=i(r)},this.down=function(r){for(var i,a=r,o=n.length,c=Math.floor(o/2);a<=c&&((i=2*a)<o&&!0===e(i+1,i)&&i++,!0===e(i,a));)t(i,a),a=i},this.maxHeap=function(){for(var t=Math.floor(n.length/2);t>=1;t--)this.down(t)},this.extract=function(){var t=n[0],e=n.pop();return n.length>0&&(n[0]=e),this.down(1),t},this.add=function(t){n.push(t),this.up()},this.get=function(){return console.log(n)},this.size=function(){return n.length}}},54:function(n,t,e){"use strict";e.r(t);var r,i=e(2),a=e(0),o=e.n(a),c=e(10),s=e.n(c),u=e(20),l=e(12),d=e(7),h=e(25),f=e(4),g="SET_MOVE",p="VERIFY_MOVE",x="RESET",b="SOLVING",m=Array(3).fill(0).map((function(n,t){return t})),j=function(n){return m.includes(n)},v=function(n,t){return{x:n.x+t.x,y:n.y+t.y}},O=[8,3,2,7,4,5,1,6,0],w=O.map((function(n,t){return{digit:n,pos:{x:Math.trunc(t/3),y:Math.trunc(t%3)},delta:{x:0,y:0}}})),y={grid:w,gridData:O,blankPosition:(r=w,r.filter((function(n){return 0===n.digit}))[0].pos),targetPosition:{x:0,y:0},targetDigit:0,canAnimate:!1,isSolving:!1,shift:{x:0,y:0}},S=function(n){var t=n.grid,e=n.gridData,r=n.targetDigit,i=n.shift,a=n.targetPosition,o=n.blankPosition;return{grid:t.map((function(n){return Object(f.a)(Object(f.a)({},n),function(n){var t,e,c=n.digit,s=n.delta;return 0===c?{pos:a,delta:v(s,i)}:c===r?{pos:o,delta:v(s,(t=-1,e=i,{x:e.x*t,y:e.y*t}))}:{}}(n))})),gridData:e.map((function(n){return 0===n?r:n===r?0:n})),blankPosition:a,shift:{x:0,y:0},canAnimate:!1}},k=function(n,t){var e=n.blankPosition,r=n.gridData,i=v(e,t),a=function(n){var t=n.x,e=n.y;return j(t)&&j(e)}(i)?[i,!0]:[e,!1],o=Object(h.a)(a,2),c=o[0],s=o[1];return{targetPosition:c,targetDigit:r[3*c.y+c.x],shift:t,canAnimate:s}};var E=Object(d.c)({moves:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(f.a)(Object(f.a)({},n),k(n,t.shift));case g:return Object(f.a)(Object(f.a)({},n),S(n));case x:return Object(f.a)({},y);case b:return Object(f.a)(Object(f.a)({},n),{},{isSolving:t.bool});default:return n}}}),N={LEFT:37,UP:38,RIGHT:39,DOWN:40,W:87,A:65,D:68,S:83,ENTER:13},D=e(15),A={solveGrid:function(n){var t;return Object(D.AESTRELA)(new D.State([(t=n).slice(0,3),t.slice(3,6),t.slice(6,9)])).resultado_busca.estado_resultado.moves.map((function(n){return function(n){switch(console.log(n),n){case"v":return N.UP;case"^":return N.DOWN;case">":return N.LEFT;case"<":return N.RIGHT}}(n.simbol)}))}},P={x:1,y:0},R={x:-1,y:0},T={x:0,y:1},L={x:0,y:-1};function M(n){return{type:b,bool:n}}function I(n){return function(t,e){t(function(n){return{type:p,shift:n}}(n)),e().moves.canAnimate&&t({type:g})}}var F,U,C,G,_,z,V,J,H=function(){return I(R)},W=function(){return I(P)},Y=function(){return I(L)},B=function(){return I(T)},Q={goleft:W,goright:H,goup:B,godown:Y,goreset:function(){return function(n,t){var e=t().moves.isSolving;console.log(e),e?console.log("Is Solving! You can't reset now!"):n({type:x})}},start:function(){return function(n,t){var e=t().moves,r=e.gridData,i=e.isSolving;if(console.log(r,i),!i){var a=A.solveGrid(r);return new Promise((function(t){var e=0;n(M(!0));var r=setInterval((function(){switch(e===a.length&&(clearInterval(r),n(M(!1)),t()),a[e++]){case N.LEFT:n(W());break;case N.RIGHT:n(H());break;case N.UP:n(B());break;case N.DOWN:n(Y())}}),260)}))}console.log("ALREADY SOLVING! :D")}}},q=e(3),Z="#7a8890",K="#23272a",X="Pattaya",$=e(11),nn=e(1),tn=Object(q.b)((function(n){var t=n.children,e=n.className,r=n.style,i=n.delta,a=n.shift;return Object(nn.jsx)($.Spring,{config:$.config.gentle,native:!0,to:i,children:function(n){var i=n.x,o=n.y;return Object(nn.jsx)($.animated.div,{className:e,style:Object(f.a)(Object(f.a)({},r),{},{transform:Object($.interpolate)([i,o],(function(n,t){return"translate3d(".concat(n*a,"px,").concat(t*a,"px, 0)")}))}),children:Object(nn.jsx)("span",{children:t||"-"})})}})}))(F||(F=Object(i.a)(["\n  width: 80px;\n  height: 80px;\n  box-sizing: border-box;\n  margin: 5px;\n  background-color: white;\n  color: ",";\n  opacity: ",";\n  text-align: center;\n  font-weight: bolder;\n  font-family: 'Viga', sans-serif;\n  font-size: 3.6em;\n  border-radius: 10%;\n  position: relative;\n  span {\n    height: 90px;\n    line-height: 90 px;\n    display: block;\n  }\n"])),K,(function(n){return n.transparent?0:1})),en=Object(q.b)((function(n){var t=n.className,e=n.grid,r=n.squareShift;return Object(nn.jsx)("div",{className:t,children:e.map((function(n){var t=n.digit,e=n.delta;return Object(nn.jsx)(tn,{transparent:0===t,delta:e,shift:r,children:t},t)}))})}))(U||(U=Object(i.a)(["\n  width: 270px;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: ",";\n  display: flex;\n  flex-wrap: wrap;\n"])),Z),rn=Object(q.b)((function(n){var t=n.icon,e=n.className,r=n.onClick;return Object(nn.jsx)("div",{className:e,onClick:r,children:Object(nn.jsx)("img",{src:t})})}))(C||(C=Object(i.a)(["\n  background-color: white;\n  width: 70px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  img {\n    width: 30%;\n  }\n  :hover {\n    cursor: pointer;\n    background-color: lightpink;\n  }\n"]))),an=q.b.div(G||(G=Object(i.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin: 10px;\n  div {\n    margin: 0 10px;\n  }\n"]))),on=Object(q.b)((function(n){var t=n.className,e=n.img,r=n.text;return Object(nn.jsxs)("div",{className:t,children:[e&&Object(nn.jsx)("img",{src:e}),r&&Object(nn.jsx)("span",{children:r})]})}))(_||(_=Object(i.a)(["\n  width: 300px;\n  img {\n    width: 100%;\n  }\n  span {\n    width: 100%;\n    display: block;\n    height: 2em;\n    margin: 10px 0 5px;\n    color: white;\n    font-family: ",", sans-serif;\n  }\n  text-align: center;\n  margin: 20px 0 10px;\n\n  @media (max-width: 480px) {\n    width: 200px;\n    margin: 20px auto 10px;\n  }\n"])),X),cn=Object(q.b)((function(n){var t=n.img,e=n.text,r=n.className;return Object(nn.jsxs)("div",{className:r,children:[e&&Object(nn.jsxs)("span",{children:[" ",e," "]}),t&&Object(nn.jsx)("img",{src:t})]})}))(z||(z=Object(i.a)(["\n  font-family: ",", sans-serif;\n  width: 100px;\n  text-align: center;\n  color: white;\n  font-size: 1.5em;\n\n  img {\n    width: 100%;\n    margin-top: 10px;\n  }\n"])),X),sn=e.p+"static/media/playdark.e2e81329.png",un=e.p+"static/media/reset.91d32a81.jpg",ln=(e.p,e.p+"static/media/hint.62355b2a.png"),dn=(e.p,Object(l.b)((function(n){return{grid:n.moves.grid,isSolving:n.moves.isSolving}}),(function(n){return{goLeft:function(){return n(Q.goleft())},goRight:function(){return n(Q.goright())},goDown:function(){return n(Q.godown())},goUp:function(){return n(Q.goup())},reset:function(){return n(Q.goreset())},start:function(){return n(Q.start())}}}))((function(n){var t=n.className,e=n.start,r=n.reset,i=n.goDown,o=n.goLeft,c=n.goRight,s=n.goUp,u=n.grid,l=n.isSolving,d={start:e,reset:r,goLeft:o,goRight:c,goUp:s,goDown:i},h=function(n){return function(n,t){switch(n){case N.LEFT:case N.A:t.goLeft();break;case N.W:case N.UP:t.goUp();break;case N.D:case N.RIGHT:t.goRight();break;case N.S:case N.DOWN:t.goDown();break;case N.ENTER:t.start();break;default:console.log(n)}}(n,d)};return Object(a.useEffect)((function(){var n=function(n){return function(n,t,e){var r=0!==n.keyCode?n.keyCode:n.charCode;console.log(n,n.keyCode,n.charCode,r),t.isSolving?console.log("STOP!"):e(r)}(n,{isSolving:l},h)};return document.addEventListener("keydown",n),function(){return document.removeEventListener("keydown",n)}}),[]),Object(nn.jsxs)("div",{className:t,children:[Object(nn.jsxs)("div",{className:"mid",children:[Object(nn.jsx)(on,{text:"Alexander Perelman | Zara Ubaldo | Guillermo Naranjo | Miguel Angel Quintero"}),Object(nn.jsx)(on,{text:""}),Object(nn.jsx)(en,{grid:u,squareShift:90}),Object(nn.jsxs)(an,{children:[Object(nn.jsx)(rn,{icon:sn,onClick:e}),Object(nn.jsx)(rn,{icon:un,onClick:r})]})]}),Object(nn.jsx)(cn,{img:ln,className:"hint"})]})}))),hn=Object(q.b)(dn)(V||(V=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  .mid {\n    width: 400px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin-left: 100px;\n  }\n  .hint {\n    margin-top: 140px;\n  }\n  @media (max-width: 640px) {\n    .mid {\n      margin-left: 0px;\n    }\n    .hint {\n      padding: 0 100px;\n      clear: both;\n      width: 100px;\n      margin-top: 20px;\n    }\n  }\n  .name {\n    text-align: center;\n    width: 100%;\n  }\n  @media (max-width: 480px) {\n    .mid {\n      width: 300px;\n    }\n  }\n"]))),fn=Object(q.a)(J||(J=Object(i.a)(["\n  body{\n    margin: 0;\n    padding: 0;\n    background-color: ",";\n  }\n"])),K),gn=Object(d.d)(E,Object(d.a)(u.a));console.log(gn.getState()),s.a.render(Object(nn.jsx)(l.a,{store:gn,children:Object(nn.jsxs)(o.a.Fragment,{children:[Object(nn.jsx)(hn,{}),Object(nn.jsx)(fn,{})]})}),document.getElementById("hue"))}},[[54,1,2]]]);
//# sourceMappingURL=main.6f728b00.chunk.js.map