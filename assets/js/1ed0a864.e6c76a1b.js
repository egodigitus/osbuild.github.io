"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[7340],{5525:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.vagrant","title":"org.osbuild.vagrant","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.vagrant.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.vagrant","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.vagrant","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.vagrant.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.vagrant.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.users","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.users"},"next":{"title":"org.osbuild.waagent.conf","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.waagent.conf"}}');var o=n(4848),r=n(8453);const a={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.vagrant.meta.json"},i="org.osbuild.vagrant",d={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"orgosbuildvagrant",children:"org.osbuild.vagrant"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Create a Vagrant box"})}),"\n",(0,o.jsxs)(s.p,{children:["Creates the required files for a Vagrant box, intended to be used in with the\norg.osbuild.tar stage to tar up the metadata, Vagrantfile and VM image.\nThis stage requires ",(0,o.jsx)(s.code,{children:"cp"})," and ",(0,o.jsx)(s.code,{children:"qemu-img"}),".\nTesting:\nvagrant box add --name my-box /path/to/the/new.box\nvagrant init my-box\nvagrant up"]}),"\n",(0,o.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "provider"\n    ],\n    "properties": {\n      "provider": {\n        "type": "string",\n        "description": "type of Vagrant box",\n        "enum": [\n          "libvirt"\n        ]\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "image"\n    ],\n    "properties": {\n      "image": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var t=n(6540);const o={},r=t.createContext(o);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);