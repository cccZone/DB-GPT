(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{99987:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(46750),o=r(40431),a=r(86006),i=r(46319),l=r(47562),s=r(53832),c=r(99179),d=r(50645),u=r(88930),v=r(47093),m=r(326),g=r(94244),p=r(18587);function f(e){return(0,p.d6)("MuiButton",e)}let h=(0,p.sI)("MuiButton",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","focusVisible","disabled","sizeSm","sizeMd","sizeLg","fullWidth","startDecorator","endDecorator","loading","loadingIndicatorCenter"]);var x=r(9268);let y=["children","action","color","variant","size","fullWidth","startDecorator","endDecorator","loading","loadingPosition","loadingIndicator","disabled"],b=e=>{let{color:t,disabled:r,focusVisible:n,focusVisibleClassName:o,fullWidth:a,size:i,variant:c,loading:d}=e,u={root:["root",r&&"disabled",n&&"focusVisible",a&&"fullWidth",c&&`variant${(0,s.Z)(c)}`,t&&`color${(0,s.Z)(t)}`,i&&`size${(0,s.Z)(i)}`,d&&"loading"],startDecorator:["startDecorator"],endDecorator:["endDecorator"],loadingIndicatorCenter:["loadingIndicatorCenter"]},v=(0,l.Z)(u,f,{});return n&&o&&(v.root+=` ${o}`),v},Z=(0,d.Z)("span",{name:"JoyButton",slot:"StartDecorator",overridesResolver:(e,t)=>t.startDecorator})({"--Icon-margin":"0 0 0 calc(var(--Button-gap) / -2)","--CircularProgress-margin":"0 0 0 calc(var(--Button-gap) / -2)",display:"inherit",marginRight:"var(--Button-gap)"}),j=(0,d.Z)("span",{name:"JoyButton",slot:"EndDecorator",overridesResolver:(e,t)=>t.endDecorator})({"--Icon-margin":"0 calc(var(--Button-gap) / -2) 0 0","--CircularProgress-margin":"0 calc(var(--Button-gap) / -2) 0 0",display:"inherit",marginLeft:"var(--Button-gap)"}),w=(0,d.Z)("span",{name:"JoyButton",slot:"LoadingCenter",overridesResolver:(e,t)=>t.loadingIndicatorCenter})(({theme:e,ownerState:t})=>{var r,n,a,i;return(0,o.Z)({display:"inherit",position:"absolute",left:"50%",transform:"translateX(-50%)",color:null==(r=e.variants[t.variant])?void 0:null==(n=r[t.color])?void 0:n.color},t.disabled&&{color:null==(a=e.variants[`${t.variant}Disabled`])?void 0:null==(i=a[t.color])?void 0:i.color})}),z=(0,d.Z)("button",{name:"JoyButton",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{var r,n,a,i;return[(0,o.Z)({"--Icon-margin":"initial"},"sm"===t.size&&{"--Icon-fontSize":"1.25rem","--CircularProgress-size":"20px","--Button-gap":"0.375rem",minHeight:"var(--Button-minHeight, 2rem)",fontSize:e.vars.fontSize.sm,paddingBlock:"2px",paddingInline:"0.75rem"},"md"===t.size&&{"--Icon-fontSize":"1.5rem","--CircularProgress-size":"24px","--Button-gap":"0.5rem",minHeight:"var(--Button-minHeight, 2.5rem)",fontSize:e.vars.fontSize.sm,paddingBlock:"0.25rem",paddingInline:"1rem"},"lg"===t.size&&{"--Icon-fontSize":"1.75rem","--CircularProgress-size":"28px","--Button-gap":"0.75rem",minHeight:"var(--Button-minHeight, 3rem)",fontSize:e.vars.fontSize.md,paddingBlock:"0.375rem",paddingInline:"1.5rem"},{WebkitTapHighlightColor:"transparent",borderRadius:`var(--Button-radius, ${e.vars.radius.sm})`,margin:"var(--Button-margin)",border:"none",backgroundColor:"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",textDecoration:"none",fontFamily:e.vars.fontFamily.body,fontWeight:e.vars.fontWeight.lg,lineHeight:1},t.fullWidth&&{width:"100%"},{[e.focus.selector]:e.focus.default}),null==(r=e.variants[t.variant])?void 0:r[t.color],{"&:hover":null==(n=e.variants[`${t.variant}Hover`])?void 0:n[t.color]},{"&:active":null==(a=e.variants[`${t.variant}Active`])?void 0:a[t.color]},(0,o.Z)({[`&.${h.disabled}`]:null==(i=e.variants[`${t.variant}Disabled`])?void 0:i[t.color]},"center"===t.loadingPosition&&{[`&.${h.loading}`]:{color:"transparent"}})]}),B=a.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"JoyButton"}),{children:l,action:s,color:d="primary",variant:p="solid",size:f="md",fullWidth:h=!1,startDecorator:B,endDecorator:P,loading:S=!1,loadingPosition:I="center",loadingIndicator:D,disabled:C}=r,N=(0,n.Z)(r,y),{getColor:_}=(0,v.VT)(p),k=_(e.color,d),R=a.useRef(null),$=(0,c.Z)(R,t),{focusVisible:H,setFocusVisible:W,getRootProps:F}=(0,i.Z)((0,o.Z)({},r,{disabled:C||S,ref:$})),T=null!=D?D:(0,x.jsx)(g.Z,(0,o.Z)({},"context"!==k&&{color:k},{thickness:{sm:2,md:3,lg:4}[f]||3}));a.useImperativeHandle(s,()=>({focusVisible:()=>{var e;W(!0),null==(e=R.current)||e.focus()}}),[W]);let J=(0,o.Z)({},r,{color:k,fullWidth:h,variant:p,size:f,focusVisible:H,loading:S,loadingPosition:I,disabled:C||S}),O=b(J),[L,V]=(0,m.Z)("root",{ref:t,className:O.root,elementType:z,externalForwardedProps:N,getSlotProps:F,ownerState:J}),[E,K]=(0,m.Z)("startDecorator",{className:O.startDecorator,elementType:Z,externalForwardedProps:N,ownerState:J}),[M,q]=(0,m.Z)("endDecorator",{className:O.endDecorator,elementType:j,externalForwardedProps:N,ownerState:J}),[A,U]=(0,m.Z)("loadingIndicatorCenter",{className:O.loadingIndicatorCenter,elementType:w,externalForwardedProps:N,ownerState:J});return(0,x.jsxs)(L,(0,o.Z)({},V,{children:[(B||S&&"start"===I)&&(0,x.jsx)(E,(0,o.Z)({},K,{children:S&&"start"===I?T:B})),l,S&&"center"===I&&(0,x.jsx)(A,(0,o.Z)({},U,{children:T})),(P||S&&"end"===I)&&(0,x.jsx)(M,(0,o.Z)({},q,{children:S&&"end"===I?T:P}))]}))});var P=B},45825:function(e,t,r){Promise.resolve().then(r.bind(r,93768))},93768:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(9268),o=r(89081),a=r(86006),i=r(78635),l=r(99987),s=r(35086),c=r(53047),d=r(54842),u=r(67830),v=r(19700),m=r(92391),g=r(89749),p=r(56008);function f(){var e;let t=m.z.object({query:m.z.string().min(1)}),r=(0,p.useRouter)(),{mode:f}=(0,i.tv)(),[h,x]=(0,a.useState)(!1),y=(0,v.cI)({resolver:(0,u.F)(t),defaultValues:{}}),{data:b}=(0,o.Z)(async()=>await (0,g.K)("v1/chat/dialogue/scenes")),Z=async e=>{let{query:t}=e;try{var n,o;x(!0),y.reset();let e=await (0,g.K)("/v1/chat/dialogue/new",{chat_mode:"chat_normal"});(null==e?void 0:e.success)&&(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.conv_uid)&&r.push("/agents/".concat(null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.conv_uid,"?initMessage=").concat(t))}catch(e){}finally{x(!1)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none",children:(0,n.jsx)("div",{className:"w-[108rem] flex-none flex justify-end",children:(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{srcSet:"/bg1.avif",type:"image/avif"}),(0,n.jsx)("img",{srcSet:"/bg2.png",alt:"",className:"w-[71.75rem] flex-none max-w-none "})]})})}),(0,n.jsxs)("div",{className:"mx-auto flex h-full max-w-3xl flex-col gap-6 px-5 pt-6 sm:gap-8 xl:max-w-4xl",children:[(0,n.jsx)("div",{className:"lg:my-auto grid gap-8 lg:grid-cols-3",children:(0,n.jsxs)("div",{className:"lg:col-span-3 lg:mt-12",children:[(0,n.jsx)("p",{className:"mb-3",children:"Scenes"}),(0,n.jsx)("div",{className:"grid gap-2 lg:grid-cols-3 lg:gap-4",children:null==b?void 0:null===(e=b.data)||void 0===e?void 0:e.map(e=>(0,n.jsx)(l.Z,{size:"md",variant:"soft",onClick:async()=>{var t,n;let o=await (0,g.K)("/v1/chat/dialogue/new",{chat_mode:e.chat_scene});(null==o?void 0:o.success)&&(null==o?void 0:null===(t=o.data)||void 0===t?void 0:t.conv_uid)&&r.push("/agents/".concat(null==o?void 0:null===(n=o.data)||void 0===n?void 0:n.conv_uid,"?scene=").concat(e.chat_scene))},children:e.scene_name},e.chat_scene))})]})}),(0,n.jsx)("div",{className:"h-60 flex-none"})]}),(0,n.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-3.5 py-4 max-md:border-t sm:px-5 md:py-8 xl:max-w-4xl [&>*]:pointer-events-auto",children:(0,n.jsx)("form",{style:{maxWidth:"100%",width:"100%",position:"relative",display:"flex",marginTop:"auto",overflow:"visible",background:"none",justifyContent:"center",marginLeft:"auto",marginRight:"auto"},onSubmit:e=>{y.handleSubmit(Z)(e)},children:(0,n.jsx)(s.ZP,{sx:{width:"100%"},variant:"outlined",placeholder:"Ask anything",endDecorator:(0,n.jsx)(c.ZP,{type:"submit",disabled:h,children:(0,n.jsx)(d.Z,{})}),...y.register("query")})})})]})}},89749:function(e,t,r){"use strict";r.d(t,{K:function(){return c},T:function(){return s}});var n=r(3748),o=r(24214),a=r(84835);o.Z.defaults.baseURL="http://127.0.0.1:5000",o.Z.defaults.timeout=1e4,o.Z.interceptors.response.use(e=>e.data,e=>Promise.reject(e));let i={"content-type":"application/json"},l=e=>{if(!(0,a.isPlainObject)(e))return JSON.stringify(e);let t={...e};for(let e in t){let r=t[e];"string"==typeof r&&(t[e]=r.trim())}return JSON.stringify(t)},s=(e,t)=>{if(t){let r=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");r&&(e+="?".concat(r))}return o.Z.get(e,{headers:i}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})},c=(e,t)=>{let r=l(t);return o.Z.post(e,{body:r,headers:i}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})}}},function(e){e.O(0,[180,448,22,599,86,93,259,253,769,744],function(){return e(e.s=45825)}),_N_E=e.O()}]);