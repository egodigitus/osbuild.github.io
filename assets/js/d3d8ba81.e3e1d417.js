"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8033],{7764:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=o(5893),t=o(1151);const i={},r="org.osbuild.mkfs.xfs",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.xfs",title:"org.osbuild.mkfs.xfs",description:"Construct an XFS file-system via mkfs.xfs(8)",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.mkfs.xfs.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.xfs",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.xfs",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.mkfs.xfs.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.mkfs.fat",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.fat"},next:{title:"org.osbuild.mkinitcpio",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkinitcpio"}},l={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"orgosbuildmkfsxfs",children:"org.osbuild.mkfs.xfs"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Construct an XFS file-system via mkfs.xfs(8)"})}),"\n",(0,n.jsxs)(s.p,{children:["Construct a XFS file-system with the given options at the device\nspecified via ",(0,n.jsx)(s.code,{children:"device"}),".\nBuildhost commands used: ",(0,n.jsx)(s.code,{children:"mkfs.xfs"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "devices": {\n    "type": "object",\n    "additionalProperties": true,\n    "required": [\n      "device"\n    ],\n    "properties": {\n      "device": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "uuid"\n    ],\n    "properties": {\n      "uuid": {\n        "description": "UUID for the file system",\n        "type": "string"\n      },\n      "label": {\n        "description": "Label for the file system",\n        "type": "string",\n        "maxLength": 12\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>d,a:()=>r});var n=o(7294);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);