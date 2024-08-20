"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6741],{3480:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>u});var r=n(5893),o=n(1151);const t={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.users.meta.json"},i="org.osbuild.users",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.users",title:"org.osbuild.users",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.users.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.users",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.users",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.users.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.users.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.update-crypto-policies",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.update-crypto-policies"},next:{title:"org.osbuild.vagrant",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.vagrant"}},a={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"orgosbuildusers",children:"org.osbuild.users"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Add or modify user accounts"})}),"\n",(0,r.jsxs)(s.p,{children:["WARNING: This stage uses chroot() to run the ",(0,r.jsx)(s.code,{children:"useradd"})," or ",(0,r.jsx)(s.code,{children:"usermod"})," binary\nfrom inside the tree. This will fail for cross-arch builds and may fail or\nmisbehave if the ",(0,r.jsx)(s.code,{children:"usermod"}),"/",(0,r.jsx)(s.code,{children:"useradd"})," binary inside the tree makes incorrect\nassumptions about its host system.\nWhen an existing user is modified the ",(0,r.jsx)(s.code,{children:"mkhomedir_helper(8)"})," program is run\ninside a chroot to ensure that a home dir exists for the user, as ",(0,r.jsx)(s.code,{children:"usermod"}),"\ndoes not create it (it will move existing dirs though)."]}),"\n",(0,r.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "properties": {\n      "users": {\n        "additionalProperties": false,\n        "type": "object",\n        "description": "Keys are usernames, values are objects giving user info.",\n        "patternProperties": {\n          "^[A-Za-z0-9_.][A-Za-z0-9_.-]{0,31}$": {\n            "type": "object",\n            "properties": {\n              "uid": {\n                "description": "User UID",\n                "type": "number"\n              },\n              "gid": {\n                "description": "User GID",\n                "type": "number"\n              },\n              "groups": {\n                "description": "Array of group names for this user",\n                "type": "array",\n                "items": {\n                  "type": "string"\n                }\n              },\n              "description": {\n                "description": "User account description (or full name)",\n                "type": "string"\n              },\n              "home": {\n                "description": "Path to user\'s home directory",\n                "type": "string"\n              },\n              "shell": {\n                "description": "User\'s login shell",\n                "type": "string"\n              },\n              "password": {\n                "description": "User\'s encrypted password, as returned by crypt(3)",\n                "type": "string"\n              },\n              "key": {\n                "description": "SSH Public Key to add to ~/.ssh/authorized_keys",\n                "type": "string"\n              },\n              "keys": {\n                "description": "Array of SSH Public Keys to add to ~/.ssh/authorized_keys",\n                "type": "array",\n                "items": {\n                  "type": "string"\n                }\n              },\n              "expiredate": {\n                "description": "The date on which the user account will be disabled. This date is represented as a number of days since January 1st, 1970.",\n                "type": "integer"\n              },\n              "force_password_reset": {\n                "description": "Force this user to change their password on first login",\n                "type": "boolean"\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "devices": {\n    "type": "object",\n    "additionalProperties": true\n  },\n  "mounts": {\n    "type": "array"\n  }\n}\n'})})]})}function l(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>i});var r=n(7294);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);