import{b as N,g as R}from"./helpers-CJiaW3rk.js";import{g as B,m as I,c as u,a as j,b as V,d as G,n as J,e as U,A as W,f as X,N as Y,S as _}from"./swiper-JS6zBsKY.js";function F(p){let{swiper:s,extendParams:d,on:i,emit:v}=p;const h=B();let m=!1,E=null,D=null,w,n,f,S;d({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),s.scrollbar={el:null,dragEl:null};function g(){if(!s.params.scrollbar.el||!s.scrollbar.el)return;const{scrollbar:l,rtlTranslate:r}=s,{dragEl:e,el:a}=l,t=s.params.scrollbar,c=s.params.loop?s.progressLoop:s.progress;let b=n,o=(f-n)*c;r?(o=-o,o>0?(b=n-o,o=0):-o+n>f&&(b=f+o)):o<0?(b=n+o,o=0):o+n>f&&(b=f-o),s.isHorizontal()?(e.style.transform=`translate3d(${o}px, 0, 0)`,e.style.width=`${b}px`):(e.style.transform=`translate3d(0px, ${o}px, 0)`,e.style.height=`${b}px`),t.hide&&(clearTimeout(E),a.style.opacity=1,E=setTimeout(()=>{a.style.opacity=0,a.style.transitionDuration="400ms"},1e3))}function H(l){!s.params.scrollbar.el||!s.scrollbar.el||(s.scrollbar.dragEl.style.transitionDuration=`${l}ms`)}function y(){if(!s.params.scrollbar.el||!s.scrollbar.el)return;const{scrollbar:l}=s,{dragEl:r,el:e}=l;r.style.width="",r.style.height="",f=s.isHorizontal()?e.offsetWidth:e.offsetHeight,S=s.size/(s.virtualSize+s.params.slidesOffsetBefore-(s.params.centeredSlides?s.snapGrid[0]:0)),s.params.scrollbar.dragSize==="auto"?n=f*S:n=parseInt(s.params.scrollbar.dragSize,10),s.isHorizontal()?r.style.width=`${n}px`:r.style.height=`${n}px`,S>=1?e.style.display="none":e.style.display="",s.params.scrollbar.hide&&(e.style.opacity=0),s.params.watchOverflow&&s.enabled&&l.el.classList[s.isLocked?"add":"remove"](s.params.scrollbar.lockClass)}function T(l){return s.isHorizontal()?l.clientX:l.clientY}function L(l){const{scrollbar:r,rtlTranslate:e}=s,{el:a}=r;let t;t=(T(l)-U(a)[s.isHorizontal()?"left":"top"]-(w!==null?w:n/2))/(f-n),t=Math.max(Math.min(t,1),0),e&&(t=1-t);const c=s.minTranslate()+(s.maxTranslate()-s.minTranslate())*t;s.updateProgress(c),s.setTranslate(c),s.updateActiveIndex(),s.updateSlidesClasses()}function P(l){const r=s.params.scrollbar,{scrollbar:e,wrapperEl:a}=s,{el:t,dragEl:c}=e;m=!0,w=l.target===c?T(l)-l.target.getBoundingClientRect()[s.isHorizontal()?"left":"top"]:null,l.preventDefault(),l.stopPropagation(),a.style.transitionDuration="100ms",c.style.transitionDuration="100ms",L(l),clearTimeout(D),t.style.transitionDuration="0ms",r.hide&&(t.style.opacity=1),s.params.cssMode&&(s.wrapperEl.style["scroll-snap-type"]="none"),v("scrollbarDragStart",l)}function O(l){const{scrollbar:r,wrapperEl:e}=s,{el:a,dragEl:t}=r;m&&(l.preventDefault&&l.cancelable?l.preventDefault():l.returnValue=!1,L(l),e.style.transitionDuration="0ms",a.style.transitionDuration="0ms",t.style.transitionDuration="0ms",v("scrollbarDragMove",l))}function A(l){const r=s.params.scrollbar,{scrollbar:e,wrapperEl:a}=s,{el:t}=e;m&&(m=!1,s.params.cssMode&&(s.wrapperEl.style["scroll-snap-type"]="",a.style.transitionDuration=""),r.hide&&(clearTimeout(D),D=J(()=>{t.style.opacity=0,t.style.transitionDuration="400ms"},1e3)),v("scrollbarDragEnd",l),r.snapOnRelease&&s.slideToClosest())}function x(l){const{scrollbar:r,params:e}=s,a=r.el;if(!a)return;const t=a,c=e.passiveListeners?{passive:!1,capture:!1}:!1,b=e.passiveListeners?{passive:!0,capture:!1}:!1;if(!t)return;const o=l==="on"?"addEventListener":"removeEventListener";t[o]("pointerdown",P,c),h[o]("pointermove",O,c),h[o]("pointerup",A,b)}function M(){!s.params.scrollbar.el||!s.scrollbar.el||x("on")}function $(){!s.params.scrollbar.el||!s.scrollbar.el||x("off")}function z(){const{scrollbar:l,el:r}=s;s.params.scrollbar=j(s,s.originalParams.scrollbar,s.params.scrollbar,{el:"swiper-scrollbar"});const e=s.params.scrollbar;if(!e.el)return;let a;if(typeof e.el=="string"&&s.isElement&&(a=s.el.querySelector(e.el)),!a&&typeof e.el=="string"){if(a=h.querySelectorAll(e.el),!a.length)return}else a||(a=e.el);s.params.uniqueNavElements&&typeof e.el=="string"&&a.length>1&&r.querySelectorAll(e.el).length===1&&(a=r.querySelector(e.el)),a.length>0&&(a=a[0]),a.classList.add(s.isHorizontal()?e.horizontalClass:e.verticalClass);let t;a&&(t=a.querySelector(V(s.params.scrollbar.dragClass)),t||(t=G("div",s.params.scrollbar.dragClass),a.append(t))),Object.assign(l,{el:a,dragEl:t}),e.draggable&&M(),a&&a.classList[s.enabled?"remove":"add"](...u(s.params.scrollbar.lockClass))}function C(){const l=s.params.scrollbar,r=s.scrollbar.el;r&&r.classList.remove(...u(s.isHorizontal()?l.horizontalClass:l.verticalClass)),$()}i("changeDirection",()=>{if(!s.scrollbar||!s.scrollbar.el)return;const l=s.params.scrollbar;let{el:r}=s.scrollbar;r=I(r),r.forEach(e=>{e.classList.remove(l.horizontalClass,l.verticalClass),e.classList.add(s.isHorizontal()?l.horizontalClass:l.verticalClass)})}),i("init",()=>{s.params.scrollbar.enabled===!1?k():(z(),y(),g())}),i("update resize observerUpdate lock unlock changeDirection",()=>{y()}),i("setTranslate",()=>{g()}),i("setTransition",(l,r)=>{H(r)}),i("enable disable",()=>{const{el:l}=s.scrollbar;l&&l.classList[s.enabled?"remove":"add"](...u(s.params.scrollbar.lockClass))}),i("destroy",()=>{C()});const q=()=>{s.el.classList.remove(...u(s.params.scrollbar.scrollbarDisabledClass)),s.scrollbar.el&&s.scrollbar.el.classList.remove(...u(s.params.scrollbar.scrollbarDisabledClass)),z(),y(),g()},k=()=>{s.el.classList.add(...u(s.params.scrollbar.scrollbarDisabledClass)),s.scrollbar.el&&s.scrollbar.el.classList.add(...u(s.params.scrollbar.scrollbarDisabledClass)),C()};Object.assign(s.scrollbar,{enable:q,disable:k,updateSize:y,setTranslate:g,init:z,destroy:C})}function ss(p){const s=N(p),d=R(p),i=K(s,d);return()=>i.destroy()}function K(p,s){const{options:d}=s,i={modules:[W,X,Y,F],a11y:d.a11y,navigation:{nextEl:p.next,prevEl:p.prev},slidesPerView:1,spaceBetween:100,height:420,scrollbar:{el:".swiper-scrollbar",hide:!0}};return d.autoplay&&d.autoplaySpeed&&(i.autoplay={delay:d.autoplaySpeed}),new _(p.featureSliders,i)}export{ss as default};
