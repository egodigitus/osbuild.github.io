"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2747],{2243:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(5893),t=i(1151);const a={},o=void 0,r={id:"developer-guide/projects/images/cmds",title:"cmds",description:"Useful cmds",source:"@site/docs/developer-guide/02-projects/images/cmds.md",sourceDirName:"developer-guide/02-projects/images",slug:"/developer-guide/projects/images/cmds",permalink:"/docs/developer-guide/projects/images/cmds",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/images/cmds.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Hacking on osbuild/images",permalink:"/docs/developer-guide/projects/images/"},next:{title:"Manifest generation",permalink:"/docs/developer-guide/projects/images/code-manifest-generation"}},d={},c=[{value:"Useful cmds",id:"useful-cmds",level:3},{value:"Manifest generation",id:"manifest-generation",level:4},{value:"Building images",id:"building-images",level:4},{value:"Booting images",id:"booting-images",level:4},{value:"Listing available image type configurations",id:"listing-available-image-type-configurations",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"useful-cmds",children:"Useful cmds"}),"\n",(0,s.jsxs)(n.p,{children:["The following utilities, defined in the ",(0,s.jsx)(n.code,{children:"cmd/"})," directory, are useful for\ndevelopment and testing. They ",(0,s.jsx)(n.strong,{children:"should not"})," be relied on for production\npurposes. In particular, command line options and default behaviour can change\nat any time."]}),"\n",(0,s.jsx)(n.p,{children:"The following are high level descriptions of what some of the utilities can do\nand how they can be used during development. For specific flags and options,\nrefer to each command's help output and doc strings."}),"\n",(0,s.jsxs)(n.p,{children:["Each utility can be compiled using ",(0,s.jsx)(n.code,{children:"go build -o <outputfile> ./cmd/<utility>"}),"\nor run directly using ",(0,s.jsx)(n.code,{children:"go run ./cmd/<utility>"}),". Use ",(0,s.jsx)(n.code,{children:"go run ./cmd/<utility> -help"})," for option descriptions (e.g. ",(0,s.jsx)(n.code,{children:"go run ./cmd/gen-manifests -help"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"manifest-generation",children:"Manifest generation"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"gen-manifests"})," tool can be used to generate all or a subset of the\nmanifests for the images defined in the repository. This is useful for quickly\nseeing the effects of changes in image definitions on the manifest and the\nimage build itself. While manifests are meant to be machine readable, it is\noften much faster to inspect the difference between two manifests (before and\nafter a change in code) to evaluate if a change is having the desired effect."]}),"\n",(0,s.jsx)(n.p,{children:"Manifests can be generated with or without content resolution (e.g. package\ndepsolving, containers, ostree commits). If you are working on changes in image\ndefinitions that do not rely on content (e.g. an image type's partition table),\nmanifests without resolved content can be generated almost instantly. Note that\neven though content is not resolved and packages are not depsolved, the\nselected packages without their dependencies are still added to generated\nmanifests, so disabling package depsolving can also be used to inspect package\nselection without dependencies."}),"\n",(0,s.jsx)(n.p,{children:"Manifests should be generated with all content enabled if they are going to be\nbuilt. A common workflow when working on changing image definitions, or adding\na new image type, might be:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generate the manifests for the image types that you will be working on."}),"\n",(0,s.jsx)(n.li,{children:"Make changes in an existing image definition or add a new image type."}),"\n",(0,s.jsxs)(n.li,{children:["Add appropriate configuration changes:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If a new image type is added, add it to the ",(0,s.jsx)(n.a,{href:"https://github.com/osbuild/images/tree/main/docs/developer/test/config-map.json",children:"config\nmap"})," under an appropriate configuration file or\nwrite a new one."]}),"\n",(0,s.jsxs)(n.li,{children:["If an existing image type is being modified, and the change depends on an\nimage customization, make sure the modification is covered by an existing\n",(0,s.jsx)(n.a,{href:"https://github.com/osbuild/images/tree/main/docs/developer/test/configs",children:"test config"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Generate the relevant manifests without content (",(0,s.jsx)(n.code,{children:"-packages=false -containers=false -commits=false"}),").","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the change depends on a customization, it might be more useful to\ngenerate multiple manifests with different configuration options set and\ninspect the differences between them."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Inspect the differences between manifests generated in steps 1 and 4."}),"\n",(0,s.jsx)(n.li,{children:"Generate manifest with all content enabled for the relevant image types."}),"\n",(0,s.jsxs)(n.li,{children:["Build at least one of the manifests using ",(0,s.jsx)(n.code,{children:"osuild"})," and inspect the output\n(boot the image or mount it to look for the desired changes)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["NOTE: By default, manifests created with the ",(0,s.jsx)(n.code,{children:"gen-manifest"}),' tool contain extra\nmetadata. The manifest itself is stored under the key "manifest". You can\nextract the actual manifest using ',(0,s.jsx)(n.code,{children:"jq .manifest <manifestfile>.json"}),". Alternatively, you can generate manifests without\nmetadata using the ",(0,s.jsx)(n.code,{children:"-metadata=false"})," option."]})}),"\n",(0,s.jsx)(n.h4,{id:"building-images",children:"Building images"}),"\n",(0,s.jsxs)(n.p,{children:["You can build an image by generating its manifest and then running\nosbuild. Alternatively, the ",(0,s.jsx)(n.code,{children:"cmd/build"})," tool can perform both steps in one\ncall. It will generate a manifest, build the image, and store both the image\nand its manifest in the output directory."]}),"\n",(0,s.jsxs)(n.p,{children:["The build tool must be run as root because image building with osbuild requires\nsuperuser privileges. It is ",(0,s.jsx)(n.strong,{children:"not recommended"})," to run ",(0,s.jsx)(n.code,{children:"sudo go run ./cmd/build"})," however. The ",(0,s.jsx)(n.code,{children:"go run"})," command can make changes to the go build\ncache and if these changes are made as root, it can cause issues when running\nother go commands in the future as a regular user. Instead, it is recommended\nto first build the binary and then run it as root:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"go build -o bin/build ./cmd/build\nsudo ./bin/build ...\n"})}),"\n",(0,s.jsx)(n.h4,{id:"booting-images",children:"Booting images"}),"\n",(0,s.jsxs)(n.p,{children:["You can boot an image in its target environment by using the appropriate\ncommand from ",(0,s.jsx)(n.code,{children:"cmd/"}),". ",(0,s.jsx)(n.em,{children:"Currently, only AWS is supported."})]}),"\n",(0,s.jsxs)(n.p,{children:["For example, to boot an AMI or EC2 image, you can use the ",(0,s.jsx)(n.code,{children:"./cmd/boot-aws"}),"\ncommand with the ",(0,s.jsx)(n.code,{children:"setup"})," subcommand:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'go run ./cmd/boot-aws setup \\\n     --access-key-id "${AWS_ACCESS_KEY_ID}" \\\n     --secret-access-key "${AWS_SECRET_ACCESS_KEY}" \\\n     --region "${AWS_REGION}" \\\n     --bucket "${AWS_BUCKET}" \\\n     --ami-name "${IMAGE_NAME}" \\\n     --s3-key "${IMAGE_KEY}" \\\n     --username "${USERNAME}" \\\n     --arch "${IMAGE_ARCHITECTURE}" \\\n     --ssh-pubkey "${PATH_TO_SSH_PUBLIC_KEY}" \\\n     --ssh-privkey "${PATH_TO_SSH_PRIVATE_KEY}" \\\n     --resourcefile ./aws-test-resources.json \\\n     ${PATH_TO_IMAGE_FILE}\n'})}),"\n",(0,s.jsx)(n.p,{children:"where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${AWS_ACCESS_KEY_ID}"})," and ",(0,s.jsx)(n.code,{children:"${AWS_SECRET_ACCESS_KEY}"})," are the AWS credentials,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${AWS_REGION}"})," is the AWS region to use,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${AWS_BUCKET}"})," is an S3 bucket (that must already exist),"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${IMAGE_NAME}"})," is the name to use for registering the AMI,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${IMAGE_KEY}"})," is the key (filename) to use for the file in S3,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${USERNAME}"})," is the username to set up on the instance,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${IMAGE_ARCHITECTURE}"})," is the hardware architecture of the image being\nuploaded and booted,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${PATH_TO_SSH_PUBLIC_KEY}"})," and ",(0,s.jsx)(n.code,{children:"${PATH_TO_SSH_PRIVATE_KEY}"})," point to an\npublic/private SSH key pair."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This command will upload the image to S3, register the image as an AMI, create\na security group configured to allow SSH access, and launch an instance from\nthe AMI. It will then wait until the instance is ready and print its public IP\naddress. It will also use the public ssh key and provided username to configure\ncloud-init to create a user and set the ssh key on first boot."}),"\n",(0,s.jsxs)(n.p,{children:["The IDs of all created resources are stored in the file specified by the\n",(0,s.jsx)(n.code,{children:"--resourcefile"})," flag. This can be used to tear down all the resources created\nby the ",(0,s.jsx)(n.code,{children:"setup"})," subcommand:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'go run ./cmd/boot-aws teardown \\\n     --access-key-id "${AWS_ACCESS_KEY_ID}" \\\n     --secret-access-key "${AWS_SECRET_ACCESS_KEY}" \\\n     --region "${AWS_REGION}" \\\n     --bucket "${AWS_BUCKET}" \\\n     --name "${IMAGE_NAME}" \\\n     --key "${IMAGE_KEY}" \\\n     --username "${USERNAME}" \\\n     --arch "${IMAGE_ARCHITECTURE}" \\\n     --ssh-pubkey "${PATH_TO_SSH_PUBLIC_KEY}" \\\n     --ssh-privkey "${PATH_TO_SSH_PRIVATE_KEY}" \\\n     --resourcefile ./aws-test-resources.json\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, a setup-test-teardown procedure can be run in a single command using the ",(0,s.jsx)(n.code,{children:"run"})," subcommand:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'go run ./cmd/boot-aws run \\\n     --access-key-id "${AWS_ACCESS_KEY_ID}" \\\n     --secret-access-key "${AWS_SECRET_ACCESS_KEY}" \\\n     --region "${AWS_REGION}" \\\n     --bucket "${AWS_BUCKET}" \\\n     --ami-name "${IMAGE_NAME}" \\\n     --s3-key "${IMAGE_KEY}" \\\n     --username "${USERNAME}" \\\n     --arch "${IMAGE_ARCHITECTURE}" \\\n     --ssh-pubkey "${PATH_TO_SSH_PUBLIC_KEY}" \\\n     --ssh-privkey "${PATH_TO_SSH_PRIVATE_KEY}" \\\n     ${PATH_TO_IMAGE_FILE} ${PATH_TO_SCRIPT}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will perform the same steps as the ",(0,s.jsx)(n.code,{children:"setup"})," subcommand, then upload the\nscript specified by ",(0,s.jsx)(n.code,{children:"${PATH_TO_SCRIPT}"})," to the instance, run it, and then\nperform the same actions as the ",(0,s.jsx)(n.code,{children:"teardown"})," subcommand."]}),"\n",(0,s.jsx)(n.h4,{id:"listing-available-image-type-configurations",children:"Listing available image type configurations"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"cmd/list-images"})," utility simply lists all available combinations of\ndistribution, architecture, and image type. It also supports filtering one or\nmore of those three variables."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var s=i(7294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);