"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8147],{2625:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.first-boot","title":"org.osbuild.first-boot","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.first-boot.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.first-boot","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.first-boot","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.first-boot.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.first-boot.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.firewall","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.firewall"},"next":{"title":"org.osbuild.fix-bls","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.fix-bls"}}');var i=s(4848),n=s(8453);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.first-boot.meta.json"},l="org.osbuild.first-boot",d={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"orgosbuildfirst-boot",children:"org.osbuild.first-boot"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Execute commands on first-boot"})}),"\n",(0,i.jsx)(o.p,{children:"Sequentially execute a list of commands on first-boot / instantiation.\nThis stage uses a logic similar to systemd's first-boot to execute a given\nscript only the first time the image is booted.\nAn empty flag file /etc/osbuild-first-boot is written to /etc and a systemd\nservice is enabled that is only run when the file exits, and will remove it\nbefore executing the given commands.\nIf the flag-file cannot be removed, the service fails without executing\nany further first-boot commands."}),"\n",(0,i.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "commands"\n  ],\n  "properties": {\n    "commands": {\n      "type": "array",\n      "description": "The command lines to execute",\n      "items": {\n        "type": "string"\n      }\n    },\n    "wait_for_network": {\n      "type": "boolean",\n      "description": "Wait for the network to be up before executing",\n      "default": false\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:"{}\n"})})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>l});var t=s(6540);const i={},n=t.createContext(i);function r(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);