(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{4:function(e,t,n){}}]),function(e){function t(t){for(var r,a,i=t[0],l=t[1],s=t[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;o.push([6,1]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(1),o=(n(4),n(0)),a=n(2);n(5);Object(r.registerBlockType)("snet/accordion",{title:Object(c.__)("Accordion","accordion"),description:Object(c.__)("Example block written with ESNext standard and JSX support – build step required.","accordion"),category:"widgets",icon:"smiley",supports:{html:!1},attributes:{title:{type:"string",source:"html",selector:".accordion__title__text"}},edit:function(e){var t=e.className,n=e.attributes,r=e.setAttributes,i=n.title;return Object(o.createElement)("article",{className:t},Object(o.createElement)("h2",{className:"accordion__title"},Object(o.createElement)("a",{href:"#"},Object(o.createElement)("span",{className:"accordion__icon"},"+"),Object(o.createElement)(a.RichText,{tagName:"span",className:"accordion__title",value:i,multiline:"span",onChange:function(e){return r({title:e})},placeholder:Object(c.__)("Title","accordion"),allowedFormats:[]}))),Object(o.createElement)("div",{className:"accordion__content"},Object(o.createElement)(a.InnerBlocks,{allowedBlocks:["core/paragraph","core/list"]})))},save:function(e){var t=e.attributes,n=e.className,r=t.title;return Object(o.createElement)("article",{className:n},Object(o.createElement)("h2",{className:"accordion__title"},Object(o.createElement)("a",{href:"#"},Object(o.createElement)("span",{className:"accordion__icon"},"+"),Object(o.createElement)(a.RichText.Content,{tagName:"span",className:"accordion__title__text",value:r}))),Object(o.createElement)("div",{className:"accordion__content"},Object(o.createElement)(a.InnerBlocks.Content,null)))}})}]);