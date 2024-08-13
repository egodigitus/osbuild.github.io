"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5371],{5422:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=o(5893),t=o(1151);const n={},d="org.osbuild.luks2.remove-key",i={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.luks2.remove-key",title:"org.osbuild.luks2.remove-key",description:"Removes the supplied passphrase from the LUKS device.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.luks2.remove-key.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.luks2.remove-key",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.luks2.remove-key",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.luks2.remove-key.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.luks2.format",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.luks2.format"},next:{title:"org.osbuild.lvm2.create",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.create"}},l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"orgosbuildluks2remove-key",children:"org.osbuild.luks2.remove-key"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Removes the supplied passphrase from the LUKS device."})}),"\n",(0,r.jsxs)(s.p,{children:["Buildhost commands used: ",(0,r.jsx)(s.code,{children:"cryptsetup"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "devices": {\n    "type": "object",\n    "additionalProperties": true,\n    "required": [\n      "device"\n    ],\n    "properties": {\n      "device": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "passphrase"\n    ],\n    "properties": {\n      "passphrase": {\n        "description": "Passphrase to remove",\n        "type": "string"\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>i,a:()=>d});var r=o(7294);const t={},n=r.createContext(t);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);