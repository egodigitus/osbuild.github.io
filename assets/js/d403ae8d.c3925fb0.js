"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2710],{7720:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.rhsm","title":"org.osbuild.rhsm","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.rhsm.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.rhsm","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.rhsm","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.rhsm.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.rhsm.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.rhsm.facts","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.rhsm.facts"},"next":{"title":"org.osbuild.rpm-ostree","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.rpm-ostree"}}');var o=s(4848),t=s(8453);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.rhsm.meta.json"},a="org.osbuild.rhsm",d={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"orgosbuildrhsm",children:"org.osbuild.rhsm"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Configure Red Hat Subscription Management (RHSM)"})}),"\n",(0,o.jsx)(n.p,{children:"The stage currently supports configuring the enablement status of\nRHSM DNF plugins, and subset of RHSM configuration options.\nIn case the stage is configured to enable/disable specific\nDNF plugins, it expects that the appropriate configuration files\nexist in the filesystem tree. Non-existence of the configuration\nfiles will make the stage fail.\nIn case the stage is configured to change subscription-manager configuration,\nit expects that the /etc/rhsm/rhsm.conf file exists. Non-existence of the\nconfiguration file will make the stage fail. The stage uses iniparse module\nto change the configuration directly, because this does not require running\nsubscription-manager command in a chroot. The only benefit of running the\nsubscription-manager command would be in case of removing configuration options,\nbecause it may set default values if they exist for the removed option.\nSince the stage does not support removing configuration options, using iniparse\ndirectly is considered OK. In addition, iniparse module is used also by\nsubscription-manager to modify its configuration file."}),"\n",(0,o.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "definitions": {\n    "plugins": {\n      "additionalProperties": false,\n      "type": "object",\n      "description": "RHSM DNF plugins configuration",\n      "properties": {\n        "product-id": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'product-id\' DNF/YUM plugin configuration",\n          "properties": {\n            "enabled": {\n              "type": "boolean",\n              "description": "enablement state of the plugin"\n            }\n          }\n        },\n        "subscription-manager": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'subscription-manager\' DNF/YUM plugin configuration",\n          "properties": {\n            "enabled": {\n              "type": "boolean",\n              "description": "enablement state of the plugin"\n            }\n          }\n        }\n      }\n    }\n  },\n  "additionalProperties": false,\n  "properties": {\n    "dnf-plugins": {\n      "$ref": "#/definitions/plugins"\n    },\n    "yum-plugins": {\n      "$ref": "#/definitions/plugins"\n    },\n    "subscription-manager": {\n      "additionalProperties": false,\n      "type": "object",\n      "description": "Subscription-manager configuration",\n      "properties": {\n        "rhsm": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "RHSM configuration section",\n          "properties": {\n            "manage_repos": {\n              "type": "boolean",\n              "description": "Whether subscription-manager should manage DNF repos file"\n            }\n          }\n        },\n        "rhsmcertd": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "RHSMCERTD configuration section",\n          "properties": {\n            "auto_registration": {\n              "type": "boolean",\n              "description": "Automatic system registration"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);