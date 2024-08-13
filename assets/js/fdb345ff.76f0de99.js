"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[950],{176:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=s(5893),r=s(1151);const t={},i="org.osbuild.erofs",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.erofs",title:"org.osbuild.erofs",description:"Create a file containing an erofs filesystem named filename.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.erofs.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.erofs",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.erofs",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.erofs.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.dracut",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.dracut"},next:{title:"org.osbuild.error",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.error"}},l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"orgosbuilderofs",children:"org.osbuild.erofs"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Create a file containing an erofs filesystem named ",(0,o.jsx)(n.code,{children:"filename"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/EROFS",children:"https://en.wikipedia.org/wiki/EROFS"})," for details about the\nfilesystem.\nBuildhost commands used: ",(0,o.jsx)(n.code,{children:"mkfs.erofs"})]}),"\n",(0,o.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "filename"\n    ],\n    "properties": {\n      "filename": {\n        "description": "Filename for the output",\n        "type": "string"\n      },\n      "compression": {\n        "type": "object",\n        "additionalProperties": false,\n        "required": [\n          "method"\n        ],\n        "properties": {\n          "method": {\n            "description": "Compression method",\n            "enum": [\n              "lz4",\n              "lz4hc",\n              "lzma"\n            ]\n          },\n          "level": {\n            "description": "Compression level. Note that different methods support different levels. See mkfs.erofs(1) for more details",\n            "type": "number"\n          }\n        }\n      },\n      "options": {\n        "description": "Extended options for the filesystem, see mkfs.erofs(1)",\n        "type": "array",\n        "minItems": 1,\n        "items:": {\n          "enum": [\n            "all-fragments",\n            "dedupe",\n            "force-inode-compact",\n            "force-inode-extended",\n            "force-inode-blockmap",\n            "force-chunk-indexes",\n            "fragments",\n            "noinline_data",\n            "ztailpacking"\n          ]\n        }\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "tree"\n    ],\n    "properties": {\n      "tree": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var o=s(7294);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);