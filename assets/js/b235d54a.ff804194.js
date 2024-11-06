"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8891],{4028:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.modprobe","title":"org.osbuild.modprobe","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.modprobe.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.modprobe","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.modprobe","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.modprobe.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.modprobe.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.mkswap","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkswap"},"next":{"title":"org.osbuild.nginx.conf","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.nginx.conf"}}');var i=o(4848),r=o(8453);const t={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.modprobe.meta.json"},d="org.osbuild.modprobe",l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"orgosbuildmodprobe",children:"org.osbuild.modprobe"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure modprobe"})}),"\n",(0,i.jsxs)(n.p,{children:["The 'config' option allows the creation of a ",(0,i.jsx)(n.code,{children:".conf"})," configuration\nfile for modprobe in ",(0,i.jsx)(n.code,{children:"/usr/lib/modprobe.d"})," with the name ",(0,i.jsx)(n.code,{children:"filename"}),'.\nCurrently supported "command" objects are:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["for 'blacklist' command","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"'command' property value: \"blacklist\""}),"\n",(0,i.jsx)(n.li,{children:"'modulename' property value: a non-empty string with the name of a module"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["for 'install' command","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"'command' property value: \"install\""}),"\n",(0,i.jsx)(n.li,{children:"'modulename' property value: a non-empty string with the name of a module"}),"\n",(0,i.jsx)(n.li,{children:"'cmdline' property value: a non-empty string representing the command to\nrun instead of inserting the specified module."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "commands",\n    "filename"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "description": "Name of the modprobe configuration file.",\n      "pattern": "^[\\\\w.-]{1,250}\\\\.conf$"\n    },\n    "commands": {\n      "additionalProperties": false,\n      "type": "array",\n      "description": "Array of modprobe commands",\n      "minLength": 1,\n      "items": {\n        "anyOf": [\n          {\n            "additionalProperties": false,\n            "type": "object",\n            "description": "\'blacklist\' command",\n            "required": [\n              "command",\n              "modulename"\n            ],\n            "properties": {\n              "command": {\n                "type": "string",\n                "enum": [\n                  "blacklist"\n                ],\n                "description": "modprobe command."\n              },\n              "modulename": {\n                "type": "string",\n                "minLength": 1,\n                "description": "name of the module to blacklist."\n              }\n            }\n          },\n          {\n            "additionalProperties": false,\n            "type": "object",\n            "description": "\'install\' command",\n            "required": [\n              "command",\n              "modulename",\n              "cmdline"\n            ],\n            "properties": {\n              "command": {\n                "type": "string",\n                "enum": [\n                  "install"\n                ],\n                "description": "modprobe command."\n              },\n              "modulename": {\n                "type": "string",\n                "minLength": 1,\n                "description": "name of the module to blacklis."\n              },\n              "cmdline": {\n                "type": "string",\n                "minLength": 1,\n                "description": "command to run instead of inserting the specified module as normal."\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var s=o(6540);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);