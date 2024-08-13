"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8315],{9005:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(5893),t=n(1151);const r={},i="org.osbuild.container-deploy",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.container-deploy",title:"org.osbuild.container-deploy",description:"Deploy a container.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.container-deploy.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.container-deploy",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.container-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.container-deploy.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.cloud-init",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.cloud-init"},next:{title:"org.osbuild.containers.storage.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.storage.conf"}},l={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"orgosbuildcontainer-deploy",children:"org.osbuild.container-deploy"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Deploy a container."})}),"\n",(0,s.jsx)(o.p,{children:"Buildhost commands used: podman skopeo"}),"\n",(0,s.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:"{}\n"})}),"\n",(0,s.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "images"\n    ],\n    "properties": {\n      "images": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "properties": {\n      "exclude": {\n        "type": "array",\n        "description": "Exclude paths from the deployment",\n        "minItems": 1,\n        "items": {\n          "type": "string"\n        }\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>d,a:()=>i});var s=n(7294);const t={},r=s.createContext(t);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);