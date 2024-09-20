"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9993],{5319:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.unit.create.meta.json"},o="org.osbuild.systemd.unit.create",l={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.unit.create",title:"org.osbuild.systemd.unit.create",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.systemd.unit.create.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.unit.create",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.unit.create",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.unit.create.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.unit.create.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.systemd.preset",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.preset"},next:{title:"org.osbuild.systemd.unit",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.unit"}},d={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"orgosbuildsystemdunitcreate",children:"org.osbuild.systemd.unit.create"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Create a Systemd unit file"})}),"\n",(0,i.jsxs)(e.p,{children:["This stage allows to create Systemd unit files. The ",(0,i.jsx)(e.code,{children:"filename"})," property\nspecifies the, '.service' or '.mount' file to be added. These names are\nvalidated using the, same rules as specified by systemd.unit(5) and they\nmust contain the, '.service' or '.mount' suffix (other types of unit files\nare not supported). 'unit-type' determines if the unit file is created at\n'global' (user) or 'system' paths,'unit-path' will determine the systemd\nunit load path."]}),"\n",(0,i.jsx)(e.p,{children:"The Unit configuration can currently specify the following subset\nof options:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["'Unit' section","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"'Description' - string"}),"\n",(0,i.jsx)(e.li,{children:"'ConditionPathExists' - string"}),"\n",(0,i.jsx)(e.li,{children:"'ConditionPathIsDirectory' - string"}),"\n",(0,i.jsx)(e.li,{children:"'DefaultDependencies' - bool"}),"\n",(0,i.jsx)(e.li,{children:"'Requires' - [strings]"}),"\n",(0,i.jsx)(e.li,{children:"'Wants' - [strings]"}),"\n",(0,i.jsx)(e.li,{children:"'After' - [strings]"}),"\n",(0,i.jsx)(e.li,{children:"'Before' - [strings]"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["'Service' section","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"'Type' - string"}),"\n",(0,i.jsx)(e.li,{children:"'RemainAfterExit' - bool"}),"\n",(0,i.jsx)(e.li,{children:"'ExecStartPre' - [string]"}),"\n",(0,i.jsx)(e.li,{children:"'ExecStopPost' - [string]"}),"\n",(0,i.jsx)(e.li,{children:"'ExecStart' - [string]"}),"\n",(0,i.jsx)(e.li,{children:"'Environment' - [object]"}),"\n",(0,i.jsx)(e.li,{children:"'EnvironmentFile' - [string]"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["'Mount' section","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"'What' - string"}),"\n",(0,i.jsx)(e.li,{children:"'Where' - string"}),"\n",(0,i.jsx)(e.li,{children:"'Type' - string"}),"\n",(0,i.jsx)(e.li,{children:"'Options' - string"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["'Socket' section","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"'ListenStream' - string"}),"\n",(0,i.jsx)(e.li,{children:"'ListenDatagram' - string"}),"\n",(0,i.jsx)(e.li,{children:"'ListenSequentialPacket' - string"}),"\n",(0,i.jsx)(e.li,{children:"'ListenFIFO' - string"}),"\n",(0,i.jsx)(e.li,{children:"'SocketUser' - string"}),"\n",(0,i.jsx)(e.li,{children:"'SocketGroup' - string"}),"\n",(0,i.jsx)(e.li,{children:"'SocketMode' - string"}),"\n",(0,i.jsx)(e.li,{children:"'DirectoryMode' - string"}),"\n",(0,i.jsx)(e.li,{children:"'Accept' - bool"}),"\n",(0,i.jsx)(e.li,{children:"'Service' - string"}),"\n",(0,i.jsx)(e.li,{children:"'RuntimeDirectory' - string"}),"\n",(0,i.jsx)(e.li,{children:"'RemoveOnStop' - bool"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["'Install' section","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"'WantedBy' - [string]"}),"\n",(0,i.jsx)(e.li,{children:"'RequiredBy' - [string]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "filename",\n    "config"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "pattern": "^[\\\\w:.\\\\\\\\-]+[@]{0,1}[\\\\w:.\\\\\\\\-]*\\\\.(service|mount|socket)$"\n    },\n    "unit-type": {\n      "type": "string",\n      "enum": [\n        "system",\n        "global"\n      ],\n      "default": "system",\n      "description": "Selects between systemd system or global unit to add dropin"\n    },\n    "unit-path": {\n      "type": "string",\n      "enum": [\n        "usr",\n        "etc"\n      ],\n      "default": "usr",\n      "description": "Define the system load path"\n    },\n    "config": {\n      "additionalProperties": false,\n      "type": "object",\n      "oneOf": [\n        {\n          "required": [\n            "Unit",\n            "Service",\n            "Install"\n          ],\n          "not": {\n            "anyOf": [\n              {\n                "required": [\n                  "Mount"\n                ]\n              },\n              {\n                "required": [\n                  "Socket"\n                ]\n              }\n            ]\n          }\n        },\n        {\n          "required": [\n            "Socket"\n          ],\n          "not": {\n            "anyOf": [\n              {\n                "required": [\n                  "Mount"\n                ]\n              },\n              {\n                "required": [\n                  "Service"\n                ]\n              }\n            ]\n          }\n        },\n        {\n          "required": [\n            "Mount"\n          ],\n          "not": {\n            "anyOf": [\n              {\n                "required": [\n                  "Service"\n                ]\n              },\n              {\n                "required": [\n                  "Socket"\n                ]\n              }\n            ]\n          }\n        }\n      ],\n      "description": "Configuration for a \'.service\' unit.",\n      "properties": {\n        "Unit": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Unit\' configuration section of a unit file.",\n          "properties": {\n            "Description": {\n              "type": "string"\n            },\n            "Wants": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "After": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "Before": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "Requires": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "ConditionPathExists": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "ConditionPathIsDirectory": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "DefaultDependencies": {\n              "type": "boolean"\n            }\n          }\n        },\n        "Service": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Service\' configuration section of a unit file.",\n          "properties": {\n            "Type": {\n              "type": "string",\n              "enum": [\n                "simple",\n                "exec",\n                "forking",\n                "oneshot",\n                "dbus",\n                "notify",\n                "notify-reload",\n                "idle"\n              ]\n            },\n            "RemainAfterExit": {\n              "type": "boolean"\n            },\n            "ExecStartPre": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "ExecStopPost": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "ExecStart": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "Environment": {\n              "type": "array",\n              "description": "Sets environment variables for executed process.",\n              "items": {\n                "type": "object",\n                "description": "Sets environment variables for executed process.",\n                "additionalProperties": false,\n                "properties": {\n                  "key": {\n                    "type": "string",\n                    "pattern": "^[A-Za-z_][A-Za-z0-9_]*"\n                  },\n                  "value": {\n                    "type": "string"\n                  }\n                }\n              }\n            },\n            "EnvironmentFile": {\n              "type": "array",\n              "description": "Path to file that contains environment variables to set for the process.",\n              "items": {\n                "type": "string"\n              }\n            }\n          }\n        },\n        "Mount": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Mount\' configuration section of a unit file.",\n          "required": [\n            "What"\n          ],\n          "properties": {\n            "What": {\n              "description": "Absolute path to device node",\n              "type": "string"\n            },\n            "Where": {\n              "description": "Absolute path for a file or directory for the mountpoint",\n              "type": "string"\n            },\n            "Type": {\n              "descriptions": "File system type",\n              "type": "string"\n            },\n            "Options": {\n              "descriptions": "Mount options to use when mounting",\n              "type": "string"\n            }\n          }\n        },\n        "Socket": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Socket\' configuration section of a unit file.",\n          "properties": {\n            "Service": {\n              "description": "",\n              "type": "string"\n            },\n            "ListenStream": {\n              "description": "",\n              "type": "string"\n            },\n            "ListenDatagram": {\n              "description": "",\n              "type": "string"\n            },\n            "ListenSequentialPacket": {\n              "description": "",\n              "type": "string"\n            },\n            "ListenFifo": {\n              "description": "",\n              "type": "string"\n            },\n            "SocketUser": {\n              "description": "",\n              "type": "string"\n            },\n            "SocketGroup": {\n              "description": "",\n              "type": "string"\n            },\n            "SocketMode": {\n              "description": "",\n              "type": "string"\n            },\n            "DirectoryMode": {\n              "description": "",\n              "type": "string"\n            },\n            "Accept": {\n              "description": "",\n              "type": "boolean"\n            },\n            "RuntimeDirectory": {\n              "description": "",\n              "type": "string"\n            },\n            "RemoveOnStop": {\n              "description": "",\n              "type": "boolean"\n            }\n          }\n        },\n        "Install": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Install\' configuration section of a unit file.",\n          "properties": {\n            "WantedBy": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "RequiredBy": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:"{}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);