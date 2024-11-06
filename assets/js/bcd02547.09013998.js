"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9882],{5776:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"developer-guide/general/workflow","title":"Development workflow \ud83c\udfd7\ufe0f","description":"Commits \ud83d\udc8e","source":"@site/docs/developer-guide/01-general/workflow.md","sourceDirName":"developer-guide/01-general","slug":"/developer-guide/general/workflow","permalink":"/docs/developer-guide/general/workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/01-general/workflow.md","tags":[],"version":"current","frontMatter":{},"sidebar":"developer","previous":{"title":"Enabling testing for new distribution","permalink":"/docs/developer-guide/general/testing-strategy/new-distro-testing"},"next":{"title":"Projects","permalink":"/docs/developer-guide/projects/"}}');var r=s(4848),n=s(8453);const o={},l="Development workflow \ud83c\udfd7\ufe0f",a={},d=[{value:"Commits \ud83d\udc8e",id:"commits-",level:2},{value:"Preferred commit message format",id:"preferred-commit-message-format",level:3},{value:"Pull requests \ud83c\udf1f",id:"pull-requests-",level:2},{value:"Branches \ud83c\udf33",id:"branches-",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"development-workflow-\ufe0f",children:"Development workflow \ud83c\udfd7\ufe0f"})}),"\n",(0,r.jsx)(t.h2,{id:"commits-",children:"Commits \ud83d\udc8e"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Commits should be easy to read and ideally do only a single thing."}),"\n",(0,r.jsx)(t.li,{children:"The commit message should explain clearly what it's trying to do and why. Refer to the format we prefer below."}),"\n",(0,r.jsx)(t.li,{children:"A Jira issue or - where applicable - a GitHub issue reference should be added to automatically link and potentially close a related issue if it exists."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"preferred-commit-message-format",children:"Preferred commit message format"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"<module>: Topic of the commit\n\nBody of the commit, describing the changes in more detail including the\nwhy/what/how.\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"<module>"})," should point to the area of the codebase (for instance ",(0,r.jsx)(t.code,{children:"tests"})," or ",(0,r.jsx)(t.code,{children:"tools"}),"). The topic\nshould summarize what the commit is doing."]}),"\n",(0,r.jsx)(t.li,{children:"GitHub truncates the first line if it's longer than 65 characters, which is something to keep in mind as well."}),"\n",(0,r.jsxs)(t.li,{children:["GitHub PR descriptions are disconnected from the actual ",(0,r.jsx)(t.code,{children:"git"}),"\nhistory and will not show up in e.g. ",(0,r.jsx)(t.code,{children:"git blame"})," or ",(0,r.jsx)(t.code,{children:"git log"})," so consider\nthem more ephemeral."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["A good commit message will help our future selves to get back into the\ncontext that the author had when writing the code. It should include\ndecisions, considerations, and background information that were important when the\ncommit was written so that a ",(0,r.jsx)(t.code,{children:"git show <commit>"})," provides a concise\nway to (re)acquire this context. See ",(0,r.jsx)(t.a,{href:"https://github.com/osbuild/osbuild/commit/a2e212bb2641cf28e5701ad4a2202261c2c5ee5c",children:"this commit message"})," as an example."]}),"\n",(0,r.jsx)(t.h2,{id:"pull-requests-",children:"Pull requests \ud83c\udf1f"}),"\n",(0,r.jsxs)(t.p,{children:["We try to follow some best practices around pull requests. Some of them are ",(0,r.jsx)(t.a,{href:"https://github.com/osbuild/pr-best-practices",children:"encoded in a CI pipeline already"}),"."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"A pull request should be one or more commits which form a coherent unit, it can be\nrebased/rewritten/force-pushed until it's fit for merging."}),"\n",(0,r.jsx)(t.li,{children:"All changes shall be tested. If new tests are necessary to cover new functionality, it should be part of the pull request."}),"\n",(0,r.jsx)(t.li,{children:"Pull requests shall always be as small as possible, to make them easy and quick to review."}),"\n",(0,r.jsxs)(t.li,{children:["The pull request title shall contain ",(0,r.jsx)(t.a,{href:"https://issues.redhat.com",children:"a reference to the relevant Jira ticket"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Every pull request shall have a clear summary."}),"\n",(0,r.jsxs)(t.li,{children:["Every pull request shall be eagerly reviewed, ideally within a day after being marked as ready for review. ",(0,r.jsx)(t.a,{href:"https://github.com/osbuild/pr-review-queue",children:"Our internal review queue helps the team with that"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This is how the workflow works:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Pull requests should be opened from a developer's own fork to avoid random branches on the origin."}),"\n",(0,r.jsxs)(t.li,{children:["Once a pull request is ready to be merged, it should be merged via the ",(0,r.jsx)(t.code,{children:"Rebase and merge"})," or ",(0,r.jsx)(t.code,{children:"Squash and merge"})," option. This avoids merge commits on the main branch."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"How a pull request developed, and the iterations it went through, should not be visible in the git history. The end result counts: a certain amount of commits, each one forming a logical unit of changes. Avoid 'fix-up' commits which tweak previous commits in the pull request."}),"\n",(0,r.jsx)(t.h2,{id:"branches-",children:"Branches \ud83c\udf33"}),"\n",(0,r.jsx)(t.p,{children:"Force-pushing to, or rebasing the main branch (or other release branches) is not allowed. Avoid directly pushing (fast-forward) to those branches as well. Commits can always be reverted by opening a new pull request."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var i=s(6540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);