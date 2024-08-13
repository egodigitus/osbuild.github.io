"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8883],{1535:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var i=o(5893),r=o(1151);const d={},n="org.osbuild.discinfo",t={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.discinfo",title:"org.osbuild.discinfo",description:"Create a .discinfo file describing disk",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.discinfo.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.discinfo",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.discinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.discinfo.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.debug-shell",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.debug-shell"},next:{title:"org.osbuild.dmverity",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.dmverity"}},c={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"orgosbuilddiscinfo",children:"org.osbuild.discinfo"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["Create a ",(0,i.jsx)(s.code,{children:".discinfo"})," file describing disk"]})}),"\n",(0,i.jsxs)(s.p,{children:["This will create a ",(0,i.jsx)(s.code,{children:".discinfo"})," file with the specified parameters."]}),"\n",(0,i.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": true,\n  "required": [\n    "basearch",\n    "release"\n  ],\n  "properties": {\n    "basearch": {\n      "description": "Build architecture.",\n      "type": "string"\n    },\n    "release": {\n      "description": "The product name.",\n      "type": "string"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function a(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>t,a:()=>n});var i=o(7294);const r={},d=i.createContext(r);function n(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);