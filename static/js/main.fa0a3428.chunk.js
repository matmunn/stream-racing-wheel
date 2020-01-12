(this["webpackJsonpstream-racing-wheel"]=this["webpackJsonpstream-racing-wheel"]||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),s=a(48),o=a.n(s),i=a(1),c=a(2),l=a(4),u=a(3),h=a(11),p=a(5),d=a(6),m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={transform:"rotate("+900*this.props.rotation+"deg)"};return r.a.createElement("img",{alt:"",style:e,src:"g920/wheel.png"})}}]),t}(n.Component),g=d.a.connect([],(function(e){return["axes-"+e.axis]}),(function(e,t,a,n){return{rotation:t}}))(m),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.downAmount*this.props.value*-1,t={width:"70px",position:"absolute",top:this.props.top+"px",left:this.props.left+"px",transform:"translateY("+e+"px)"};return r.a.createElement("img",{alt:"",style:t,src:this.props.src})}}]),t}(n.Component),v=d.a.connect([],(function(e){return["axes-"+e.axis]}),(function(e,t,a,n){return{value:t}}))(b),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(v,{top:-20,left:290,downAmount:50,axis:1,src:"g920/gas.png"}),r.a.createElement(v,{top:-10,left:160,downAmount:50,axis:2,src:"g920/brake.png"}),r.a.createElement(v,{top:-10,left:40,downAmount:50,axis:5,src:"g920/clutch.png"}),r.a.createElement("img",{alt:"",style:{width:"400px"},src:"g920/pedals.png"}))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).halfGrid=a.props.gridSize/2,a.halfGridY=a.props.gridSize/2.2,a.moveX=0,a.moveY=0,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="100ms";switch(this.props.gear){case-1:e="500ms",this.moveX=0,this.moveY=0;break;case 0:this.moveX=this.halfGrid,this.moveY=this.halfGridY;break;case 1:this.moveX=-this.halfGrid,this.moveY=-this.halfGridY;break;case 2:this.moveX=-this.halfGrid,this.moveY=this.halfGridY;break;case 3:this.moveX=0,this.moveY=-this.halfGridY;break;case 4:this.moveX=0,this.moveY=this.halfGridY;break;case 5:this.moveX=this.halfGrid,this.moveY=-this.halfGridY;break;case 6:this.moveX=this.halfGrid,this.moveY=this.halfGridY;break;default:e="500ms",this.moveX=0,this.moveY=0}var t={width:"150px",zIndex:"999",position:"absolute",top:this.props.top+"px",left:this.props.left+"px",transition:"all "+e,transform:"translate("+this.moveX+"px, "+this.moveY+"px)"},a={backgroundColor:"red",width:"10px",height:"20px",zIndex:"999",position:"absolute",top:"0px",left:"0px",display:"none"};return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{style:a}),r.a.createElement("img",{alt:"",style:t,src:"g920/shifter.png"}))}}]),t}(n.Component),j=d.a.connect([],(function(e){return["buttons-"+e.gear1,"buttons-"+e.gear2,"buttons-"+e.gear3,"buttons-"+e.gear4,"buttons-"+e.gear5,"buttons-"+e.gear6,"buttons-"+e.reverse]}),(function(e,t,a,n){var r=n.gear||-1,s=n.gearButton||-1;if(t.pressed)switch(e){case"buttons-"+n.gear1:r=1,s=n.gear1;break;case"buttons-"+n.gear2:r=2,s=n.gear2;break;case"buttons-"+n.gear3:r=3,s=n.gear3;break;case"buttons-"+n.gear4:r=4,s=n.gear4;break;case"buttons-"+n.gear5:r=5,s=n.gear5;break;case"buttons-"+n.gear6:r=6,s=n.gear6;break;case"buttons-"+n.reverse:r=0,s=n.reverse;break;default:r=-1}else"buttons-"+n.gearButton===e&&(r=-1);return{gear:r,gearButton:s}}))(x),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(j,{top:70,left:50,gridSize:150,gear1:12,gear2:13,gear3:14,gear4:15,gear5:16,gear6:17,reverse:11}),r.a.createElement("img",{alt:"",width:"250px",src:"g920/shifter-base.png"}))}}]),t}(n.Component),k=d.a.connect([],(function(e){return["buttons-"+e.axis]}),(function(e,t,a,n){return{value:t}}))(O),y=[],w=[],E=0;E<20;E++)y.push({pressed:!1,touched:!1,value:0}),w.push(0);d.a.set("buttons",y),d.a.set("axes",w);var G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).gamePads={},a.start=0,a.a=0,a.b=0,a.gamePadIndex=-1,a.state={gameLoopStarted:!1},a.gameLoop=a.gameLoop.bind(Object(h.a)(a)),a.onGamepadConnected=a.onGamepadConnected.bind(Object(h.a)(a)),window.addEventListener("gamepadconnected",a.onGamepadConnected),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onGamepadConnected",value:function(e){var t=navigator.getGamepads()[e.gamepad.index];console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",t.index,t.id,t.buttons.length,t.axes.length),this.gamePads[t.index]=t,this.setState({gamePads:this.gamePads}),t.id.toLowerCase().indexOf("wheel")>-1&&this.changeGamepad(t.index)}},{key:"onChange",value:function(e){this.changeGamepad(e.target.value)}},{key:"changeGamepad",value:function(e){console.log(e),this.gamePadIndex=e,this.setState({gamepadIndex:e,gameLoopStarted:!0}),this.gameLoop()}},{key:"render",value:function(){var e=this,t=Object.values(this.gamePads).map((function(t){var a=t.index===e.gamePadIndex;return r.a.createElement("option",{selected:a,value:t.index},t.id)}));return r.a.createElement("div",{style:{paddingLeft:"50px",backgroundColor:"#133a4d"}},r.a.createElement("select",{name:"gamepadSelection",onChange:function(t){e.onChange(t)}},t),r.a.createElement("br",null),r.a.createElement("div",{style:{position:"relative",top:"20px"}},r.a.createElement(g,{axis:0})),r.a.createElement("div",{style:{position:"relative",top:"-300px",left:"500px",marginLeft:"50px"}},r.a.createElement(k,null)),r.a.createElement("div",{style:{position:"relative",top:"-170px",left:"30px",marginLeft:"50px"}},r.a.createElement(f,null)))}},{key:"buttonPressed",value:function(e){return"object"==typeof e?e.pressed:1===e}},{key:"gameLoop",value:function(){if(-1!==this.gamePadIndex){for(var e=navigator.getGamepads()[this.gamePadIndex],t=[],a=0;a<e.buttons.length;a++){var n=e.buttons[a],r={pressed:n.pressed,touched:n.touched,value:n.value};t.push(r)}for(var s=[],o=0;o<e.axes.length;o++){var i=e.axes[o];s.push(i)}d.a.set("buttons",t),d.a.set("axes",s),this.start=requestAnimationFrame(this.gameLoop)}}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,a){e.exports=a(125)}},[[49,1,2]]]);
//# sourceMappingURL=main.fa0a3428.chunk.js.map