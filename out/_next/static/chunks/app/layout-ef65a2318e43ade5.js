(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3172:function(e,t,n){Promise.resolve().then(n.t.bind(n,7960,23)),Promise.resolve().then(n.bind(n,4546)),Promise.resolve().then(n.bind(n,4128)),Promise.resolve().then(n.bind(n,9241)),Promise.resolve().then(n.bind(n,9698)),Promise.resolve().then(n.t.bind(n,2972,23)),Promise.resolve().then(n.t.bind(n,6965,23))},4546:function(e,t,n){"use strict";n.d(t,{default:function(){return es}});var r=n(7437),a=n(2265),o=n(6741),i=n(8575),s=n(3966),l=n(9255),c=n(886),d=n(5278),u=n(9103),f=n(3832),p=n(1599),m=n(6840),h=n(6097),x=n(9157),v=n(5478),g=n(7495),N="Dialog",[y,b]=(0,s.b)(N),[j,w]=y(N),R=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:i,onOpenChange:s,modal:d=!0}=e,u=a.useRef(null),f=a.useRef(null),[p=!1,m]=(0,c.T)({prop:o,defaultProp:i,onChange:s});return(0,r.jsx)(j,{scope:t,triggerRef:u,contentRef:f,contentId:(0,l.M)(),titleId:(0,l.M)(),descriptionId:(0,l.M)(),open:p,onOpenChange:m,onOpenToggle:a.useCallback(()=>m(e=>!e),[m]),modal:d,children:n})};R.displayName=N;var E="DialogTrigger",M=a.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,s=w(E,n),l=(0,i.e)(t,s.triggerRef);return(0,r.jsx)(m.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":J(s.open),...a,ref:l,onClick:(0,o.M)(e.onClick,s.onOpenToggle)})});M.displayName=E;var _="DialogPortal",[O,P]=y(_,{forceMount:void 0}),D=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:i}=e,s=w(_,t);return(0,r.jsx)(O,{scope:t,forceMount:n,children:a.Children.map(o,e=>(0,r.jsx)(p.z,{present:n||s.open,children:(0,r.jsx)(f.h,{asChild:!0,container:i,children:e})}))})};D.displayName=_;var I="DialogOverlay",C=a.forwardRef((e,t)=>{let n=P(I,e.__scopeDialog),{forceMount:a=n.forceMount,...o}=e,i=w(I,e.__scopeDialog);return i.modal?(0,r.jsx)(p.z,{present:a||i.open,children:(0,r.jsx)(F,{...o,ref:t})}):null});C.displayName=I;var F=a.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,o=w(I,n);return(0,r.jsx)(x.Z,{as:g.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,r.jsx)(m.WV.div,{"data-state":J(o.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),k="DialogContent",T=a.forwardRef((e,t)=>{let n=P(k,e.__scopeDialog),{forceMount:a=n.forceMount,...o}=e,i=w(k,e.__scopeDialog);return(0,r.jsx)(p.z,{present:a||i.open,children:i.modal?(0,r.jsx)(A,{...o,ref:t}):(0,r.jsx)(W,{...o,ref:t})})});T.displayName=k;var A=a.forwardRef((e,t)=>{let n=w(k,e.__scopeDialog),s=a.useRef(null),l=(0,i.e)(t,n.contentRef,s);return a.useEffect(()=>{let e=s.current;if(e)return(0,v.Ry)(e)},[]),(0,r.jsx)(U,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault())})}),W=a.forwardRef((e,t)=>{let n=w(k,e.__scopeDialog),o=a.useRef(!1),i=a.useRef(!1);return(0,r.jsx)(U,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,a;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),o.current=!1,i.current=!1},onInteractOutside:t=>{var r,a;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let s=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(s))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),U=a.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:s,onCloseAutoFocus:l,...c}=e,f=w(k,n),p=a.useRef(null),m=(0,i.e)(t,p);return(0,h.EW)(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:s,onUnmountAutoFocus:l,children:(0,r.jsx)(d.XB,{role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":J(f.open),...c,ref:m,onDismiss:()=>f.onOpenChange(!1)})}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{titleId:f.titleId}),(0,r.jsx)(Q,{contentRef:p,descriptionId:f.descriptionId})]})]})}),z="DialogTitle",S=a.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,o=w(z,n);return(0,r.jsx)(m.WV.h2,{id:o.titleId,...a,ref:t})});S.displayName=z;var L="DialogDescription",V=a.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,o=w(L,n);return(0,r.jsx)(m.WV.p,{id:o.descriptionId,...a,ref:t})});V.displayName=L;var B="DialogClose",H=a.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,i=w(B,n);return(0,r.jsx)(m.WV.button,{type:"button",...a,ref:t,onClick:(0,o.M)(e.onClick,()=>i.onOpenChange(!1))})});function J(e){return e?"open":"closed"}H.displayName=B;var Z="DialogTitleWarning",[q,G]=(0,s.k)(Z,{contentName:k,titleName:z,docsSlug:"dialog"}),K=e=>{let{titleId:t}=e,n=G(Z),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return a.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},Q=e=>{let{contentRef:t,descriptionId:n}=e,r=G("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return a.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},X=n(7712),Y=n(7062),$=n(4295);let ee=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(C,{className:(0,Y.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a,ref:t})});ee.displayName=C.displayName;let et=(0,X.j)("fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),en=a.forwardRef((e,t)=>{let{side:n="right",className:a,children:o,...i}=e;return(0,r.jsxs)(D,{children:[(0,r.jsx)(ee,{}),(0,r.jsxs)(T,{ref:t,className:(0,Y.cn)(et({side:n}),a),...i,children:[o,(0,r.jsxs)(H,{className:"absolute right-8 top-8 transition-opacity outline-none",children:[(0,r.jsx)($.QAE,{className:"text-3xl text-accent"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});en.displayName=T.displayName,a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(S,{ref:t,className:(0,Y.cn)("text-lg font-semibold text-slate-950 dark:text-slate-50",n),...a})}).displayName=S.displayName,a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(V,{ref:t,className:(0,Y.cn)("text-sm text-slate-500 dark:text-slate-400",n),...a})}).displayName=V.displayName;var er=n(9376),ea=n(7776),eo=n(7648);let ei=[{name:"home",path:"/"},{name:"services",path:"/services"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"contact",path:"/contact"}];var es=()=>{let e=(0,er.usePathname)();return(0,r.jsxs)(R,{children:[(0,r.jsx)(M,{className:"flex justify-center items-center",children:(0,r.jsx)(ea.F3G,{className:"text-[32px] text-accent"})}),(0,r.jsxs)(en,{className:"flex flex-col",children:[(0,r.jsx)("div",{className:"mt-32 mb-40 text-center text-2xl",children:(0,r.jsx)(eo.default,{href:"/",children:(0,r.jsxs)("h1",{className:"text-4xl font-semibold",children:["Fajar",(0,r.jsx)("span",{className:"text-accent",children:"."}),(0,r.jsx)("span",{className:"font-semibold",children:"dev"})]})})}),(0,r.jsx)("nav",{className:"flex flex-col justify-center items-center gap-8",children:ei.map((t,n)=>(0,r.jsx)(eo.default,{href:t.path,className:"capitalize text-xl hover:text-accent transition-all ".concat(t.path===e&&"text-accent border-b-2 border-accent"),children:t.name},n))})]})]})}},4128:function(e,t,n){"use strict";var r=n(7437),a=n(7648),o=n(9376);let i=[{name:"home",path:"/"},{name:"services",path:"/services"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"contact",path:"/contact"}];t.default=()=>{let e=(0,o.usePathname)();return(0,r.jsx)("nav",{className:"flex gap-8",children:i.map((t,n)=>(0,r.jsx)(a.default,{href:t.path,className:"".concat(t.path===e?"text-accent border-b-2 border-accent":""," capitalize font-medium hover:text-accent transition-all"),children:t.name},n))})}},9241:function(e,t,n){"use strict";var r=n(7437),a=n(8614),o=n(4847),i=n(9376);t.default=e=>{let{children:t}=e,n=(0,i.usePathname)();return(0,r.jsx)(a.M,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(o.E.div,{initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}},className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none"}),t]},n)})}},9698:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var r=n(7437),a=n(8614),o=n(4847),i=n(9376);let s={initial:{top:"0%"},animate:{top:"100%"},exit:{top:["100%","0%"]}},l=e=>6-e-1;var c=()=>(0,r.jsx)(r.Fragment,{children:[...Array(6)].map((e,t)=>(0,r.jsx)(o.E.div,{variants:s,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.4,ease:"easeInOut",delay:.1*l(t)},className:"h-full w-full bg-white relative"},t))}),d=()=>{let e=(0,i.usePathname)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.M,{mode:"wait",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex",children:(0,r.jsx)(c,{})}),(0,r.jsx)(o.E.div,{className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none",initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}}})]},e)})})}},7062:function(e,t,n){"use strict";n.d(t,{cn:function(){return o}});var r=n(1994),a=n(3335);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}},7648:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(2972),a=n.n(r)},9376:function(e,t,n){"use strict";var r=n(5475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},7960:function(){},6965:function(e){e.exports={style:{fontFamily:"'__JetBrains_Mono_c5dbd7', '__JetBrains_Mono_Fallback_c5dbd7'",fontStyle:"normal"},className:"__className_c5dbd7",variable:"__variable_c5dbd7"}},1599:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(2265),a=n(8575),o=n(1188),i=e=>{var t,n;let i,l;let{present:c,children:d}=e,u=function(e){var t,n;let[a,i]=r.useState(),l=r.useRef({}),c=r.useRef(e),d=r.useRef("none"),[u,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=s(l.current);d.current="mounted"===u?e:"none"},[u]),(0,o.b)(()=>{let t=l.current,n=c.current;if(n!==e){let r=d.current,a=s(t);e?f("MOUNT"):"none"===a||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==a?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,o.b)(()=>{if(a){var e;let t;let n=null!==(e=a.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=s(l.current).includes(e.animationName);if(e.target===a&&r&&(f("ANIMATION_END"),!c.current)){let e=a.style.animationFillMode;a.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===a.style.animationFillMode&&(a.style.animationFillMode=e)})}},o=e=>{e.target===a&&(d.current=s(l.current))};return a.addEventListener("animationstart",o),a.addEventListener("animationcancel",r),a.addEventListener("animationend",r),()=>{n.clearTimeout(t),a.removeEventListener("animationstart",o),a.removeEventListener("animationcancel",r),a.removeEventListener("animationend",r)}}f("ANIMATION_END")},[a,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(c),f="function"==typeof d?d({present:u.isPresent}):r.Children.only(d),p=(0,a.e)(u.ref,(i=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?f.ref:(i=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in i&&i.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof d||u.isPresent?r.cloneElement(f,{ref:p}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},8614:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});var r=n(7437),a=n(2265),o=n(4252),i=n(3576),s=n(5750);class l extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:n}=e,o=(0,a.useId)(),i=(0,a.useRef)(null),c=(0,a.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,a.useContext)(s._);return(0,a.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:a}=c.current;if(n||!i.current||!e||!t)return;i.current.dataset.motionPopId=o;let s=document.createElement("style");return d&&(s.nonce=d),document.head.appendChild(s),s.sheet&&s.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(a,"px !important;\n          }\n        ")),()=>{document.head.removeChild(s)}},[n]),(0,r.jsx)(l,{isPresent:n,childRef:i,sizeRef:c,children:a.cloneElement(t,{ref:i})})}let d=e=>{let{children:t,initial:n,isPresent:s,onExitComplete:l,custom:d,presenceAffectsLayout:f,mode:p}=e,m=(0,i.h)(u),h=(0,a.useId)(),x=(0,a.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;l&&l()},[m,l]),v=(0,a.useMemo)(()=>({id:h,initial:n,isPresent:s,custom:d,onExitComplete:x,register:e=>(m.set(e,!1),()=>m.delete(e))}),f?[Math.random(),x]:[s,x]);return(0,a.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[s]),a.useEffect(()=>{s||m.size||!l||l()},[s]),"popLayout"===p&&(t=(0,r.jsx)(c,{isPresent:s,children:t})),(0,r.jsx)(o.O.Provider,{value:v,children:t})};function u(){return new Map}var f=n(8881),p=n(3223);let m=e=>e.key||"";function h(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}var x=n(1534);let v=e=>{let{children:t,exitBeforeEnter:n,custom:o,initial:s=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:u="sync"}=e;(0,p.k)(!n,"Replace exitBeforeEnter with mode='wait'");let v=(0,a.useMemo)(()=>h(t),[t]),g=v.map(m),N=(0,a.useRef)(!0),y=(0,a.useRef)(v),b=(0,i.h)(()=>new Map),[j,w]=(0,a.useState)(v),[R,E]=(0,a.useState)(v);(0,x.L)(()=>{N.current=!1,y.current=v;for(let e=0;e<R.length;e++){let t=m(R[e]);g.includes(t)?b.delete(t):!0!==b.get(t)&&b.set(t,!1)}},[R,g.length,g.join("-")]);let M=[];if(v!==j){let e=[...v];for(let t=0;t<R.length;t++){let n=R[t],r=m(n);g.includes(r)||(e.splice(t,0,n),M.push(n))}"wait"===u&&M.length&&(e=M),E(h(e)),w(v);return}let{forceRender:_}=(0,a.useContext)(f.p);return(0,r.jsx)(r.Fragment,{children:R.map(e=>{let t=m(e),n=v===R||g.includes(t);return(0,r.jsx)(d,{isPresent:n,initial:(!N.current||!!s)&&void 0,custom:n?void 0:o,presenceAffectsLayout:c,mode:u,onExitComplete:n?void 0:()=>{if(!b.has(t))return;b.set(t,!0);let e=!0;b.forEach(t=>{t||(e=!1)}),e&&(null==_||_(),E(y.current),l&&l())},children:e},t)})})}}},function(e){e.O(0,[843,452,994,847,111,972,171,971,117,744],function(){return e(e.s=3172)}),_N_E=e.O()}]);