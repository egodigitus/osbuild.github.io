"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8786],{7001:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(5893),n=i(1151);const r={custom_edit_url:"https://github.com/osbuild/images/blob/main/README.md"},l="Images",o={id:"developer-guide/projects/images/index",title:"Images",description:"Project",source:"@site/docs/developer-guide/02-projects/images/index.md",sourceDirName:"developer-guide/02-projects/images",slug:"/developer-guide/projects/images/",permalink:"/docs/developer-guide/projects/images/",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/images/blob/main/README.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/images/blob/main/README.md"},sidebar:"developer",previous:{title:"Image Builder Frontend",permalink:"/docs/developer-guide/projects/image-builder-frontend/"},next:{title:"cmds",permalink:"/docs/developer-guide/projects/images/cmds"}},d={},c=[{value:"Project",id:"project",level:2},{value:"Principles",id:"principles",level:3},{value:"Contributing",id:"contributing",level:3},{value:"Repository:",id:"repository",level:3},{value:"Pull request gating",id:"pull-request-gating",level:3},{value:"License:",id:"license",level:3}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"images",children:"Images"})}),"\n",(0,t.jsx)(s.h2,{id:"project",children:"Project"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Website"}),": ",(0,t.jsx)(s.a,{href:"https://www.osbuild.org",children:"https://www.osbuild.org"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Bug Tracker"}),": ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/images/issues",children:"https://github.com/osbuild/images/issues"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Matrix (chat)"}),": ",(0,t.jsx)(s.a,{href:"https://matrix.to/#/#image-builder:fedoraproject.org?web-instance%5Belement.io%5D=chat.fedoraproject.org",children:"Image Builder channel on Fedora Chat"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Changelog"}),": ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/images/releases",children:"https://github.com/osbuild/images/releases"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"principles",children:"Principles"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"The image definitions API is internal and can therefore be broken. The blueprint API is the stable API."}),"\n",(0,t.jsx)(s.li,{children:"Nonsensical manifests should not compile (at the Golang level)."}),"\n",(0,t.jsx)(s.li,{children:"OSBuild units (stages, sources, inputs, mounts, devices) should be directly mapped into Go objects."}),"\n",(0,t.jsx)(s.li,{children:"Image definitions don\u2019t test distributions that are end-of-life. Respective code-paths should be dropped."}),"\n",(0,t.jsx)(s.li,{children:"Image definitions need to support the oldest supported target distribution."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsxs)(s.p,{children:["Please refer to the ",(0,t.jsx)(s.a,{href:"https://www.osbuild.org/docs/developer-guide/index",children:"developer guide"})," to learn about our workflow, code style and more."]}),"\n",(0,t.jsx)(s.p,{children:"The build-requirements for Fedora and rpm-based distributions are:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"gpgme-devel"}),", ",(0,t.jsx)(s.code,{children:"btrfs-progs-devel"}),", ",(0,t.jsx)(s.code,{children:"device-mapper-devel"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"repository",children:"Repository:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"web"}),":   ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/images",children:"https://github.com/osbuild/images"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"https"}),": ",(0,t.jsx)(s.code,{children:"https://github.com/osbuild/images.git"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"ssh"}),":   ",(0,t.jsx)(s.code,{children:"git@github.com:osbuild/images.git"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"pull-request-gating",children:"Pull request gating"}),"\n",(0,t.jsxs)(s.p,{children:["Each pull request against ",(0,t.jsx)(s.code,{children:"images"})," starts a series of automated\ntests. Tests run via GitHub Actions and GitLab CI. Each push to the pull request\nwill launch theses tests automatically."]}),"\n",(0,t.jsx)(s.h3,{id:"license",children:"License:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Apache-2.0"})}),"\n",(0,t.jsx)(s.li,{children:"See LICENSE file for details."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>l});var t=i(7294);const n={},r=t.createContext(n);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);