"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4563],{9860:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=i(5893),o=i(1151);const t={},s="Uploading a container image",a={id:"on-premises/user-guide/uploading-to-registry",title:"Uploading a container image",description:"osbuild-composer can upload a container image, like the RHEL for",source:"@site/docs/on-premises/03-user-guide/05-uploading-to-registry.md",sourceDirName:"on-premises/03-user-guide",slug:"/on-premises/user-guide/uploading-to-registry",permalink:"/docs/on-premises/user-guide/uploading-to-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/on-premises/03-user-guide/05-uploading-to-registry.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"onPremises",previous:{title:"Uploading an image to to a bucket in a Generic S3 server",permalink:"/docs/on-premises/user-guide/uploading-cloud-images/uploading-to-generic-s3"},next:{title:"Uploading an ostree commit to Pulp",permalink:"/docs/on-premises/user-guide/uploading-to-pulp-stree"}},c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"uploading-a-container-image",children:"Uploading a container image"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"osbuild-composer"})," can upload a container image, like the RHEL for\nedge container, to a registry directly after it has been built."]}),"\n",(0,r.jsx)(n.p,{children:"In order to do so, the container reference and an upload configuration\nfile need to be specified when building a container artifact:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ sudo composer-cli compose start BLUEPRINT container REFERENCE CONFIG.toml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"BLUEPRINT"})," is the name for the container and ",(0,r.jsx)(n.code,{children:"REFERENCE"})," the\nreference to the container image, like ",(0,r.jsx)(n.code,{children:"registry.example.com/image:tag"}),".\nIf ",(0,r.jsx)(n.code,{children:":tag"})," is omitted, ",(0,r.jsx)(n.code,{children:":latest"})," is the default.  The ",(0,r.jsx)(n.code,{children:"CONFIG.toml"})," file\nmust include ",(0,r.jsx)(n.code,{children:'provider = "container"'}),". Other values are optional."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Toml",children:'provider = "container" # required\n\n[settings]\ntls_verify = false     # optional, TLS verification, default: true\nusername = "USERNAME"  # optional, username to use\npassword = "PASSWORD"  # optional, password to use\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Instead of specifying ",(0,r.jsx)(n.code,{children:"username"})," and ",(0,r.jsx)(n.code,{children:"password"})," directly, a central\n",(0,r.jsx)(n.code,{children:"containers-auth.json(5)"})," file can be used, see\n",(0,r.jsx)(n.a,{href:"../installation/container-auth",children:"Container registry credentials"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var r=i(7294);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);