"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2812],{6300:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(5893),r=o(1151);const i={},s="Fedora service",a={id:"hosted/fedora-console",title:"Fedora service",description:"Image Builder is currently running a staging instance on https://console.stg.fedorainfracloud.org/. The intent is to - in the future - integrate more services in a Fedora Console.",source:"@site/docs/hosted/fedora-console.md",sourceDirName:"hosted",slug:"/hosted/fedora-console",permalink:"/docs/hosted/fedora-console",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/hosted/fedora-console.md",tags:[],version:"current",frontMatter:{},sidebar:"hosted",previous:{title:"Image Builder Workers",permalink:"/docs/hosted/architecture/image-builder-workers"},next:{title:"Image Builder Koji integration",permalink:"/docs/hosted/image-builder-koji"}},c={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Service API",id:"service-api",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fedora-service",children:"Fedora service"})}),"\n",(0,n.jsxs)(t.p,{children:["Image Builder is currently running a staging instance on ",(0,n.jsx)(t.a,{href:"https://console.stg.fedorainfracloud.org/",children:"https://console.stg.fedorainfracloud.org/"}),". The ",(0,n.jsx)(t.a,{href:"https://discussion.fedoraproject.org/t/image-builder-for-fedora/92925/1",children:"intent is to - in the future - integrate more services in a Fedora Console"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Create an account on ",(0,n.jsx)(t.a,{href:"https://accounts.stg.fedoraproject.org/",children:"Fedora staging"}),"."]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://id.stg.fedoraproject.org/openidc/Authorization?scope=openid&client_id=consolerhc-cli&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=token&nonce=foo",children:"Authorize the client and get an API token from Fedora"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"service-api",children:"Service API"}),"\n",(0,n.jsx)(t.p,{children:"You can call out to the service's API directly to start building images."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:"Example request: Build an image",children:'curl -d @request.json -H "content-type: application/json" -H "Authorization: Bearer $API_TOKEN" https://console.stg.fedorainfracloud.org/api/image-builder/v1/compose\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:"Example request: Show your image builds",children:'curl -H "content-type: application/json" -H "Authorization: Bearer $API_TOKEN" https://console.stg.fedorainfracloud.org/api/image-builder/v1/composes\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/osbuild/image-builder/main/internal/v1/api.yaml",children:"Continue reading here for the full API specification."})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var n=o(7294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);