import{i as b}from"./index-20P1wsSQ.js";import{b as S}from"./helpers-CJiaW3rk.js";function B(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var c=!1;if(typeof window<"u"){var h={get passive(){c=!0}};window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h)}var m=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),r=[],u=!1,g=-1,d=void 0,l=void 0,w=function(e){return r.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},a=function(e){var n=e||window.event;return w(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},T=function(e){if(l===void 0){var n=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;n&&i>0&&(l=document.body.style.paddingRight,document.body.style.paddingRight=i+"px")}d===void 0&&(d=document.body.style.overflow,document.body.style.overflow="hidden")},P=function(){l!==void 0&&(document.body.style.paddingRight=l,l=void 0),d!==void 0&&(document.body.style.overflow=d,d=void 0)},A=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},L=function(e,n){var i=e.targetTouches[0].clientY-g;return w(e.target)?!1:n&&n.scrollTop===0&&i>0||A(n)&&i<0?a(e):(e.stopPropagation(),!0)},M=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!r.some(function(o){return o.targetElement===e})){var i={targetElement:e,options:n||{}};r=[].concat(B(r),[i]),m?(e.ontouchstart=function(o){o.targetTouches.length===1&&(g=o.targetTouches[0].clientY)},e.ontouchmove=function(o){o.targetTouches.length===1&&L(o,e)},u||(document.addEventListener("touchmove",a,c?{passive:!1}:void 0),u=!0)):T(n)}},I=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}r=r.filter(function(n){return n.targetElement!==e}),m?(e.ontouchstart=null,e.ontouchmove=null,u&&r.length===0&&(document.removeEventListener("touchmove",a,c?{passive:!1}:void 0),u=!1)):r.length||P()};function x(t){let e;const n=S(t),i=parseInt(window.getComputedStyle(t).getPropertyValue("--navigation-height"))||0,o=window.matchMedia("(min-width: 1024px)");o.addEventListener("change",s);const f=b('[data-ref="menuButton"]',p);t.addEventListener("click",f),s();function p(v){e=!e,n.menuButton.setAttribute("aria-expanded",e),e?(t.setAttribute("data-status","menuIsOpen"),M(n.menu)):(t.removeAttribute("data-status"),I(n.menu))}function s(){o.matches||y()}function y(){const v=document.getElementById("wpadminbar")?i+document.getElementById("wpadminbar").offsetHeight:i;document.documentElement.style.scrollPaddingTop=`${v}px`}return()=>{o.removeEventListener("change",s),t.removeEventListener("click",f)}}export{x as default};