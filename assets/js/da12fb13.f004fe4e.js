"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2671],{134:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=s(5893),n=s(1151);const i={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.timezone.meta.json"},r="org.osbuild.timezone",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.timezone",title:"org.osbuild.timezone",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.timezone.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.timezone",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.timezone",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.timezone.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.timezone.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.test",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.test"},next:{title:"org.osbuild.tmpfilesd",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.tmpfilesd"}},l={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"orgosbuildtimezone",children:"org.osbuild.timezone"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Set system timezone"})}),"\n",(0,t.jsxs)(o.p,{children:["Set the system's timezone to ",(0,t.jsx)(o.code,{children:"zone"}),', which should be a valid time zone\nidentifier from the tz database - like "America/New York" or "Europe/Berlin".\nRemoves ',(0,t.jsx)(o.code,{children:"/etc/localtime"}),", then runs the host's ",(0,t.jsx)(o.code,{children:"systemd-firstboot"})," binary with\nthe ",(0,t.jsx)(o.code,{children:"--timezone"})," option, which will re-create ",(0,t.jsx)(o.code,{children:"/etc/localtime"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "zone"\n  ],\n  "properties": {\n    "zone": {\n      "type": "string",\n      "description": "Timezone identifier (from tzdb/zoneinfo)"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:"{}\n"})})]})}function a(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>d,a:()=>r});var t=s(7294);const n={},i=t.createContext(n);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);