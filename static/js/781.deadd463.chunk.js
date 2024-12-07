"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[781],{97900:(e,a,t)=>{t.d(a,{A:()=>i});var s,l=t(38370);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)({}).hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},n.apply(null,arguments)}const r=({title:e,titleId:a,...t},r)=>l.createElement("svg",n({width:16,height:16,viewBox:"0 0 16 16",stroke:"black",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,s||(s=l.createElement("path",{d:"M10 4L6 8L10 12",strokeOpacity:.8,strokeLinecap:"round",strokeLinejoin:"round"}))),i=(0,l.forwardRef)(r)},41496:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(13706);const l=({children:e,className:a="",...t})=>(0,s.jsx)("label",{className:`text-gray-800 dark:text-gray-100 text-sm font-semibold ${a}`,...t,children:e})},49781:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var s=t(38370),l=t(26887),n=t(52280),r=t(80577),i=t(71024),c=t(43477),o=t(9742),d=t(66215),u=t(13756),m=t(23026),g=t(41496),x=t(97900),h=t(43119),p=t(13706);function f({email:e}){const a=(0,h.Zp)();return(0,p.jsx)(u.A,{className:"w-full ghost",onClick:()=>{a(`/send_magic_link/${e}`)},children:"Sign in with a Magic Link"})}function w(){const{t:e}=(0,n.Bd)("auth"),a=(0,h.Zp)();return(0,p.jsxs)("div",{className:"flex gap-1 mt-7 text-sm text-slate-500 dark:text-gray-100 justify-center",children:[(0,p.jsx)("span",{children:e("login.no_account")}),(0,p.jsx)("a",{className:"text-primary-400 cursor-pointer",onClick:()=>{a("/register")},children:e("sign_up")})]})}var y=t(38705),b=t(55433);const j={email:"",password:""};function v(){const{name:e,logo:a}=(0,o.GV)((e=>e.server),b.bN),{t:t}=(0,n.Bd)("auth"),{t:h}=(0,n.Bd)(),{data:v,isLoading:k}=(0,c.Q0)(),[N,{isSuccess:_,isLoading:A,error:E}]=(0,i._L)(),{data:S,isSuccess:L}=(0,c.T7)(),[C,O]=(0,s.useState)(!1),[R,P]=(0,s.useState)(j);(0,s.useEffect)((()=>{const e=new URLSearchParams(location.search),a=e.get("code"),t=e.get("state"),s=e.get("magic_token"),l=e.get("exists");if(a&&t&&N({code:a,state:t,type:"oidc"}),s&&"undefined"!==typeof l){"true"==l?N({magic_token:s,type:"magiclink"}):location.href=`/#/register/set_name/login?magic_token=${s}`}}),[]),(0,s.useEffect)((()=>{if(E)switch(E.status){case 401:case 404:l.Ay.error("Username or Password incorrect");break;case 410:l.Ay.error("No associated account found, please contact user admin for an invitation link to join.");break;case"PARSING_ERROR":break;default:l.Ay.error("Something Error")}else;}),[E]),(0,s.useEffect)((()=>{_&&l.Ay.success(h("tip.login"))}),[_]);const $=e=>{const{type:a}=e.target.dataset,{value:t}=e.target;if(!a)return;const s={...R,[a]:t};P(s)},{email:B,password:I}=R;if(!L)return null;const{magic_link:T,who_can_sign_up:q}=S,D=v&&T,G=D&&C||"InvitationOnly"==q,M=!D||C;return k?null:(0,p.jsx)("div",{className:"flex-center h-screen dark:bg-gray-700",children:(0,p.jsxs)("div",{className:"relative py-8 px-10 shadow-md rounded-xl",children:[C&&(0,p.jsx)(x.A,{role:"button",className:"absolute left-7 top-8 w-10 h-10 stroke-gray-300",onClick:()=>{O(!1)}}),(0,p.jsxs)("div",{className:"flex-center flex-col pb-6 w-full",children:[(0,p.jsx)("img",{src:a||`${r.Ay}/resource/organization/logo?t=${Date.now()}`,alt:"logo",className:"w-14 h-14 mb-3 md:mb-7 rounded-full"}),(0,p.jsx)("h2",{className:"font-semibold text-center text-balance text-2xl max-w-[420px] text-gray-800 dark:text-white",children:t("login.title",{name:e})})]}),(0,p.jsxs)("form",{className:"flex flex-col gap-5 md:min-w-[360px] w-full",autoComplete:"false",onSubmit:e=>{e.preventDefault();v&&(null===S||void 0===S?void 0:S.magic_link)&&!C?O(!0):N({...R,type:"password"})},children:[!C&&(0,p.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,p.jsx)(g.A,{children:"Email"}),(0,p.jsx)(m.A,{autoFocus:!0,className:"large",name:"email",value:B,type:"email",required:!0,placeholder:t("placeholder_email"),"data-type":"email",onChange:$})]}),(!D||C)&&(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)(g.A,{children:"Password"}),(0,p.jsx)(m.A,{className:"large",type:"password",value:I,name:"password",required:!0,"data-type":"password",onChange:$,placeholder:t("placeholder_pwd")})]}),M?(0,p.jsx)(u.A,{type:"submit",disabled:A,children:A?"Signing":t("sign_in")}):(0,p.jsx)(u.A,{type:"submit",children:t("continue")})]}),(0,p.jsx)(d.A,{content:"OR"}),(0,p.jsxs)("div",{className:"socials flex flex-col gap-3",children:[C&&(0,p.jsx)(f,{email:R.email}),!G&&(0,p.jsx)(y.A,{})]}),"EveryOne"===q&&(0,p.jsx)(w,{})]})})}}}]);