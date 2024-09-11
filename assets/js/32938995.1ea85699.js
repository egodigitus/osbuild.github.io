"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[3084],{2554:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(5893),t=n(1151);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.config.meta.json"},i="org.osbuild.ostree.config",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.config",title:"org.osbuild.ostree.config",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ostree.config.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.config",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.config",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.config.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.config.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.ostree.commit",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.commit"},next:{title:"org.osbuild.ostree.deploy.container",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.deploy.container"}},l={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"orgosbuildostreeconfig",children:"org.osbuild.ostree.config"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Change OSTree configuration"})}),"\n",(0,s.jsx)(o.p,{children:"Change the configuration for an OSTree repository.\nCurrently only the following values are supported:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"sysroot.readonly"})}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"sysroot.bootloader"}),"\nSee ",(0,s.jsx)(o.code,{children:"ostree.repo-config(5)"})," for more information."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "repo"\n  ],\n  "properties": {\n    "repo": {\n      "description": "Location of the OSTree repo.",\n      "type": "string"\n    },\n    "config": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "OSTree configuration groups",\n      "properties": {\n        "sysroot": {\n          "type": "object",\n          "additionalProperties": false,\n          "description": "Options concerning the sysroot",\n          "properties": {\n            "bootloader": {\n              "description": "Configure the bootloader that OSTree uses (use \'none\' for BLS).",\n              "type": "string",\n              "enum": [\n                "none",\n                "auto",\n                "grub2",\n                "syslinux",\n                "uboot",\n                "zipl",\n                "aboot"\n              ]\n            },\n            "bootprefix": {\n              "description": "If set to true, the bootloader entries generated will include /boot as a prefix.",\n              "type": "boolean"\n            },\n            "readonly": {\n              "description": "Read only sysroot and boot",\n              "type": "boolean"\n            },\n            "bls-append-except-default": {\n              "description": "Set value for bls-append-except-default",\n              "type": "string"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>d,a:()=>i});var s=n(7294);const t={},r=s.createContext(t);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);