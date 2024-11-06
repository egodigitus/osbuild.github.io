"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1832],{88:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.deploy.container","title":"org.osbuild.ostree.deploy.container","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ostree.deploy.container.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.deploy.container","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.deploy.container","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.deploy.container.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.deploy.container.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.ostree.config","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.config"},"next":{"title":"org.osbuild.ostree.deploy","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.deploy"}}');var s=n(4848),r=n(8453);const i={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.deploy.container.meta.json"},d="org.osbuild.ostree.deploy.container",a={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"orgosbuildostreedeploycontainer",children:"org.osbuild.ostree.deploy.container"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Deploy an OStree commit"})}),"\n",(0,s.jsx)(o.p,{children:"Create an OSTree deployment[1] for a given container image input"}),"\n",(0,s.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:"{}\n"})}),"\n",(0,s.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "osname",\n      "target_imgref"\n    ],\n    "properties": {\n      "mounts": {\n        "description": "Mount points of the final file system",\n        "type": "array",\n        "items": {\n          "description": "Description of one mount point",\n          "type": "string"\n        }\n      },\n      "osname": {\n        "description": "Name of the stateroot to be used in the deployment",\n        "type": "string"\n      },\n      "kernel_opts": {\n        "description": "Additional kernel command line options",\n        "type": "array",\n        "items": {\n          "description": "A single kernel command line option",\n          "type": "string"\n        }\n      },\n      "target_imgref": {\n        "description": "imageref used as the source of truth for updates",\n        "type": "string",\n        "pattern": "^(ostree-remote-registry|ostree-image-signed|ostree-unverified-registry):.*$",\n        "examples": [\n          "ostree-remote-registry:fedora:quay.io/fedora/fedora-coreos:stable, ostree-image-signed:quay.io/fedora/fedora-coreos:stable, ostree-unverified-registry:quay.io/fedora/fedora-coreos:stable"\n        ]\n      },\n      "rootfs": {\n        "description": "Identifier to locate the root file system",\n        "type": "object",\n        "oneOf": [\n          {\n            "required": [\n              "uuid"\n            ]\n          },\n          {\n            "required": [\n              "label"\n            ]\n          }\n        ],\n        "properties": {\n          "label": {\n            "description": "Identify the root file system by label",\n            "type": "string"\n          },\n          "uuid": {\n            "description": "Identify the root file system by UUID",\n            "type": "string"\n          }\n        }\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "images"\n    ],\n    "properties": {\n      "images": {\n        "type": "object",\n        "description": "Container Image to deploy",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>d});var t=n(6540);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);