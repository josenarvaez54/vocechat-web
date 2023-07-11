"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[286],{60870:(e,a,t)=>{t.d(a,{Z:()=>i});var s,r=t(70537);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},n.apply(this,arguments)}const l=(e,a)=>{let{title:t,titleId:l,...i}=e;return r.createElement("svg",n({width:16,height:16,viewBox:"0 0 16 16",stroke:"black",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":l},i),t?r.createElement("title",{id:l},t):null,s||(s=r.createElement("path",{d:"M10 4L6 8L10 12",strokeOpacity:.8,strokeLinecap:"round",strokeLinejoin:"round"})))},i=(0,r.forwardRef)(l)},54443:(e,a,t)=>{t.d(a,{Z:()=>r});var s=t(80683);const r=e=>{let{children:a,className:t="",...r}=e;return(0,s.jsx)("label",{className:`text-gray-800 dark:text-gray-100 text-sm font-semibold ${t}`,...r,children:a})}},66286:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var s=t(70537),r=t(27418),n=t(14566),l=t(80308),i=t(15312),c=t(65809),o=t(66160),d=t(51285),m=t(4472),u=t(99487),g=t(54443),h=t(60870),x=t(15924),p=t(80683);function f(e){let{email:a}=e;const t=(0,x.s0)();return(0,p.jsx)(m.Z,{className:"w-full ghost",onClick:()=>{t(`/send_magic_link/${a}`)},children:"Sign in with a Magic Link"})}function w(){const{t:e}=(0,n.$G)("auth"),a=(0,x.s0)();return(0,p.jsxs)("div",{className:"flex gap-1 mt-7 text-sm text-slate-500 dark:text-gray-100 justify-center",children:[(0,p.jsx)("span",{children:e("login.no_account")}),(0,p.jsx)("a",{className:"text-primary-400 cursor-pointer",onClick:()=>{a("/register")},children:e("sign_up")})]})}var j=t(61756);const b={email:"",password:""};function k(){const e=(0,o.CG)((e=>e.server.name)),{t:a}=(0,n.$G)("auth"),{t:t}=(0,n.$G)(),{data:x,isLoading:k}=(0,c.n8)(),[v,{isSuccess:y,isLoading:N,error:_}]=(0,i.YA)(),{data:Z,isSuccess:E}=(0,c.ww)(),[P,S]=(0,s.useState)(!1),[C,L]=(0,s.useState)(b);(0,s.useEffect)((()=>{const e=new URLSearchParams(location.search),a=e.get("code"),t=e.get("state"),s=e.get("magic_token"),r=e.get("exists");if(a&&t&&v({code:a,state:t,type:"oidc"}),s&&"undefined"!==typeof r){"true"==r?v({magic_token:s,type:"magiclink"}):location.href=`/#/register/set_name/login?magic_token=${s}`}}),[]),(0,s.useEffect)((()=>{if(_)switch(_.status){case 401:case 404:r.ZP.error("Username or Password incorrect");break;case 410:r.ZP.error("No associated account found, please contact user admin for an invitation link to join.");break;case"PARSING_ERROR":break;default:r.ZP.error("Something Error")}else;}),[_]),(0,s.useEffect)((()=>{y&&r.ZP.success(t("tip.login"))}),[y]);const O=e=>{const{type:a}=e.target.dataset,{value:t}=e.target;a&&L((e=>(e[a]=t,{...e})))},{email:R,password:$}=C;if(!E)return null;const{magic_link:G,who_can_sign_up:q}=Z,A=x&&G,I=A&&P,M=!A||P;return k?null:(0,p.jsx)("div",{className:"flex-center h-screen dark:bg-gray-700",children:(0,p.jsxs)("div",{className:"relative py-8 px-10 shadow-md rounded-xl",children:[P&&(0,p.jsx)(h.Z,{role:"button",className:"absolute left-7 top-8 w-10 h-10 stroke-gray-300",onClick:()=>{S(!1)}}),(0,p.jsxs)("div",{className:"flex-center flex-col pb-6",children:[(0,p.jsx)("img",{src:`${l.ZP}/resource/organization/logo`,alt:"logo",className:"w-14 h-14 mb-3 md:mb-7 rounded-full"}),(0,p.jsx)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-white",children:a("login.title",{name:e})})]}),(0,p.jsxs)("form",{className:"flex flex-col gap-5 w-80 md:min-w-[360px] ",onSubmit:e=>{e.preventDefault();x&&(null===Z||void 0===Z?void 0:Z.magic_link)&&!P?S(!0):v({...C,type:"password"})},children:[!P&&(0,p.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,p.jsx)(g.Z,{children:"Email"}),(0,p.jsx)(u.Z,{className:"large",name:"email",value:R,type:"email",required:!0,placeholder:a("placeholder_email"),"data-type":"email",onChange:O})]}),(!A||P)&&(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)(g.Z,{children:"Password"}),(0,p.jsx)(u.Z,{className:"large",type:"password",value:$,name:"password",required:!0,"data-type":"password",onChange:O,placeholder:a("placeholder_pwd")})]}),M?(0,p.jsx)(m.Z,{type:"submit",disabled:N,children:N?"Signing":a("sign_in")}):(0,p.jsx)(m.Z,{type:"submit",children:a("continue")})]}),(0,p.jsx)(d.Z,{content:"OR"}),(0,p.jsxs)("div",{className:"socials flex flex-col gap-3",children:[P&&(0,p.jsx)(f,{email:C.email}),!I&&(0,p.jsx)(j.Z,{})]}),"EveryOne"===q&&(0,p.jsx)(w,{})]})})}}}]);