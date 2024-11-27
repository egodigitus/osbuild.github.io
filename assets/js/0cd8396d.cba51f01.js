"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5870],{2842:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.aleph","title":"org.osbuild.ostree.aleph","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ostree.aleph.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.aleph","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.aleph","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.aleph.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.aleph.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.oscap.remediation","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.oscap.remediation"},"next":{"title":"org.osbuild.ostree.commit","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.commit"}}');var t=o(4848),r=o(8453);const i={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.aleph.meta.json"},l="org.osbuild.ostree.aleph",d={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"orgosbuildostreealeph",children:"org.osbuild.ostree.aleph"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create aleph version file for the deployment."})}),"\n",(0,t.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "deployment"\n    ],\n    "properties": {\n      "coreos_compat": {\n        "description": "boolean to allow for CoreOS aleph version backwards compatibility",\n        "type": "boolean"\n      },\n      "deployment": {\n        "additionalProperties": false,\n        "oneOf": [\n          {\n            "properties": {\n              "default": {\n                "enum": [\n                  false\n                ]\n              }\n            },\n            "required": [\n              "osname",\n              "ref"\n            ]\n          },\n          {\n            "properties": {\n              "default": {\n                "enum": [\n                  true\n                ]\n              }\n            },\n            "not": {\n              "anyOf": [\n                {\n                  "required": [\n                    "osname"\n                  ]\n                },\n                {\n                  "required": [\n                    "ref"\n                  ]\n                },\n                {\n                  "required": [\n                    "serial"\n                  ]\n                }\n              ]\n            }\n          }\n        ],\n        "properties": {\n          "osname": {\n            "description": "Name of the stateroot to be used in the deployment",\n            "type": "string"\n          },\n          "ref": {\n            "description": "OStree ref to create and use for deployment",\n            "type": "string"\n          },\n          "serial": {\n            "description": "The deployment serial (usually \'0\')",\n            "type": "number",\n            "default": 0\n          },\n          "default": {\n            "description": "Find and use the default ostree deployment",\n            "type": "boolean",\n            "default": false\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var s=o(6540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);