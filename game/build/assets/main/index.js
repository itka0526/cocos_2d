System.register("chunks:///_virtual/main",["./MainGame.ts","./PlayerMovement.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,r,o,a,n,l,c,p,s,d,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,n=e._decorator,l=e.TiledMap,c=e.RigidBody2D,p=e.ERigidBody2DType,s=e.BoxCollider2D,d=e.v2,u=e.Component}],execute:function(){var y,f,g,h,v;a._RF.push({},"794c9qr19JHTYcVwiwHL2R+","MainGame",void 0);var M=n.ccclass,m=n.property;e("MainGame",(y=M("MainGame"),f=m(l),y((v=t((h=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return t=e.call.apply(e,[this].concat(a))||this,r(t,"tiledMap",v,o(t)),t}i(t,e);var a=t.prototype;return a.onLoad=function(){},a.start=function(){for(var e=this.tiledMap.getTileSize(),t=this.tiledMap.getLayer("Blocking"),i=t.getLayerSize(),r=0;r<i.width;r++)for(var o=0;o<i.height;o++)try{var a=t.getTiledTileAt(r,o,!0);if(0!=a.grid){a.node.addComponent(c).type=p.Static;var n=a.node.addComponent(s);n.offset=d(-232,-152),n.size=e,n.group=2,n.apply()}}catch(e){console.error(e)}},t}(u)).prototype,"tiledMap",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=h))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerMovement.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,i,n,a,s,r,c,l,h,p,y,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,r=e.CCFloat,c=e.Vec3,l=e.RigidBody2D,h=e.KeyCode,p=e.input,y=e.Input,u=e.Component}],execute:function(){var f,d,v,K,m;a._RF.push({},"02780T4YZhHF5ZefzWm0/lQ","PlayerMovement",void 0);var w=s.ccclass,D=s.property;e("PlayerMovement",(f=w("PlayerMovement"),d=D(r),f((m=t((K=function(e){function t(){for(var t,o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,i(t,"playerSpeed",m,n(t)),t.moveDelta=void 0,t.actions={forwards:!1,backwards:!1,left:!1,right:!1},t}o(t,e);var a=t.prototype;return a.start=function(){},a.update=function(e){var t=this.actions,o=t.forwards,i=t.backwards,n=t.left,a=t.right;this.moveDelta=new c(0,(o?1:0)-(i?1:0),0).subtract(new c((n?1:0)-(a?1:0),0,0)).normalize().multiplyScalar(this.playerSpeed),this.moveDelta.x>0?this.node.scale=c.ONE:this.moveDelta.x<0&&(this.node.scale=new c(-1,1,1));var s=this.node.getComponent(l).linearVelocity;s.x=this.moveDelta.x*e,s.y=this.moveDelta.y*e,this.node.getComponent(l).linearVelocity=s},a.onKeyDown=function(e){switch(e.keyCode){case h.KEY_W:this.actions.forwards=!0;break;case h.KEY_S:this.actions.backwards=!0;break;case h.KEY_A:this.actions.left=!0;break;case h.KEY_D:this.actions.right=!0}},a.onKeyUp=function(e){switch(e.keyCode){case h.KEY_W:this.actions.forwards=!1;break;case h.KEY_S:this.actions.backwards=!1;break;case h.KEY_A:this.actions.left=!1;break;case h.KEY_D:this.actions.right=!1}},a.onLoad=function(){p.on(y.EventType.KEY_DOWN,this.onKeyDown,this),p.on(y.EventType.KEY_UP,this.onKeyUp,this)},a.onDestroy=function(){p.off(y.EventType.KEY_DOWN,this.onKeyDown,this),p.off(y.EventType.KEY_UP,this.onKeyUp,this)},t}(u)).prototype,"playerSpeed",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),v=K))||v));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});