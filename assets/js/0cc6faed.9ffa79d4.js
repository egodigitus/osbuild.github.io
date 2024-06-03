"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[3768],{210:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(5893),o=i(1151);const s={},r="org.osbuild.pam.limits.conf",a={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.pam.limits.conf",title:"org.osbuild.pam.limits.conf",description:"Create pam_limits module configuration.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.pam.limits.conf.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.pam.limits.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.pam.limits.conf",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.pam.limits.conf.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.pacman.mirrorlist.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.pacman.mirrorlist.conf"},next:{title:"org.osbuild.parted",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.parted"}},l={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"orgosbuildpamlimitsconf",children:"org.osbuild.pam.limits.conf"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create pam_limits module configuration."})}),"\n",(0,t.jsx)(n.p,{children:"This stage creates a pam_limits module configuration file with the given name in\n/etc/security/limits.d. Provided list of configuration directives is written\nas separate lines into the configuration file. At least one configuration\ndirective must be specified."}),"\n",(0,t.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "definitions": {\n    "configuration": {\n      "type": "object",\n      "additionalProperties": false,\n      "required": [\n        "domain",\n        "type",\n        "item",\n        "value"\n      ],\n      "description": "pam_limits module configuration directive representing one line in the configuration.",\n      "properties": {\n        "domain": {\n          "type": "string",\n          "description": "Domain to which the limit applies. E.g. username, groupname, etc."\n        },\n        "type": {\n          "type": "string",\n          "description": "Type of the limit.",\n          "enum": [\n            "hard",\n            "soft",\n            "-"\n          ]\n        },\n        "item": {\n          "type": "string",\n          "description": "The resource type, which is being limited.",\n          "enum": [\n            "core",\n            "data",\n            "fsize",\n            "memlock",\n            "nofile",\n            "rss",\n            "stack",\n            "cpu",\n            "nproc",\n            "as",\n            "maxlogins",\n            "maxsyslogins",\n            "nonewprivs",\n            "priority",\n            "locks",\n            "sigpending",\n            "msgqueue",\n            "nice",\n            "rtprio"\n          ]\n        },\n        "value": {\n          "oneOf": [\n            {\n              "type": "string",\n              "enum": [\n                "unlimited",\n                "infinity"\n              ]\n            },\n            {\n              "type": "integer"\n            }\n          ],\n          "description": "The limit value."\n        }\n      }\n    }\n  },\n  "additionalProperties": false,\n  "required": [\n    "filename",\n    "config"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "description": "Name of the pam_limits module configuration file to create.",\n      "pattern": "^[\\\\w.-]{1,250}\\\\.conf$"\n    },\n    "config": {\n      "additionalProperties": false,\n      "type": "array",\n      "description": "List of configuration directives written into the configuration file.",\n      "minItems": 1,\n      "items": {\n        "$ref": "#/definitions/configuration"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);