"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[132],{22421:(e,s,a)=>{a.d(s,{Z:()=>i});var t=a(70537),l=a(14566),r=a(15924),c=a(21812),n=a(80683);function i(e){let{token:s}=e;const{t:a}=(0,l.$G)("auth"),i=(0,r.s0)();return(0,t.useEffect)((()=>{(0,c.tq)()&&s&&(location.href=`https://join.voce.chat/download?link=${encodeURIComponent(`${location.origin}&magic_token=${s}`)}`)}),[s]),(0,n.jsxs)("div",{className:"flex gap-1 mt-7 text-sm text-slate-500 dark:text-gray-100 justify-center",children:[(0,n.jsx)("span",{children:a("reg.have_account")}),(0,n.jsx)("a",{onClick:()=>{i("/login")},className:"text-primary-400 cursor-pointer",children:a("sign_in")})]})}},62132:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var t=a(70537),l=a(15924),r=a(27418),c=a(80308),n=a(17237),i=a(69885),o=a(15312),d=a(14566),x=a(80683);const m=e=>{let{email:s,reset:a}=e;const{t:t}=(0,d.$G)("auth");return(0,x.jsxs)("div",{className:"flex flex-col items-center",children:[(0,x.jsx)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-gray-200 mb-2",children:t("check_email")}),(0,x.jsx)("span",{className:"text-center text-gray-500 mb-6",children:t("check_email_desc",{email:s})}),(0,x.jsx)(i.Z,{onClick:a,className:"main flex",children:t("use_different")})]})};var h=a(44917),u=a(88143),f=a(22421);function g(){const{t:e}=(0,d.$G)("auth"),[s,a]=(0,t.useState)(!1),[g,{isSuccess:j,isLoading:p,error:b}]=(0,o.wi)(),k=(0,l.s0)(),[N,v]=(0,t.useState)("");(0,t.useEffect)((()=>{j&&(r.ZP.success("Send Email Successfully!"),a(!0))}),[j]),(0,t.useEffect)((()=>{if(b&&"status"in b)switch(b.status){case"PARSING_ERROR":r.ZP.error(b.data);break;case 401:r.ZP.error("Username or Password Incorrect");break;case 404:r.ZP.error("Account not exist");break;default:r.ZP.error("Something Error")}else;}),[b]);return(0,x.jsx)("div",{className:"flex-center h-screen dark:bg-gray-700",children:(0,x.jsx)("div",{className:"py-8 px-10 shadow rounded-xl",children:s?(0,x.jsx)(m,{email:N,reset:()=>{v(""),a(!1)}}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"flex flex-col items-center",children:[(0,x.jsx)("img",{src:`${c.ZP}/resource/organization/logo`,alt:"logo",className:"w-14 h-14 mb-7 rounded-full"}),(0,x.jsxs)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-gray-200 mb-2",children:[e("enter"),"VoceChat"]}),(0,x.jsx)("span",{className:"text-center text-gray-500 mb-6",children:e("placeholder_email")})]}),(0,x.jsxs)("form",{onSubmit:e=>{e.preventDefault(),g(N)},className:"flex flex-col gap-5 w-[360px]",children:[(0,x.jsx)(n.Z,{type:"email",className:"large",name:"email",autoFocus:!0,value:N,required:!0,placeholder:e("placeholder_email"),onChange:e=>{const{value:s}=e.target;v(s)}}),(0,x.jsx)(i.Z,{type:"submit",disabled:p||!N,children:p?"Sending":e("continue")})]}),(0,x.jsx)(u.Z,{content:"OR"}),(0,x.jsx)(i.Z,{onClick:()=>{k("/login")},className:"w-full",children:e("login.password")}),(0,x.jsx)("div",{className:"flex flex-col gap-3 py-3",children:(0,x.jsx)(h.Z,{})}),(0,x.jsx)(f.Z,{})]})})})}}}]);