"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5910],{1649:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(5893),o=s(1151);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.lvm2.metadata.meta.json"},a="org.osbuild.lvm2.metadata",i={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.metadata",title:"org.osbuild.lvm2.metadata",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.lvm2.metadata.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.metadata",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.lvm2.metadata.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.lvm2.metadata.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.lvm2.create",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.create"},next:{title:"org.osbuild.machine-id",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.machine-id"}},d={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"orgosbuildlvm2metadata",children:"org.osbuild.lvm2.metadata"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Set LVM2 volume group metadata"})}),"\n",(0,n.jsx)(t.p,{children:"This stage allows you to modify the LVM2 volume group\nmetadata. This data describes various properties about\nthe volume group, physical volume and logical volumes.\nMost importantly it contains the volume group name, so\nthis stage can be used to rename the volume group."}),"\n",(0,n.jsx)(t.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "devices": {\n    "type": "object",\n    "additionalProperties": true,\n    "required": [\n      "device"\n    ],\n    "properties": {\n      "device": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": true,\n    "required": [\n      "vg_name"\n    ],\n    "properties": {\n      "creation_host": {\n        "type": "string",\n        "minLength": 1,\n        "maxLength": 255\n      },\n      "creation_time": {\n        "type": "string",\n        "pattern": "[0-9]+",\n        "description": "Creation time (uint64 represented as string)"\n      },\n      "description": {\n        "type": "string",\n        "minLength": 1\n      },\n      "vg_name": {\n        "type": "string",\n        "pattern": "[a-zA-Z0-9+_.][a-zA-Z0-9+_.-]*"\n      }\n    }\n  }\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>a});var n=s(7294);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);