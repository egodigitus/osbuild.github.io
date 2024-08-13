"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1066],{636:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=s(5893),t=s(1151);const i={},r="org.osbuild.keymap",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.keymap",title:"org.osbuild.keymap",description:"Set image's default keymap for vconsole and X11 keyboard.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.keymap.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.keymap",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.keymap",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.keymap.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.kernel-cmdline",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.kernel-cmdline"},next:{title:"org.osbuild.kickstart",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.kickstart"}},a={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"orgosbuildkeymap",children:"org.osbuild.keymap"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Set image's default keymap for vconsole and X11 keyboard."})}),"\n",(0,o.jsxs)(n.p,{children:["The 'keymap' option sets the default console keyboard layout for vconsole.\nIts value is a keymap, such as 'us' or 'de-latin1'.\nRemoves any existing /etc/vconsole.conf, then runs ",(0,o.jsx)(n.code,{children:"systemd-firstboot"})," with the\n",(0,o.jsx)(n.code,{children:"--keymap"})," option, which sets KEYMAP in /etc/vconsole.conf. If ",(0,o.jsx)(n.code,{children:"font"})," is given\nwill additionally set the FONT attribute.\nThe 'x11-keymap' option configures the X11 keyboard settings. The value of\nthe option is a dictionary with keys representing settings which can be\nconfigured. Currently, only the 'layouts' setting can be configured. Its value\nis a list of strings, representing the specific layouts, which should\nbe configured for the X11 keyboard.\nValid keymaps are generally found in /lib/kbd/keymaps."]}),"\n",(0,o.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "keymap"\n  ],\n  "properties": {\n    "keymap": {\n      "type": "string",\n      "description": "Name of keymap to use for vconsole."\n    },\n    "x11-keymap": {\n      "additionalProperties": false,\n      "type": "object",\n      "description": "Configure X11 keyboard.",\n      "required": [\n        "layouts"\n      ],\n      "properties": {\n        "layouts": {\n          "type": "array",\n          "description": "List of keyboard mappings to configure.",\n          "minItems": 1,\n          "items": {\n            "type": "string",\n            "minLength": 2\n          }\n        }\n      }\n    },\n    "font": {\n      "type": "string",\n      "description": "Configures the console font."\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var o=s(7294);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);