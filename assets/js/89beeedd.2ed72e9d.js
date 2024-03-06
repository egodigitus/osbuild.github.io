"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4348],{7779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(5893),s=t(1151);const r={},i="Hacking on composer-cli",c={id:"developer-guide/projects/composer-cli/HACKING",title:"Hacking on composer-cli",description:"This new implementation of composer-cli is broken up into 2 major pieces. The",source:"@site/docs/developer-guide/02-projects/composer-cli/HACKING.md",sourceDirName:"developer-guide/02-projects/composer-cli",slug:"/developer-guide/projects/composer-cli/HACKING",permalink:"/docs/developer-guide/projects/composer-cli/HACKING",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/composer-cli/HACKING.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"composer-cli",permalink:"/docs/developer-guide/projects/composer-cli/"},next:{title:"Image Builder",permalink:"/docs/developer-guide/projects/image-builder/"}},d={},a=[{value:"Adding new library functions",id:"adding-new-library-functions",level:2},{value:"Unit tests for new functions",id:"unit-tests-for-new-functions",level:2},{value:"Integration tests for library functions",id:"integration-tests-for-library-functions",level:2},{value:"Adding new cli commands",id:"adding-new-cli-commands",level:2},{value:"Adding new subcommands",id:"adding-new-subcommands",level:2},{value:"Error handling for cli commands",id:"error-handling-for-cli-commands",level:2},{value:"Unit tests for cli commands",id:"unit-tests-for-cli-commands",level:2},{value:"Running Unit Tests",id:"running-unit-tests",level:2},{value:"Running Integration Tests",id:"running-integration-tests",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hacking-on-composer-cli",children:"Hacking on composer-cli"}),"\n",(0,o.jsxs)(n.p,{children:["This new implementation of composer-cli is broken up into 2 major pieces. The\n",(0,o.jsx)(n.code,{children:"./weldr/"})," package contains the library functions for communicating with the\nAPI server. These functions are publicly accessible and should be documented so\nthat 3rd party users can use them to communicate with the osbuild-composer\nserver."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"./cmd/composer-cli/"})," code is the user interface code, separated out into\ncommands and subcommands. They are for interactive use, and by scripts via the\n",(0,o.jsx)(n.code,{children:"--json"})," argument that switches the output to JSON formated objects."]}),"\n",(0,o.jsx)(n.h2,{id:"adding-new-library-functions",children:"Adding new library functions"}),"\n",(0,o.jsxs)(n.p,{children:["The weldr library should contain functions, separated into descriptively named\nfiles, like blueprints.go. The functions should handle communication with the\nAPI server and return values to the caller using, if possible, regular Go data\ntypes. eg. ",(0,o.jsx)(n.code,{children:"ListBlueprints"})," returns a slice of strings."]}),"\n",(0,o.jsxs)(n.p,{children:["Errors from lower functions should be returned to the called as errors, and API\nerror responses should be returned as ",(0,o.jsx)(n.code,{children:"APIResponse"})," or slices of ",(0,o.jsx)(n.code,{children:"APIErrorMsg"}),".\nThe type returned will depend on the response from the server."]}),"\n",(0,o.jsx)(n.p,{children:"The blueprints.go has examples of most of the types of responses you will\nencounter, use it as a template for adding new functions."}),"\n",(0,o.jsxs)(n.p,{children:["Not every response can use a Go type. For those that need to return more\ndetails use structs that match the API structs used in the server. We do not\nwant to import the actual server modules (and cannot because they are all\nimplemented as internal modules) so the structs should be placed into\n",(0,o.jsx)(n.code,{children:"weldr/apischema.go"})]}),"\n",(0,o.jsxs)(n.p,{children:["Try to avoid using ",(0,o.jsx)(n.code,{children:"interface{}"})," as much as possible. I have only used it for\nreturning the raw blueprint to the caller in the ",(0,o.jsx)(n.code,{children:"GetBlueprints..."})," functions so\nthat it isn't tightly coupled to the actual blueprint format. The composer-cli\nisn't manipulating the blueprint data, only passing it through, so it doesn't\nneed to know what's actually there. Blueprints are the thing most likely to\nchange, and they are not versioned like the API is so remaining flexible is\nimportant."]}),"\n",(0,o.jsx)(n.h2,{id:"unit-tests-for-new-functions",children:"Unit tests for new functions"}),"\n",(0,o.jsxs)(n.p,{children:["Functions, or parts of functions, that can be tested without an actual API\nserver should be written in the ",(0,o.jsx)(n.code,{children:"weldr/unit_test.go"})," file, or if there are no\nintegration tests into a foo_test.go file where foo is the name of the file you\nput the function in."]}),"\n",(0,o.jsx)(n.h2,{id:"integration-tests-for-library-functions",children:"Integration tests for library functions"}),"\n",(0,o.jsxs)(n.p,{children:["Integration tests require an API server to be running, and should be placed\ninto a foo_test.go file alongside the code they are testing. At the top of the\nfile there should be a ",(0,o.jsx)(n.code,{children:"// +build integration"})," before the package line, ans\nseparated from it with a blank line. See blueprints_test.go for an example."]}),"\n",(0,o.jsx)(n.p,{children:"These tests should be independent from each other. If there is server setup\nthat needs to be done it should be done in a way that works with a clean or a\ndirty server. Usually it will be run against a clean server, as part of the\ngithub action tests that are run when a PR is submitted. But don't depend on that."}),"\n",(0,o.jsx)(n.p,{children:"If something needs to be setup you can do it in the test function itself, or in\nthe integration_test.go file if necessary. But try to keep changes there to a\nminimum."}),"\n",(0,o.jsx)(n.h2,{id:"adding-new-cli-commands",children:"Adding new cli commands"}),"\n",(0,o.jsxs)(n.p,{children:["Mention Cobra, point to docs. Point to simple example like 'status show', tell how to hook it up the ",(0,o.jsx)(n.code,{children:"rootCmd"}),"\nand how to write tests for it."]}),"\n",(0,o.jsxs)(n.p,{children:["composer-cli uses the ",(0,o.jsx)(n.a,{href:"https://pkg.go.dev/github.com/spf13/cobra",children:"Cobra"}),"\nlibrary to handle command parsing, options, and subcommands."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"./cmd/composer-cli/"})," directory is structured so that top level commands go\ninto their own directory and package.  They import the root Cobra object from\n",(0,o.jsx)(n.code,{children:"cmd/composer-cli/root"})," and attach themselves to that command using\n",(0,o.jsx)(n.code,{children:"root.AddRootCommand()"}),". Then the subcommands attach themselves to this\ncommand. See ",(0,o.jsx)(n.code,{children:"cmd/composer-cli/blueprints/blueprints.go"})," for an example of a\nsubcommand."]}),"\n",(0,o.jsx)(n.p,{children:"Developer documentation should go into a doc.go file."}),"\n",(0,o.jsxs)(n.p,{children:["Commands are hooked into the root command parser by adding them to the include\nlist in ",(0,o.jsx)(n.code,{children:"cmd/composer-cli/main.go"})," with a preceeding ",(0,o.jsx)(n.code,{children:"_"})," so that the compiler\nwon't complain about unused symbols."]}),"\n",(0,o.jsx)(n.h2,{id:"adding-new-subcommands",children:"Adding new subcommands"}),"\n",(0,o.jsxs)(n.p,{children:["Subcommands should go into their own file, and be members of the command's\npackage. The file should only contain the functions needed to implement the\nuser interface for this command. Any helper functions or API related functions\nthat could be useful to other developers should go into the ",(0,o.jsx)(n.code,{children:"weldr/"})," library."]}),"\n",(0,o.jsx)(n.h2,{id:"error-handling-for-cli-commands",children:"Error handling for cli commands"}),"\n",(0,o.jsxs)(n.p,{children:["Commands should use the Cobra RunE method which returns an error to the root command handler.\nIf the command exits immediately on error it should return a\n",(0,o.jsx)(n.code,{children:"root.ExecutionError"})," with a string describing the error, and embedding the ",(0,o.jsx)(n.code,{children:"err"})," if there was one.\nSee ",(0,o.jsx)(n.code,{children:"cmd/composer-cli/blueprints/list.go"})," for an example of this type of handling."]}),"\n",(0,o.jsxs)(n.p,{children:["If there could be more than one error, eg. when processing a list of\nblueprints, the command function should print them to ",(0,o.jsx)(n.code,{children:"os.Stderr"})," as ",(0,o.jsx)(n.code,{children:"ERROR: ...\\n"}),"\nand return a blank ",(0,o.jsx)(n.code,{children:'root.ExecutionError(cmd, "")'})," to the root handler. See\n",(0,o.jsx)(n.code,{children:"cmd/composer-cli/blueprints/push.go"})," for an example."]}),"\n",(0,o.jsx)(n.h2,{id:"unit-tests-for-cli-commands",children:"Unit tests for cli commands"}),"\n",(0,o.jsxs)(n.p,{children:["The command line code under ",(0,o.jsx)(n.code,{children:"./cmd/"})," is unit tested against the ",(0,o.jsx)(n.code,{children:"./weldr/"})," library\ncode. They use a mock http client that is setup, by each test, to return the\nexpected JSON or TOML responses. See the tests in\n",(0,o.jsx)(n.code,{children:"./cmd/composer-cli/blueprints/"})," for examples of how to set this up."]}),"\n",(0,o.jsx)(n.p,{children:"Basically, you setup a mock http client that stores the query it receives and\nreturns a canned response. This should not be too elaborate, otherwise you end\nup mocking every detail of the server. The goal is to make sure the cmdline\ncommand calls the right library function and that the response from the\nfunction is parsed correctly."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"weldr.MockClient"})," function that is used to handle the requests adds a ",(0,o.jsx)(n.code,{children:".Req"}),"\nelement that can be examined in the tests. eg:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'assert.Equal(t, "/api/v1/blueprints/list", mc.Req.URL.Path)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If the test returns an error the ",(0,o.jsx)(n.code,{children:"MockClient"})," ",(0,o.jsx)(n.code,{children:"DoFunc"})," needs to return the\nrequest so that the ",(0,o.jsx)(n.code,{children:"apiError"})," function can pass it to the callback function.\nSee ",(0,o.jsx)(n.code,{children:"common_test.TestRequestMethods404"})," for an example."]}),"\n",(0,o.jsx)(n.h1,{id:"running-tests",children:"Running tests"}),"\n",(0,o.jsx)(n.h2,{id:"running-unit-tests",children:"Running Unit Tests"}),"\n",(0,o.jsxs)(n.p,{children:["Unit tests can be run by running ",(0,o.jsx)(n.code,{children:"make test"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"running-integration-tests",children:"Running Integration Tests"}),"\n",(0,o.jsxs)(n.p,{children:["Integration tests are run by a test binary. You can build the binary by running\n",(0,o.jsx)(n.code,{children:"make integration"})," and then running it on a system with osbuild-composer running. Pass it -test.v to\noutput more verbose details about the tests being run."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(7294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);