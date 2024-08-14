"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[7760],{6360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var s=t(5893),i=t(1151);const o={},r="org.osbuild.sfdisk",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.sfdisk",title:"org.osbuild.sfdisk",description:"Partition a target using sfdisk(8)",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.sfdisk.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.sfdisk",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.sfdisk",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.sfdisk.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.selinux",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux"},next:{title:"org.osbuild.sgdisk",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.sgdisk"}},a={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"orgosbuildsfdisk",children:"org.osbuild.sfdisk"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Partition a target using sfdisk(8)"})}),"\n",(0,s.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "devices": {\n    "type": "object",\n    "additionalProperties": true,\n    "required": [\n      "device"\n    ],\n    "properties": {\n      "device": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "label",\n      "uuid"\n    ],\n    "properties": {\n      "uuid": {\n        "description": "UUID for the disk image\'s partition table",\n        "type": "string"\n      },\n      "label": {\n        "description": "The type of the partition table",\n        "type": "string",\n        "enum": [\n          "mbr",\n          "dos",\n          "gpt"\n        ]\n      },\n      "partitions": {\n        "description": "Partition layout ",\n        "type": "array",\n        "items": {\n          "description": "Description of one partition",\n          "type": "object",\n          "properties": {\n            "bootable": {\n              "description": "Mark the partition as bootable (dos)",\n              "type": "boolean"\n            },\n            "name": {\n              "description": "The partition name (GPT)",\n              "type": "string"\n            },\n            "partnum": {\n              "description": "The partition number",\n              "type": "integer"\n            },\n            "size": {\n              "description": "The size of this partition",\n              "type": "integer"\n            },\n            "start": {\n              "description": "The start offset of this partition",\n              "type": "integer"\n            },\n            "type": {\n              "description": "The partition type (UUID or identifier)",\n              "type": "string"\n            },\n            "uuid": {\n              "description": "UUID of the partition (GPT)",\n              "type": "string"\n            },\n            "attrs": {\n              "description": "Attributes of the partition (GPT)",\n              "type": "array",\n              "maxItems": 64,\n              "uniqueItems": true,\n              "items": {\n                "type": "integer",\n                "minimum": 0,\n                "maximum": 63\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);