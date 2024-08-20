"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9262],{7873:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var o=s(5893),t=s(1151);const i={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.uki.meta.json"},r="org.osbuild.uki",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.uki",title:"org.osbuild.uki",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.uki.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.uki",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.uki",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.uki.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.uki.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.udev.rules",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.udev.rules"},next:{title:"org.osbuild.untar",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.untar"}},l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"orgosbuilduki",children:"org.osbuild.uki"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Create a Unified Kernel Image"})}),"\n",(0,o.jsxs)(n.p,{children:["A Unified Kernel Image (UKI) is a UEFI executable that contains\na UEFI stub loader, together with the kernel, the initrd, the\nkernel command line and (optionally) a splash screen.\nFor more information see the specification at:\n",(0,o.jsx)(n.a,{href:"https://github.com/uapi-group/specifications/blob/main/specs/unified_kernel_image.md",children:"https://github.com/uapi-group/specifications/blob/main/specs/unified_kernel_image.md"}),"\nHost commands: objdump, objcopy"]}),"\n",(0,o.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "filename"\n    ],\n    "properties": {\n      "filename": {\n        "description": "Filename to use for the resulting UKI",\n        "type": "string"\n      },\n      "kernel": {\n        "type": "object",\n        "required": [\n          "opts"\n        ],\n        "properties": {\n          "opts": {\n            "description": "Array of kernel options for the UKI",\n            "type": "array",\n            "items": {\n              "type": "string"\n            }\n          }\n        }\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "kernel",\n      "initrd",\n      "osrel"\n    ],\n    "properties": {\n      "osrel": {\n        "type": "object",\n        "additionalProperties": true\n      },\n      "kernel": {\n        "type": "object",\n        "additionalProperties": true\n      },\n      "initrd": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var o=s(7294);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);