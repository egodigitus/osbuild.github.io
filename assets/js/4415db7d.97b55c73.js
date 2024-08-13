"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4616],{7538:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(5893),i=s(1151);const r={},n="org.osbuild.fix-bls",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.fix-bls",title:"org.osbuild.fix-bls",description:"Fix paths in /boot/loader/entries",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.fix-bls.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.fix-bls",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.fix-bls",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.fix-bls.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.first-boot",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.first-boot"},next:{title:"org.osbuild.fstab",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.fstab"}},l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"orgosbuildfix-bls",children:"org.osbuild.fix-bls"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Fix paths in /boot/loader/entries"})}),"\n",(0,t.jsxs)(o.p,{children:['Fixes paths in /boot/loader/entries that have incorrect paths for /boot.\nThis happens because some boot loader config tools (e.g. grub2-mkrelpath)\nexamine /proc/self/mountinfo to find the "real" path to /boot, and find the\npath to the osbuild tree - which won\'t be valid at boot time for this image.\nThe paths in the Bootloader Specification are relative to the partition\nthey are located on, i.e. ',(0,t.jsx)(o.code,{children:"/boot/loader/..."})," if ",(0,t.jsx)(o.code,{children:"/boot"})," is on the root\nfile-system partition. If ",(0,t.jsx)(o.code,{children:"/boot"})," is on a separate partition, the correct\npath would be ",(0,t.jsx)(o.code,{children:"/loader/.../"})," The ",(0,t.jsx)(o.code,{children:"prefix"})," can be used to adjust for that.\nBy default it is ",(0,t.jsx)(o.code,{children:"/boot"}),", i.e. assumes ",(0,t.jsx)(o.code,{children:"/boot"})," is on the root file-system.\nThis stage reads and (re)writes all .conf files in /boot/loader/entries."]}),"\n",(0,t.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "properties": {\n    "prefix": {\n      "description": "Prefix to use, normally `/boot`",\n      "type": "string",\n      "default": "/boot"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>d,a:()=>n});var t=s(7294);const i={},r=t.createContext(i);function n(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);