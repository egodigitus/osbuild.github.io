"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4571],{7154:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var t=i(5893),d=i(1151);const n={},r="OpenSCAP Remediation",o={id:"user-guide/oscap-remediation",title:"OpenSCAP Remediation",description:"osbuild-composer provides the ability to build security hardened images using the [OpenSCAP] tool.",source:"@site/docs/user-guide/03-oscap-remediation.md",sourceDirName:"user-guide",slug:"/user-guide/oscap-remediation",permalink:"/docs/user-guide/oscap-remediation",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/user-guide/03-oscap-remediation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"userguide",previous:{title:"Third-party Repositories",permalink:"/docs/user-guide/repository-customizations"},next:{title:"Uploading cloud images",permalink:"/docs/user-guide/uploading-cloud-images/"}},l={},c=[{value:"OpenSCAP",id:"openscap",level:2},{value:"Build-time Remediation",id:"build-time-remediation",level:2},{value:"OpenSCAP example",id:"openscap-example",level:2},{value:"Supported profiles",id:"supported-profiles",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"openscap-remediation",children:"OpenSCAP Remediation"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"osbuild-composer"})," provides the ability to build security hardened images using the ",(0,t.jsx)(s.a,{href:"https://github.com/OpenSCAP/openscap/blob/maint-1.3/docs/manual/manual.adoc",children:"OpenSCAP"})," tool.\nThis feature is available for ",(0,t.jsx)(s.code,{children:"RHEL 8.7"})," (& above) and ",(0,t.jsx)(s.code,{children:"RHEL 9.1"})," (& above)."]}),"\n",(0,t.jsx)(s.h2,{id:"openscap",children:"OpenSCAP"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"OpenSCAP"})," tool enables users to scan images for vulnerabilities and then remediate the non-compliances according to\npredefined security standards. A limitation of this is that it is not always trivial to fix all issues after the first\nboot of the image."]}),"\n",(0,t.jsx)(s.h2,{id:"build-time-remediation",children:"Build-time Remediation"}),"\n",(0,t.jsxs)(s.p,{children:["To solve that limitation, ",(0,t.jsx)(s.code,{children:"osbuild-composer"})," uses the build-time remediation: an ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/osbuild/blob/main/stages/org.osbuild.oscap.remediation",children:"osbuild stage"})," runs the ",(0,t.jsx)(s.code,{children:"OpenSCAP"})," tool to search for vulnerabilities on the filesystem tree while the image is being built. The ",(0,t.jsx)(s.code,{children:"OpenSCAP"})," tool runs\nthe standard evaluation for the given profile and applies the remediations to the image. This process enables the user to build a more completely\nhardened image compared to running the remediation on a live system."]}),"\n",(0,t.jsx)(s.h2,{id:"openscap-example",children:"OpenSCAP example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[customizations.openscap]\nprofile_id = "xccdf_org.ssgproject.content_profile_standard"\ndatastream = "/usr/share/xml/scap/ssg/content/ssg-fedora-ds.xml"\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"osbuild-composer"})," exposes to fields for the user to customize in the image blueprints:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["The path to the ",(0,t.jsx)(s.code,{children:"datastream"})," instructions. Usually in the ",(0,t.jsx)(s.code,{children:"/usr/share/xml/scap/ssg/content/"})," directory"]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"profile_id"})," for the desired security standard"]}),"\n",(0,t.jsxs)(s.li,{children:["Install ",(0,t.jsx)(s.code,{children:"OpenSCAP"})," via this command: ",(0,t.jsx)(s.code,{children:"dnf install scap-security-guide"})]}),"\n",(0,t.jsxs)(s.li,{children:["Use the command ",(0,t.jsx)(s.code,{children:"oscap info /usr/share/xml/scap/ssg/content/<security_profile>.xml"})," to obtain more information such as the profile id to use"]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"profile_id"})," field accepts both the long and short forms, for example, ",(0,t.jsx)(s.code,{children:"cis"})," or ",(0,t.jsx)(s.code,{children:"xccdf_org.ssgproject.content_profile_cis"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["See the ",(0,t.jsx)(s.a,{href:"./oscap-remediation#supported-profiles",children:"Supported profiles"})," table for supported profiles."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"osbuild-composer"})," will then generate the necessary configurations for the ",(0,t.jsx)(s.code,{children:"osbuild"})," stage based on the user\ncustomizations. Additionally, two packages will be added to the image, ",(0,t.jsx)(s.code,{children:"openscap-scanner"})," (the ",(0,t.jsx)(s.code,{children:"OpenSCAP"})," tool)\n& ",(0,t.jsx)(s.code,{children:"scap-security-guide"})," (this package contains the remediation instructions)."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["\u26a0\ufe0f"," ",(0,t.jsx)(s.strong,{children:"Note"}),"\nThe remediation stage assumes that the\n",(0,t.jsx)(s.code,{children:"scap-security-guide"})," will be used for the datastream. This package is installed on the image by default. If another datastream is desired, add the necessary package to the blueprint and specify the path to the datastream in the oscap config."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"supported-profiles",children:"Supported profiles"}),"\n",(0,t.jsx)(s.p,{children:"The supported profiles are distro specific, see below:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Fedora"}),(0,t.jsx)(s.th,{children:"RHEL 8.7^"}),(0,t.jsx)(s.th,{children:"CS9/RHEL 9.1^"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ANSSI-BP-028 (enhanced)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ANSSI-BP-028 (high)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ANSSI-BP-028 (intermediary)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ANSSI-BP-028 (minimal)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CIS Level 2 - Server"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CIS Level 1 - Server"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CIS Level 1 - Workstation"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CIS Level 2 - Workstation"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CUI"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Essential Eight"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"HIPAA"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ISM Official"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"OSPP"}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PCI-DSS"}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Standard"}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DISA STIG"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DISA STIG with GUI"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"x"}),(0,t.jsx)(s.td,{children:"x"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>r});var t=i(7294);const d={},n=t.createContext(d);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);