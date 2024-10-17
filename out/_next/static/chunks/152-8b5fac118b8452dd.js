"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{2926:function(e,t,r){r.d(t,{ZP:function(){return s}});let n={_origin:"https://api.emailjs.com"},l=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e.status,this.text=e.responseText}}let i=(e,t,r={})=>new Promise((l,i)=>{let a=new XMLHttpRequest;a.addEventListener("load",({target:e})=>{let t=new o(e);200===t.status||"OK"===t.text?l(t):i(t)}),a.addEventListener("error",({target:e})=>{i(new o(e))}),a.open("POST",n._origin+e,!0),Object.keys(r).forEach(e=>{a.setRequestHeader(e,r[e])}),a.send(t)}),a=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t};var s={init:(e,t="https://api.emailjs.com")=>{n._userID=e,n._origin=t},send:(e,t,r,o)=>{let a=o||n._userID;return l(a,e,t),i("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:(e,t,r,o)=>{let s=o||n._userID,u=a(r);l(s,e,t);let d=new FormData(u);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",s),i("/api/v1.0/email/send-form",d)}}},9205:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(2265);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:d,iconNode:c,...p}=e;return(0,n.createElement)("svg",{ref:t,...i,width:l,height:l,stroke:r,strokeWidth:s?24*Number(a)/Number(l):a,className:o("lucide",u),...p},[...c.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:s,...u}=r;return(0,n.createElement)(a,{ref:i,iconNode:t,className:o("lucide-".concat(l(e)),s),...u})});return r.displayName="".concat(e),r}},401:function(e,t,r){r.d(t,{Z:function(){return n}});let n=(0,r(9205).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},875:function(e,t,r){r.d(t,{Z:function(){return n}});let n=(0,r(9205).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},2135:function(e,t,r){r.d(t,{Z:function(){return n}});let n=(0,r(9205).Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},8951:function(e,t,r){r.d(t,{VY:function(){return eN},ZA:function(){return eL},JO:function(){return eD},ck:function(){return eW},wU:function(){return eH},eT:function(){return eA},__:function(){return eV},h_:function(){return e_},fC:function(){return eR},$G:function(){return eO},u_:function(){return eB},Z0:function(){return eF},xz:function(){return eE},B4:function(){return eI},l_:function(){return eP}});var n=r(2265),l=r(4887),o=r(2484),i=r(6741),a=r(9863),s=r(8575),u=r(3966),d=r(9114),c=r(5278),p=r(6097),f=r(9103),v=r(9255),h=r(9961),m=r(3832),w=r(6840),g=r(7495),x=r(6606),y=r(886),b=r(1188),S=r(5098),C=r(5478),j=r(9157),k=r(7437),T=[" ","Enter","ArrowUp","ArrowDown"],M=[" ","Enter"],R="Select",[E,I,D]=(0,a.B)(R),[_,N]=(0,u.b)(R,[D,h.D7]),P=(0,h.D7)(),[L,V]=_(R),[W,A]=_(R),H=e=>{let{__scopeSelect:t,children:r,open:l,defaultOpen:o,onOpenChange:i,value:a,defaultValue:s,onValueChange:u,dir:c,name:p,autoComplete:f,disabled:m,required:w,form:g}=e,x=P(t),[b,S]=n.useState(null),[C,j]=n.useState(null),[T,M]=n.useState(!1),R=(0,d.gm)(c),[I=!1,D]=(0,y.T)({prop:l,defaultProp:o,onChange:i}),[_,N]=(0,y.T)({prop:a,defaultProp:s,onChange:u}),V=n.useRef(null),A=!b||g||!!b.closest("form"),[H,B]=n.useState(new Set),O=Array.from(H).map(e=>e.props.value).join(";");return(0,k.jsx)(h.fC,{...x,children:(0,k.jsxs)(L,{required:w,scope:t,trigger:b,onTriggerChange:S,valueNode:C,onValueNodeChange:j,valueNodeHasChildren:T,onValueNodeHasChildrenChange:M,contentId:(0,v.M)(),value:_,onValueChange:N,open:I,onOpenChange:D,dir:R,triggerPointerDownPosRef:V,disabled:m,children:[(0,k.jsx)(E.Provider,{scope:t,children:(0,k.jsx)(W,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{B(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{B(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),A?(0,k.jsxs)(ek,{"aria-hidden":!0,required:w,tabIndex:-1,name:p,autoComplete:f,value:_,onChange:e=>N(e.target.value),disabled:m,form:g,children:[void 0===_?(0,k.jsx)("option",{value:""}):null,Array.from(H)]},O):null]})})};H.displayName=R;var B="SelectTrigger",O=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:l=!1,...o}=e,a=P(r),u=V(B,r),d=u.disabled||l,c=(0,s.e)(t,u.onTriggerChange),p=I(r),f=n.useRef("touch"),[v,m,g]=eT(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===u.value),n=eM(t,e,r);void 0!==n&&u.onValueChange(n.value)}),x=e=>{d||(u.onOpenChange(!0),g()),e&&(u.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,k.jsx)(h.ee,{asChild:!0,...a,children:(0,k.jsx)(w.WV.button,{type:"button",role:"combobox","aria-controls":u.contentId,"aria-expanded":u.open,"aria-required":u.required,"aria-autocomplete":"none",dir:u.dir,"data-state":u.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":ej(u.value)?"":void 0,...o,ref:c,onClick:(0,i.M)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==f.current&&x(e)}),onPointerDown:(0,i.M)(o.onPointerDown,e=>{f.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(x(e),e.preventDefault())}),onKeyDown:(0,i.M)(o.onKeyDown,e=>{let t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&T.includes(e.key)&&(x(),e.preventDefault())})})})});O.displayName=B;var F="SelectValue",K=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:l,children:o,placeholder:i="",...a}=e,u=V(F,r),{onValueNodeHasChildrenChange:d}=u,c=void 0!==o,p=(0,s.e)(t,u.onValueNodeChange);return(0,b.b)(()=>{d(c)},[d,c]),(0,k.jsx)(w.WV.span,{...a,ref:p,style:{pointerEvents:"none"},children:ej(u.value)?(0,k.jsx)(k.Fragment,{children:i}):o})});K.displayName=F;var Z=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...l}=e;return(0,k.jsx)(w.WV.span,{"aria-hidden":!0,...l,ref:t,children:n||"▼"})});Z.displayName="SelectIcon";var q=e=>(0,k.jsx)(m.h,{asChild:!0,...e});q.displayName="SelectPortal";var U="SelectContent",z=n.forwardRef((e,t)=>{let r=V(U,e.__scopeSelect),[o,i]=n.useState();return((0,b.b)(()=>{i(new DocumentFragment)},[]),r.open)?(0,k.jsx)($,{...e,ref:t}):o?l.createPortal((0,k.jsx)(X,{scope:e.__scopeSelect,children:(0,k.jsx)(E.Slot,{scope:e.__scopeSelect,children:(0,k.jsx)("div",{children:e.children})})}),o):null});z.displayName=U;var[X,Y]=_(U),$=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:u,side:d,sideOffset:v,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:T,...M}=e,R=V(U,r),[E,D]=n.useState(null),[_,N]=n.useState(null),P=(0,s.e)(t,e=>D(e)),[L,W]=n.useState(null),[A,H]=n.useState(null),B=I(r),[O,F]=n.useState(!1),K=n.useRef(!1);n.useEffect(()=>{if(E)return(0,C.Ry)(E)},[E]),(0,p.EW)();let Z=n.useCallback(e=>{let[t,...r]=B().map(e=>e.ref.current),[n]=r.slice(-1),l=document.activeElement;for(let r of e)if(r===l||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&_&&(_.scrollTop=0),r===n&&_&&(_.scrollTop=_.scrollHeight),null==r||r.focus(),document.activeElement!==l))return},[B,_]),q=n.useCallback(()=>Z([L,E]),[Z,L,E]);n.useEffect(()=>{O&&q()},[O,q]);let{onOpenChange:z,triggerPointerDownPosRef:Y}=R;n.useEffect(()=>{if(E){let e={x:0,y:0},t=t=>{var r,n,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(l=null===(r=Y.current)||void 0===r?void 0:r.x)&&void 0!==l?l:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(n=Y.current)||void 0===n?void 0:n.y)&&void 0!==o?o:0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():E.contains(r.target)||z(!1),document.removeEventListener("pointermove",t),Y.current=null};return null!==Y.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[E,z,Y]),n.useEffect(()=>{let e=()=>z(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[z]);let[$,Q]=eT(e=>{let t=B().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eM(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=n.useCallback((e,t,r)=>{let n=!K.current&&!r;(void 0!==R.value&&R.value===t||n)&&(W(e),n&&(K.current=!0))},[R.value]),et=n.useCallback(()=>null==E?void 0:E.focus(),[E]),er=n.useCallback((e,t,r)=>{let n=!K.current&&!r;(void 0!==R.value&&R.value===t||n)&&H(e)},[R.value]),en="popper"===l?J:G,el=en===J?{side:d,sideOffset:v,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:T}:{};return(0,k.jsx)(X,{scope:r,content:E,viewport:_,onViewportChange:N,itemRefCallback:ee,selectedItem:L,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:q,selectedItemText:A,position:l,isPositioned:O,searchRef:$,children:(0,k.jsx)(j.Z,{as:g.g7,allowPinchZoom:!0,children:(0,k.jsx)(f.M,{asChild:!0,trapped:R.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.M)(o,e=>{var t;null===(t=R.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,k.jsx)(c.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>R.onOpenChange(!1),children:(0,k.jsx)(en,{role:"listbox",id:R.contentId,"data-state":R.open?"open":"closed",dir:R.dir,onContextMenu:e=>e.preventDefault(),...M,...el,onPlaced:()=>F(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",...M.style},onKeyDown:(0,i.M)(M.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Q(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=B().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>Z(t)),e.preventDefault()}})})})})})})});$.displayName="SelectContentImpl";var G=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:l,...i}=e,a=V(U,r),u=Y(U,r),[d,c]=n.useState(null),[p,f]=n.useState(null),v=(0,s.e)(t,e=>f(e)),h=I(r),m=n.useRef(!1),g=n.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:S,focusSelectedItem:C}=u,j=n.useCallback(()=>{if(a.trigger&&a.valueNode&&d&&p&&x&&y&&S){let e=a.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=a.valueNode.getBoundingClientRect(),n=S.getBoundingClientRect();if("rtl"!==a.dir){let l=n.left-t.left,i=r.left-l,a=e.left-i,s=e.width+a,u=Math.max(s,t.width),c=window.innerWidth-10,p=(0,o.u)(i,[10,Math.max(10,c-u)]);d.style.minWidth=s+"px",d.style.left=p+"px"}else{let l=t.right-n.right,i=window.innerWidth-r.right-l,a=window.innerWidth-e.right-i,s=e.width+a,u=Math.max(s,t.width),c=window.innerWidth-10,p=(0,o.u)(i,[10,Math.max(10,c-u)]);d.style.minWidth=s+"px",d.style.right=p+"px"}let i=h(),s=window.innerHeight-20,u=x.scrollHeight,c=window.getComputedStyle(p),f=parseInt(c.borderTopWidth,10),v=parseInt(c.paddingTop,10),w=parseInt(c.borderBottomWidth,10),g=f+v+u+parseInt(c.paddingBottom,10)+w,b=Math.min(5*y.offsetHeight,g),C=window.getComputedStyle(x),j=parseInt(C.paddingTop,10),k=parseInt(C.paddingBottom,10),T=e.top+e.height/2-10,M=y.offsetHeight/2,R=f+v+(y.offsetTop+M);if(R<=T){let e=i.length>0&&y===i[i.length-1].ref.current;d.style.bottom="0px";let t=p.clientHeight-x.offsetTop-x.offsetHeight;d.style.height=R+Math.max(s-T,M+(e?k:0)+t+w)+"px"}else{let e=i.length>0&&y===i[0].ref.current;d.style.top="0px";let t=Math.max(T,f+x.offsetTop+(e?j:0)+M);d.style.height=t+(g-R)+"px",x.scrollTop=R-T+x.offsetTop}d.style.margin="".concat(10,"px 0"),d.style.minHeight=b+"px",d.style.maxHeight=s+"px",null==l||l(),requestAnimationFrame(()=>m.current=!0)}},[h,a.trigger,a.valueNode,d,p,x,y,S,a.dir,l]);(0,b.b)(()=>j(),[j]);let[T,M]=n.useState();(0,b.b)(()=>{p&&M(window.getComputedStyle(p).zIndex)},[p]);let R=n.useCallback(e=>{e&&!0===g.current&&(j(),null==C||C(),g.current=!1)},[j,C]);return(0,k.jsx)(Q,{scope:r,contentWrapper:d,shouldExpandOnScrollRef:m,onScrollButtonChange:R,children:(0,k.jsx)("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:T},children:(0,k.jsx)(w.WV.div,{...i,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})});G.displayName="SelectItemAlignedPosition";var J=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:l=10,...o}=e,i=P(r);return(0,k.jsx)(h.VY,{...i,...o,ref:t,align:n,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});J.displayName="SelectPopperPosition";var[Q,ee]=_(U,{}),et="SelectViewport",er=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:l,...o}=e,a=Y(et,r),u=ee(et,r),d=(0,s.e)(t,a.onViewportChange),c=n.useRef(0);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,k.jsx)(E.Slot,{scope:r,children:(0,k.jsx)(w.WV.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:d,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,i.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=u;if((null==n?void 0:n.current)&&r){let e=Math.abs(c.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,l=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(l<n){let o=l+e,i=Math.min(n,o),a=o-i;r.style.height=i+"px","0px"===r.style.bottom&&(t.scrollTop=a>0?a:0,r.style.justifyContent="flex-end")}}}c.current=t.scrollTop})})})]})});er.displayName=et;var en="SelectGroup",[el,eo]=_(en),ei=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=(0,v.M)();return(0,k.jsx)(el,{scope:r,id:l,children:(0,k.jsx)(w.WV.div,{role:"group","aria-labelledby":l,...n,ref:t})})});ei.displayName=en;var ea="SelectLabel",es=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=eo(ea,r);return(0,k.jsx)(w.WV.div,{id:l.id,...n,ref:t})});es.displayName=ea;var eu="SelectItem",[ed,ec]=_(eu),ep=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:l,disabled:o=!1,textValue:a,...u}=e,d=V(eu,r),c=Y(eu,r),p=d.value===l,[f,h]=n.useState(null!=a?a:""),[m,g]=n.useState(!1),x=(0,s.e)(t,e=>{var t;return null===(t=c.itemRefCallback)||void 0===t?void 0:t.call(c,e,l,o)}),y=(0,v.M)(),b=n.useRef("touch"),S=()=>{o||(d.onValueChange(l),d.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,k.jsx)(ed,{scope:r,value:l,disabled:o,textId:y,isSelected:p,onItemTextChange:n.useCallback(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[]),children:(0,k.jsx)(E.ItemSlot,{scope:r,value:l,disabled:o,textValue:f,children:(0,k.jsx)(w.WV.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":p&&m,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...u,ref:x,onFocus:(0,i.M)(u.onFocus,()=>g(!0)),onBlur:(0,i.M)(u.onBlur,()=>g(!1)),onClick:(0,i.M)(u.onClick,()=>{"mouse"!==b.current&&S()}),onPointerUp:(0,i.M)(u.onPointerUp,()=>{"mouse"===b.current&&S()}),onPointerDown:(0,i.M)(u.onPointerDown,e=>{b.current=e.pointerType}),onPointerMove:(0,i.M)(u.onPointerMove,e=>{if(b.current=e.pointerType,o){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}else"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.M)(u.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}}),onKeyDown:(0,i.M)(u.onKeyDown,e=>{var t;(null===(t=c.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(M.includes(e.key)&&S()," "===e.key&&e.preventDefault())})})})})});ep.displayName=eu;var ef="SelectItemText",ev=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:o,style:i,...a}=e,u=V(ef,r),d=Y(ef,r),c=ec(ef,r),p=A(ef,r),[f,v]=n.useState(null),h=(0,s.e)(t,e=>v(e),c.onItemTextChange,e=>{var t;return null===(t=d.itemTextRefCallback)||void 0===t?void 0:t.call(d,e,c.value,c.disabled)}),m=null==f?void 0:f.textContent,g=n.useMemo(()=>(0,k.jsx)("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=p;return(0,b.b)(()=>(x(g),()=>y(g)),[x,y,g]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w.WV.span,{id:c.textId,...a,ref:h}),c.isSelected&&u.valueNode&&!u.valueNodeHasChildren?l.createPortal(a.children,u.valueNode):null]})});ev.displayName=ef;var eh="SelectItemIndicator",em=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return ec(eh,r).isSelected?(0,k.jsx)(w.WV.span,{"aria-hidden":!0,...n,ref:t}):null});em.displayName=eh;var ew="SelectScrollUpButton",eg=n.forwardRef((e,t)=>{let r=Y(ew,e.__scopeSelect),l=ee(ew,e.__scopeSelect),[o,i]=n.useState(!1),a=(0,s.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){i(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,k.jsx)(eb,{...e,ref:a,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});eg.displayName=ew;var ex="SelectScrollDownButton",ey=n.forwardRef((e,t)=>{let r=Y(ex,e.__scopeSelect),l=ee(ex,e.__scopeSelect),[o,i]=n.useState(!1),a=(0,s.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;i(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,k.jsx)(eb,{...e,ref:a,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});ey.displayName=ex;var eb=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:l,...o}=e,a=Y("SelectScrollButton",r),s=n.useRef(null),u=I(r),d=n.useCallback(()=>{null!==s.current&&(window.clearInterval(s.current),s.current=null)},[]);return n.useEffect(()=>()=>d(),[d]),(0,b.b)(()=>{var e;let t=u().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[u]),(0,k.jsx)(w.WV.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,i.M)(o.onPointerDown,()=>{null===s.current&&(s.current=window.setInterval(l,50))}),onPointerMove:(0,i.M)(o.onPointerMove,()=>{var e;null===(e=a.onItemLeave)||void 0===e||e.call(a),null===s.current&&(s.current=window.setInterval(l,50))}),onPointerLeave:(0,i.M)(o.onPointerLeave,()=>{d()})})}),eS=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,k.jsx)(w.WV.div,{"aria-hidden":!0,...n,ref:t})});eS.displayName="SelectSeparator";var eC="SelectArrow";function ej(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=P(r),o=V(eC,r),i=Y(eC,r);return o.open&&"popper"===i.position?(0,k.jsx)(h.Eh,{...l,...n,ref:t}):null}).displayName=eC;var ek=n.forwardRef((e,t)=>{let{value:r,...l}=e,o=n.useRef(null),i=(0,s.e)(t,o),a=function(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(a!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[a,r]),(0,k.jsx)(S.T,{asChild:!0,children:(0,k.jsx)("select",{...l,ref:i,defaultValue:r})})});function eT(e){let t=(0,x.W)(e),r=n.useRef(""),l=n.useRef(0),o=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),i=n.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,o,i]}function eM(e,t,r){var n;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===l.length&&(o=o.filter(e=>e!==r));let i=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return i!==r?i:void 0}ek.displayName="BubbleSelect";var eR=H,eE=O,eI=K,eD=Z,e_=q,eN=z,eP=er,eL=ei,eV=es,eW=ep,eA=ev,eH=em,eB=eg,eO=ey,eF=eS}}]);