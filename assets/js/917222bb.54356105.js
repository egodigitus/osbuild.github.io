"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5715],{9969:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=t(5893),o=t(1151);const r={},i="org.osbuild.mkfs.ext4",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.ext4",title:"org.osbuild.mkfs.ext4",description:"Construct an ext4 file-system via mkfs.ext4(8)",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.mkfs.ext4.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.ext4",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.ext4",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.mkfs.ext4.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.mkfs.btrfs",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.btrfs"},next:{title:"org.osbuild.mkfs.fat",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.fat"}},l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"orgosbuildmkfsext4",children:"org.osbuild.mkfs.ext4"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Construct an ext4 file-system via mkfs.ext4(8)"})}),"\n",(0,n.jsxs)(s.p,{children:["Construct a ext4 file-system with the given options at the device\nspecified via ",(0,n.jsx)(s.code,{children:"device"}),".\nBuildhost commands used: ",(0,n.jsx)(s.code,{children:"mke2fs"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "devices": {\n    "type": "object",\n    "additionalProperties": true,\n    "required": [\n      "device"\n    ],\n    "properties": {\n      "device": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "uuid"\n    ],\n    "properties": {\n      "uuid": {\n        "description": "Volume identifier",\n        "type": "string"\n      },\n      "label": {\n        "description": "Label for the file system",\n        "type": "string",\n        "maxLength": 16\n      },\n      "metadata_csum_seed": {\n        "description": "Enable metadata_csum_seed support",\n        "type": "boolean"\n      },\n      "orphan_file": {\n        "description": "Enable orphan_file support",\n        "type": "boolean"\n      },\n      "verity": {\n        "description": "Enable fs-verity support",\n        "type": "boolean"\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>i});var n=t(7294);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);