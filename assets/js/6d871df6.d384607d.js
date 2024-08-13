"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2698],{8394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(5893),o=t(1151);const r={},s="org.osbuild.oci-archive",a={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.oci-archive",title:"org.osbuild.oci-archive",description:"Assemble an OCI image archive",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.oci-archive.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.oci-archive",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.oci-archive",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.oci-archive.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.noop",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.noop"},next:{title:"org.osbuild.oscap.autotailor",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.oscap.autotailor"}},c={},d=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"orgosbuildoci-archive",children:"org.osbuild.oci-archive"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Assemble an OCI image archive"})}),"\n",(0,i.jsxs)(n.p,{children:["Assemble an Open Container Initiative[1] image[2] archive, i.e. a\ntarball whose contents is in the OCI image layout.\nThe content of the container will consist of the base layer provided\nvia the ",(0,i.jsx)(n.code,{children:"base"})," layer. On top of that further inputs provided via the\n",(0,i.jsx)(n.code,{children:"layer.X"})," inputs that are sorted in ascending order.\nCurrently the only required options are ",(0,i.jsx)(n.code,{children:"filename"})," and ",(0,i.jsx)(n.code,{children:"architecture"}),".\nThe execution parameters for the image, which then should form the base\nfor the container, can be given via ",(0,i.jsx)(n.code,{children:"config"}),". They have the same format\nas the ",(0,i.jsx)(n.code,{children:"config"}),' option for the "OCI Image Configuration" (see [2]),\nexcept those that map to the "Go type map[string]struct{}", which are\nrepresented as array of strings.\nManifest annotations can be included via the ',(0,i.jsx)(n.code,{children:"annotation"})," options. Any\n",(0,i.jsx)(n.code,{children:"key"}),", ",(0,i.jsx)(n.code,{children:"value"})," pair is allowed, with the exception of the pre-defined\n",(0,i.jsx)(n.code,{children:"org.osbuild"})," and ",(0,i.jsx)(n.code,{children:"org.opencontainer"})," namespaces.\nSpecific annotations can be used to indicate that a container contains\nan OSTree commit via the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"org.osbuild.layer"}),": The layer containing the OSTree repository"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"org.osbuild.repo"}),": Path inside the container to the repository"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"org.osbuild.ref"}),": OSTree reference of the commit inside the repo\nThe ",(0,i.jsx)(n.code,{children:"org.osbuild.layer"}),' value can either bey a index (starting at 0),\nor a digest in the form of <algorithm>:<checksum>.\nThe final resulting tarball, aka a "oci-archive", can be imported via\npodman[3] with ',(0,i.jsx)(n.code,{children:"podman pull oci-archive:\\<archive\\>"}),".\n[1] ",(0,i.jsx)(n.a,{href:"https://www.opencontainers.org/",children:"https://www.opencontainers.org/"}),"\n[2] ",(0,i.jsx)(n.a,{href:"https://github.com/opencontainers/image-spec/",children:"https://github.com/opencontainers/image-spec/"}),"\n[3] ",(0,i.jsx)(n.a,{href:"https://podman.io/",children:"https://podman.io/"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "architecture",\n      "filename"\n    ],\n    "properties": {\n      "architecture": {\n        "description": "The CPU architecture of the image",\n        "type": "string"\n      },\n      "filename": {\n        "description": "Resulting image filename",\n        "type": "string"\n      },\n      "config": {\n        "description": "The execution parameters",\n        "type": "object",\n        "additionalProperties": false,\n        "properties": {\n          "Cmd": {\n            "type": "array",\n            "default": [\n              "sh"\n            ],\n            "items": {\n              "type": "string"\n            }\n          },\n          "Entrypoint": {\n            "type": "array",\n            "items": {\n              "type": "string"\n            }\n          },\n          "Env": {\n            "type": "array",\n            "default": [\n              "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"\n            ],\n            "items": {\n              "type": "string"\n            }\n          },\n          "ExposedPorts": {\n            "type": "array",\n            "items": {\n              "type": "string"\n            }\n          },\n          "User": {\n            "type": "string"\n          },\n          "Labels": {\n            "type": "object",\n            "additionalProperties": true\n          },\n          "StopSiganl": {\n            "type": "string"\n          },\n          "Volumes": {\n            "type": "array",\n            "items": {\n              "type": "string"\n            }\n          },\n          "WorkingDir": {\n            "type": "string"\n          }\n        }\n      },\n      "annotations": {\n        "type": "object",\n        "properties": {\n          "org.osbuild.ostree.layer": {\n            "description": "The layer that contains the OSTree repository",\n            "type": "string"\n          },\n          "org.osbuild.ostree.repo": {\n            "description": "Path to the OSTree repository inside the layer",\n            "type": "string"\n          },\n          "org.osbuild.ostree.ref": {\n            "description": "Reference of the OSTree commit in the repository",\n            "type": "string"\n          }\n        },\n        "additionalProperties": false,\n        "patternProperties": {\n          "^(?!org.osbuild|org.opencontainer).+": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "base"\n    ],\n    "properties": {\n      "base": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    },\n    "patternProperties": {\n      "layer\\\\.[1-9]\\\\d*": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);