"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[3808],{4018:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=o(5893),t=o(1151);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.kernel-cmdline.bls-append.meta.json"},i="org.osbuild.kernel-cmdline.bls-append",l={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.kernel-cmdline.bls-append",title:"org.osbuild.kernel-cmdline.bls-append",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.kernel-cmdline.bls-append.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.kernel-cmdline.bls-append",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.kernel-cmdline.bls-append",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.kernel-cmdline.bls-append.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.kernel-cmdline.bls-append.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.isolinux",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.isolinux"},next:{title:"org.osbuild.kernel-cmdline",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.kernel-cmdline"}},d={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"orgosbuildkernel-cmdlinebls-append",children:"org.osbuild.kernel-cmdline.bls-append"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Add kernel command line parameters to a BLS [1] config either in\nthe tree or in a mount."})}),"\n",(0,s.jsxs)(n.p,{children:["[1] ",(0,s.jsx)(n.a,{href:"https://freedesktop.org/wiki/Specifications/BootLoaderSpec/",children:"https://freedesktop.org/wiki/Specifications/BootLoaderSpec/"})]}),"\n",(0,s.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "kernel_opts"\n    ],\n    "properties": {\n      "kernel_opts": {\n        "description": "Additional kernel command line options",\n        "type": "array",\n        "items": {\n          "description": "A single kernel command line option",\n          "type": "string"\n        }\n      },\n      "bootpath": {\n        "type": "string",\n        "description": "The mounted location of the boot filesystem tree where the BLS entries will be under ./loader/entries/*.conf",\n        "pattern": "^(mount|tree):///",\n        "examples": [\n          "tree:///boot",\n          "mount:///",\n          "mount:///boot"\n        ],\n        "default": "tree:///boot"\n      }\n    }\n  },\n  "devices": {\n    "type": "object",\n    "additionalProperties": true\n  },\n  "mounts": {\n    "type": "array"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var s=o(7294);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);