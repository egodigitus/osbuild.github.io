"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9392],{1060:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=o(5893),s=o(1151);const i={},r="org.osbuild.bootiso.mono",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.bootiso.mono",title:"org.osbuild.bootiso.mono",description:"Assemble a file system tree for a bootable iso",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.bootiso.mono.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.bootiso.mono",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.bootiso.mono",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.bootiso.mono.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.bootc.install.config",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.bootc.install.config"},next:{title:"org.osbuild.bootupd.gen-metadata",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.bootupd.gen-metadata"}},l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"orgosbuildbootisomono",children:"org.osbuild.bootiso.mono"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Assemble a file system tree for a bootable iso"})}),"\n",(0,t.jsxs)(n.p,{children:["This stage prepares a file system tree for a bootable ISO, like the\nAnaconda installer. It follows the convention used by Lorax to\ncreate the boot isos: It takes an input ",(0,t.jsx)(n.code,{children:"rootfs"}),", which will serve\nas the root file system. This is copied into a file with a ",(0,t.jsx)(n.code,{children:"ext4"}),"\nfile system which in turn will be made into a squashfs file system.\nOptions for controlling the root file-system creation can be given\nvia ",(0,t.jsx)(n.code,{children:"rootfs"}),", like it size and the compression to be used.\nThe boot loader is configured via the ",(0,t.jsx)(n.code,{children:"isolinux"})," and ",(0,t.jsx)(n.code,{children:"efi"})," options.\nWhich combination makes sense depends on the targeted platform and\narchitecture.\nThe kernel and initrd are taken from the tree given via the ",(0,t.jsx)(n.code,{children:"kernel"}),"\ninput, or if that was not specified, from ",(0,t.jsx)(n.code,{children:"rootfs"}),". In either case\nit will look for the specified kernel in the ",(0,t.jsx)(n.code,{children:"/boot"})," directory.\nAdditionally kernel command line flags can passed via ",(0,t.jsx)(n.code,{children:"kernel_opts"}),".\nThis stage has the ",(0,t.jsx)(n.code,{children:".mono"})," suffix to indicate that is a monolithic\nstage that could, and in the future will be, broken up into smaller\npieces."]}),"\n",(0,t.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "product",\n      "kernel",\n      "isolabel"\n    ],\n    "properties": {\n      "product": {\n        "type": "object",\n        "additionalProperties": false,\n        "required": [\n          "name",\n          "version"\n        ],\n        "properties": {\n          "name": {\n            "type": "string"\n          },\n          "version": {\n            "type": "string"\n          }\n        }\n      },\n      "kernel": {\n        "type": "string"\n      },\n      "isolabel": {\n        "type": "string"\n      },\n      "efi": {\n        "type": "object",\n        "additionalProperties": false,\n        "required": [\n          "architectures",\n          "vendor"\n        ],\n        "properties": {\n          "architectures": {\n            "type": "array",\n            "items": {\n              "type": "string"\n            }\n          },\n          "vendor": {\n            "type": "string"\n          }\n        }\n      },\n      "isolinux": {\n        "type": "object",\n        "additionalProperties": false,\n        "required": [\n          "enabled"\n        ],\n        "properties": {\n          "enabled": {\n            "type": "boolean"\n          },\n          "debug": {\n            "type": "boolean"\n          }\n        }\n      },\n      "kernel_opts": {\n        "description": "Additional kernel boot options",\n        "type": "string"\n      },\n      "templates": {\n        "type": "string",\n        "default": "99-generic"\n      },\n      "rootfs": {\n        "type": "object",\n        "additionalProperties": false,\n        "properties": {\n          "compression": {\n            "type": "object",\n            "additionalProperties": false,\n            "required": [\n              "method"\n            ],\n            "properties": {\n              "method": {\n                "enum": [\n                  "gzip",\n                  "xz",\n                  "lz4"\n                ]\n              },\n              "options": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                  "bcj": {\n                    "enum": [\n                      "x86",\n                      "arm",\n                      "armthumb",\n                      "powerpc",\n                      "sparc",\n                      "ia64"\n                    ]\n                  }\n                }\n              }\n            }\n          },\n          "size": {\n            "type": "integer",\n            "description": "size in MB",\n            "default": 3072\n          }\n        }\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "rootfs"\n    ],\n    "properties": {\n      "rootfs": {\n        "type": "object",\n        "additionalProperties": true\n      },\n      "kernel": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>r});var t=o(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);