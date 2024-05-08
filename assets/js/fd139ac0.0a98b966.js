"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9628],{3417:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var n=s(5893),r=s(1151);const t={},i="org.osbuild.greenboot",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.greenboot",title:"org.osbuild.greenboot",description:"Configure greenboot",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.greenboot.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.greenboot",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.greenboot",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.greenboot.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.gcp.guest-agent.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.gcp.guest-agent.conf"},next:{title:"org.osbuild.groups",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.groups"}},c={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"orgosbuildgreenboot",children:"org.osbuild.greenboot"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Configure greenboot"})}),"\n",(0,n.jsx)(o.p,{children:"Update configuration of greenboot in /etc/greenboot/greenbot.conf."}),"\n",(0,n.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "config"\n  ],\n  "properties": {\n    "config": {\n      "additionalProperties": false,\n      "description": "greenboot config options",\n      "type": "object",\n      "properties": {\n        "monitor_services": {\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:"{}\n"})})]})}function a(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>d,a:()=>i});var n=s(7294);const r={},t=n.createContext(r);function i(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);