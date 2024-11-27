"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[7559],{2866:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.chmod","title":"org.osbuild.chmod","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.chmod.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.chmod","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.chmod","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.chmod.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.chmod.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.chattr","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.chattr"},"next":{"title":"org.osbuild.chown","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.chown"}}');var n=s(4848),r=s(8453);const d={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.chmod.meta.json"},i="org.osbuild.chmod",l={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"orgosbuildchmod",children:"org.osbuild.chmod"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Change file mode bits"})}),"\n",(0,n.jsx)(o.p,{children:"Change the file mode bits of one or more files or directories inside the tree."}),"\n",(0,n.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "properties": {\n      "items": {\n        "type": "object",\n        "additionalProperties": false,\n        "patternProperties": {\n          "^\\\\/(?!\\\\.\\\\.)((?!\\\\/\\\\.\\\\.\\\\/).)+$": {\n            "type": "object",\n            "required": [\n              "mode"\n            ],\n            "properties": {\n              "mode": {\n                "type": "string",\n                "description": "Symbolic or numeric octal mode"\n              },\n              "recursive": {\n                "type": "boolean",\n                "description": "Change modes recursively",\n                "default": false\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>d,x:()=>i});var t=s(6540);const n={},r=t.createContext(n);function d(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);