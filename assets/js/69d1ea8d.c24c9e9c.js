"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1318],{2680:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(5893),o=t(1151);const r={},s="org.osbuild.grub2.inst",a={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.inst",title:"org.osbuild.grub2.inst",description:"Install the grub2 boot loader for non-UEFI systems or hybrid boot",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.grub2.inst.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.inst",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.inst",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.grub2.inst.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.groups",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.groups"},next:{title:"org.osbuild.grub2.iso",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.iso"}},d={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"orgosbuildgrub2inst",children:"org.osbuild.grub2.inst"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install the grub2 boot loader for non-UEFI systems or hybrid boot"})}),"\n",(0,i.jsx)(n.p,{children:"This stage can be used to generate a grub2 core image and install\nit to the correct location to enable booting of non-UEFI systems,\ni.e. x86 legacy and PPC64LE (Open Firmware).\nOn x86, the core image can be installed into the MBR gap or to a\ndedicated BIOS boot partition when the partition label is GTP. On\nppc64le with Open Firmware a dedicated 'PrEP partition' is used.\nx86 / MBR gap:\nFor historic and performance reasons the first partition\nis aligned to a specific sector number (used to be 64,\nnow it is 2048), which leaves a gap between it and the MBR,\nwhere the core image can be embedded in\nx86 / BIOS boot:\nA dedicated partition with a specific GUID[1] is used.\nppc64le / Open Firmware:\nA dedicated partition with a specified GUID[2] is used.\nOn ppc64le with Open Firmware a special partition called\n'PrEP partition' is used the store the grub2 core; the\nfirmware looks for this partition and directly loads and\nexecutes the core form it.\nOn x86, a \"boot image\", aka grub stage 1, is installed into the\nmaster boot record (MBR) of the partition (even in the case the\npartition layout is GPT). It main purpose is to load the second\nstage (core image). Therefore the location of the core image is\npatched into the boot image.\nOn ppc64le, the firmware itself directly loads the complete core\nimage and transfers control to it.\n[1] 21686148-6449-6E6F-744E-656564454649\n[2] 9E1A2D38-C612-4316-AA26-8B49521E5A8B"}),"\n",(0,i.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "definitions": {\n    "core-mkimage": {\n      "type": "object",\n      "description": "Generate the core image via grub-mkimage",\n      "additionalProperties": false,\n      "required": [\n        "type",\n        "partlabel",\n        "filesystem"\n      ],\n      "properties": {\n        "type": {\n          "enum": [\n            "mkimage"\n          ]\n        },\n        "partlabel": {\n          "type": "string",\n          "enum": [\n            "gpt",\n            "dos"\n          ]\n        },\n        "filesystem": {\n          "type": "string",\n          "enum": [\n            "ext4",\n            "xfs",\n            "btrfs"\n          ]\n        },\n        "binary": {\n          "description": "grub-mkimage binary name",\n          "type": "string",\n          "default": "grub2-mkimage"\n        }\n      }\n    },\n    "prefix-partition": {\n      "type": "object",\n      "description": "Grub2 config on a specific partition, e.g. (,gpt3)/boot",\n      "additionalProperties": false,\n      "required": [\n        "type",\n        "partlabel",\n        "number",\n        "path"\n      ],\n      "properties": {\n        "type": {\n          "enum": [\n            "partition"\n          ]\n        },\n        "partlabel": {\n          "type": "string",\n          "enum": [\n            "gpt",\n            "dos"\n          ]\n        },\n        "number": {\n          "description": "The partition number, starting at zero",\n          "type": "number"\n        },\n        "path": {\n          "description": "location of grub config inside the partition",\n          "type": "string",\n          "pattern": "/.*"\n        }\n      }\n    }\n  },\n  "additionalProperties": false,\n  "required": [\n    "filename",\n    "platform",\n    "location",\n    "core",\n    "prefix"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "description": "filename of the disk image"\n    },\n    "platform": {\n      "type": "string",\n      "description": "Platform of the target system"\n    },\n    "location": {\n      "type": "integer",\n      "description": "Location of the stage 2 (in sectors)"\n    },\n    "core": {\n      "description": "How to obtain the GRUB core image",\n      "oneOf": [\n        {\n          "$ref": "#/definitions/core-mkimage"\n        }\n      ]\n    },\n    "prefix": {\n      "description": "location of grub config",\n      "oneOf": [\n        {\n          "$ref": "#/definitions/prefix-partition"\n        }\n      ]\n    },\n    "sector-size": {\n      "type": "number",\n      "description": "Sector size (in bytes)",\n      "default": 512\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);