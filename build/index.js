(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{4:function(e,t,r){}}]),function(e){function t(t){for(var n,l,a=t[0],u=t[1],i=t[2],p=0,f=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={0:0},c=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=u;c.push([6,1]),r()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r(1),c=(r(4),r(0)),l=r(3);r(5);Object(n.registerBlockType)("create-block/starter-block",{title:Object(o.__)("Starter Block","starter-block"),description:Object(o.__)("Example block written with ESNext standard and JSX support – build step required.","starter-block"),category:"widgets",icon:"smiley",supports:{html:!1},edit:function(e){var t=e.attributes,r=e.className,n=e.setAttributes;return Object(c.createElement)("p",{className:r},Object(o.__)("Starter Block – hello from the editor!","starter-block"),Object(c.createElement)(l.TextControl,{label:Object(o.__)("Message","gutenpride"),value:t.message,onChange:function(e){return n({message:e})}}))},save:function(e){var t=e.attributes;return e.className,Object(c.createElement)(c.Fragment,null,Object(c.createElement)("p",null,Object(o.__)("Starter Block – hello from the saved content!","starter-block")),Object(c.createElement)("p",null,Object(c.createElement)("strong",null," OLEGS NEW CONTENT: "),t.message))}})}]);