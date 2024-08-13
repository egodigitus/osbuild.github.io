"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5759],{450:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var n=o(5893),i=o(1151);const t={},r="org.osbuild.xorrisofs",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.xorrisofs",title:"org.osbuild.xorrisofs",description:"Assemble a Rock Ridge enhanced ISO 9660 filesystem (iso)",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.xorrisofs.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.xorrisofs",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.xorrisofs",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.xorrisofs.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.wsl.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.wsl.conf"},next:{title:"org.osbuild.xz",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.xz"}},l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"orgosbuildxorrisofs",children:"org.osbuild.xorrisofs"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Assemble a Rock Ridge enhanced ISO 9660 filesystem (iso)"})}),"\n",(0,n.jsxs)(s.p,{children:["Uses the ",(0,n.jsx)(s.code,{children:"xorrisofs"}),"(1) command line utility to assemble a\nAssemble a Rock Ridge enhanced ISO 9660 filesystem (iso).\nThe iso can be made bootable by specifying a combination of\n",(0,n.jsx)(s.code,{children:"boot"})," and ",(0,n.jsx)(s.code,{children:"efi"}),". What exact options make sense depend on\nthe target platform.\nThe ",(0,n.jsx)(s.code,{children:"isolevel"})," options controls the limits of data size and\nfilenames: if the iso should contain a  file, like a rootfs\nimage, that is bigger than 4GB, at least iso level 3 is\nrequired."]}),"\n",(0,n.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "filename",\n      "volid"\n    ],\n    "properties": {\n      "filename": {\n        "type": "string",\n        "description": "Filename of the iso to create"\n      },\n      "volid": {\n        "type": "string",\n        "description": "Volume id to set",\n        "pattern": "[A-Z0-9_-]{1,32}"\n      },\n      "sysid": {\n        "type": "string",\n        "description": "System id to set",\n        "pattern": "[A-Z0-9_-]{1,32}"\n      },\n      "boot": {\n        "type": "object",\n        "additionalProperties": false,\n        "required": [\n          "image",\n          "catalog"\n        ],\n        "properties": {\n          "image": {\n            "type": "string",\n            "description": "Path to the boot image (on the iso)"\n          },\n          "catalog": {\n            "type": "string",\n            "description": "Path to the boot catalog file (on the iso)"\n          }\n        }\n      },\n      "efi": {\n        "type": "string"\n      },\n      "isohybridmbr": {\n        "type": "string",\n        "description": "Install the argument (buildroot) as ISOLINUX isohybrid MBR"\n      },\n      "isolevel": {\n        "type": "integer",\n        "description": "The ISO 9660 version (limits of data size and filenames)",\n        "minimum": 1,\n        "maximum": 4\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "tree"\n    ],\n    "properties": {\n      "tree": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>d,a:()=>r});var n=o(7294);const i={},t=n.createContext(i);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);