"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2992],{6265:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=o(5893),t=o(1151);const i={},r="Installation and configuration",c={id:"on-premises/installation/index",title:"Installation and configuration",description:"To get started with osbuild-composer on your local machine, you can install the CLI interface or the Web UI, which is part of Cockpit project.",source:"@site/docs/on-premises/02-installation/index.md",sourceDirName:"on-premises/02-installation",slug:"/on-premises/installation/",permalink:"/docs/on-premises/installation/",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/on-premises/02-installation/index.md",tags:[],version:"current",frontMatter:{},sidebar:"onPremises",previous:{title:"Releases",permalink:"/docs/on-premises/Overview/release-overview"},next:{title:"Container registry credentials",permalink:"/docs/on-premises/installation/container-auth"}},l={},a=[{value:"CLI interface",id:"cli-interface",level:2},{value:"Web UI",id:"web-ui",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation-and-configuration",children:"Installation and configuration"}),"\n",(0,s.jsxs)(n.p,{children:["To get started with ",(0,s.jsx)(n.code,{children:"osbuild-composer"})," on your local machine, you can install the CLI interface or the Web UI, which is part of Cockpit project."]}),"\n",(0,s.jsx)(n.h2,{id:"cli-interface",children:"CLI interface"}),"\n",(0,s.jsx)(n.p,{children:"For CLI only, run the following command to install necessary packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo dnf install osbuild-composer composer-cli\n"})}),"\n",(0,s.jsx)(n.p,{children:"To enable the service, run this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo systemctl enable --now osbuild-composer.socket\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Verify that the installation works by running ",(0,s.jsx)(n.code,{children:"composer-cli"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo composer-cli status show\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you prefer to run this command without sudo privileges, add your user to the ",(0,s.jsx)(n.code,{children:"weldr"})," group:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo usermod -a -G weldr <user>\n$ newgrp weldr\n"})}),"\n",(0,s.jsx)(n.h2,{id:"web-ui",children:"Web UI"}),"\n",(0,s.jsx)(n.p,{children:"If you prefer the Web UI interface, known as an Image Builder, install the following package:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo dnf install cockpit-composer\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and enable ",(0,s.jsx)(n.code,{children:"cockpit"})," and ",(0,s.jsx)(n.code,{children:"osbuild-composer"})," services:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo systemctl enable --now osbuild-composer.socket\n$ sudo systemctl enable --now cockpit.socket\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>r});var s=o(7294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);