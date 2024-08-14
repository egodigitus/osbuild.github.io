"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5080],{170:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=o(5893),t=o(1151);const r={},d="org.osbuild.zstd",i={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.zstd",title:"org.osbuild.zstd",description:"Compress a file",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.zstd.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.zstd",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.zstd",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.zstd.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.zipl",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.zipl"},next:{title:"OSBuild Composer",permalink:"/docs/developer-guide/projects/osbuild-composer/"}},l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"orgosbuildzstd",children:"org.osbuild.zstd"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Compress a file"})}),"\n",(0,n.jsxs)(s.p,{children:["Buildhost commands used: ",(0,n.jsx)(s.code,{children:"zstd"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "file"\n    ],\n    "properties": {\n      "file": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "filename"\n    ],\n    "properties": {\n      "filename": {\n        "description": "Filename to use for the compressed file",\n        "type": "string"\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>i,a:()=>d});var n=o(7294);const t={},r=n.createContext(t);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);