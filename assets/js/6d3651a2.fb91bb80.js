"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4486],{5337:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(5893),t=s(1151);const o={},a="osbuild/images testing information",r={id:"developer-guide/projects/images/testing",title:"osbuild/images testing information",description:"./test/configs/ contains configuration files for building images for testing. The files are used by the following tools:",source:"@site/docs/developer-guide/02-projects/images/testing.md",sourceDirName:"developer-guide/02-projects/images",slug:"/developer-guide/projects/images/testing",permalink:"/docs/developer-guide/projects/images/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/images/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Hacking on osbuild/images",permalink:"/docs/developer-guide/projects/images/developer"},next:{title:"OSBuild",permalink:"/docs/developer-guide/projects/osbuild/"}},c={},d=[{value:"Image build tests in GitLab CI",id:"image-build-tests-in-gitlab-ci",level:2},{value:"Summary",id:"summary",level:3},{value:"Dynamic pipelines",id:"dynamic-pipelines",level:3},{value:"Workflow details",id:"workflow-details",level:3},{value:"1. Generate build config",id:"1-generate-build-config",level:4},{value:"2. Dynamic build job",id:"2-dynamic-build-job",level:4},{value:"3. Generate ostree build config",id:"3-generate-ostree-build-config",level:4},{value:"4. Dynamic ostree build job",id:"4-dynamic-ostree-build-job",level:4},{value:"Definitions",id:"definitions",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"osbuildimages-testing-information",children:"osbuild/images testing information"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/configs/",children:"./test/configs/"})," contains configuration files for building images for testing. The files are used by the following tools:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/cmd/build",children:"./cmd/build"})," takes a config file as argument to build an image.  For example:"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"go build -o bin/build ./cmd/build\nsudo ./bin/build --output ./buildtest --rpmmd /tmp/rpmmd --distro fedora-39 --image qcow2 --config test/configs/embed-containers.json\n"})}),"\n",(0,n.jsxs)(i.p,{children:["will build a Fedora 38 qcow2 image using the configuration specified in the file ",(0,n.jsx)(i.code,{children:"embed-containers.json"})]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/cmd/gen-manifests",children:"./cmd/gen-manifests"})," generates manifests based on the configs specified in ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/config-map.json",children:"./test/config-map.json"}),". The config map maps configuration files to image types, distributions, and architectures.  An empty list means it applies to all values.  Globs are supported."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The config map is also used in CI to dynamically generate test builds using the ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/scripts/generate-build-config",children:"./test/scripts/generate-build-config"})," and ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/scripts/generate-ostree-build-config",children:"./test/scripts/generate-ostree-build-config"})," scripts."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/data/repositories/",children:"./test/data/repositories/"})," contains repository configurations for manifest generation (",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/cmd/gen-manifests",children:"./cmd/gen-manifests"}),") and image building (",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/cmd/build",children:"./cmd/build"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Schutzfile"})," defines content sources and test variables:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"common.rngseed"})," is the random number generator seed that is used by all the test scripts and commands. It ensures manifests are always generated with the same random values (e.g. for partition UUIDs) so tests can be skipped when an image hasn't changed (see ",(0,n.jsx)(i.a,{href:"#workflow-details",children:"Workflow details"}),") below. This value can be changed (incremented) when a rebuild of all test images is required. For example, if a test script changes in a way that will not affect the manifests, this value can be used to make sure all test images are built."]}),"\n",(0,n.jsxs)(i.li,{children:["The following are defined in an object keyed by a distro name (e.g. ",(0,n.jsx)(i.code,{children:"fedora-39"}),"). The distribution name and version must match the version of the CI runners."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"dependencies.osbuild.commit"}),": the version of osbuild to use, as a commit ID. This must be a commit that was successfully built in osbuild's CI, so that RPMs will be available. It is used by ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/scripts/setup-osbuild-repo",children:"./test/scripts/setup-osbuild-repo"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"repos"}),": the repository configurations to use on the runners to install packages such as build dependencies and test tools."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"image-build-tests-in-gitlab-ci",children:"Image build tests in GitLab CI"}),"\n",(0,n.jsx)(i.h3,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(i.p,{children:"Images are built in GitLab CI when a change in an image definition is detected. The config generator scripts generate all the manifests and create a child pipeline with one job for each manifest and builds the image. On successful build, the result is stored in an s3 bucket by manifest ID. Subsequent runs of the generator script check the cache and only build manifests when their ID is not found in the cache."}),"\n",(0,n.jsxs)(i.p,{children:["Each generator script is run separately for every distribution and architecture combination that the project supports. These are also generated dynamically using ",(0,n.jsx)(i.code,{children:"./cmd/list-images"}),". The dynamic test generation workflow looks like this:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"gitlab-ci.yml\n|   For each distro/arch\n|-- generate-build-configs-<distro>-<arch>\n|         |\n|         | (Dynamic: For each modified image type and config)\n|         |-- Build <distro>-<arch>-<image>-<config>\n|\n|   For each distro/arch\n|-- generate-ostree-build-configs-<distro>-<arch>\n          |\n          | (Dynamic: For each modified image type and config)\n          |-- Build <distro>-<arch>-<image>-<config>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The top-level ",(0,n.jsx)(i.code,{children:".gitlab-ci.yml"})," is generated using ",(0,n.jsx)(i.code,{children:"./tools/prepare-source.sh"})," (which calls ",(0,n.jsx)(i.code,{children:"./test/scripts/generate-gitlab-ci"}),") and must be updated when a change is made to the image configurations (distros, architectures, image types).  A PR will fail if the generated version does not match the one checked into the repository."]}),"\n",(0,n.jsx)(i.h3,{id:"dynamic-pipelines",children:"Dynamic pipelines"}),"\n",(0,n.jsxs)(i.p,{children:["Jobs are created dynamically using GitLab CI's ",(0,n.jsx)(i.a,{href:"https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#dynamic-child-pipelines",children:"Dynamic child pipelines"})," feature. A simple example of how this works that mimics the setup of the pipeline generation in this project (but with very simple bash scripts) can be found in the ",(0,n.jsx)(i.a,{href:"https://gitlab.com/redhat/services/products/image-builder/ci/dynamic-pipeline-demo",children:"image-builder/ci/dynamic-pipeline-demo"})," project on GitLab. The project contains an ",(0,n.jsxs)(i.a,{href:"https://gitlab.com/redhat/services/products/image-builder/ci/dynamic-pipeline-demo/-/blob/5914c7432eaa810cfea7ca35ffb9f01700197b02/.gitlab-ci.yml",children:["annotated ",(0,n.jsx)(i.code,{children:".gitlab-ci.yml"})," file"]})," and ",(0,n.jsx)(i.a,{href:"https://gitlab.com/redhat/services/products/image-builder/ci/dynamic-pipeline-demo/-/tree/5914c7432eaa810cfea7ca35ffb9f01700197b02/scripts",children:"a couple of bash scripts"})," that generate pipeline configurations dynamically."]}),"\n",(0,n.jsx)(i.h3,{id:"workflow-details",children:"Workflow details"}),"\n",(0,n.jsx)(i.p,{children:"The following describe the stages that are run for each distro-arch combination."}),"\n",(0,n.jsx)(i.h4,{id:"1-generate-build-config",children:"1. Generate build config"}),"\n",(0,n.jsxs)(i.p,{children:["The first stage of the workflow runs the ",(0,n.jsx)(i.code,{children:"./test/generate-build-config"})," script."]}),"\n",(0,n.jsx)(i.p,{children:"The config generator:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Generates all the manifests for a given distribution and architecture using the ",(0,n.jsx)(i.code,{children:"./cmd/gen-manifests"})," tool."]}),"\n",(0,n.jsx)(i.li,{children:"Downloads the test build cache."}),"\n",(0,n.jsxs)(i.li,{children:["Filters out any manifest with an ID that exists in the build cache.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"It also filters out any manifest that depends on an ostree commit because these can't be built without an ostree repository to pull from."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["For each remaining manifest, creates a job which builds, boots (if applicable), and uploads the results to the build cache for a given distro, image type, and config file.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"./test/scripts/build-image"})," builds the image using osbuild."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"./test/scripts/boot-image"})," boots the image in the appropriate cloud or virtual environment (if supported)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"./test/scripts/upload-results"})," uploads the results (manifest, image file, and build info) to the CI S3 bucket, so that rebuilds of the same manifest ID can be skipped."]}),"\n",(0,n.jsxs)(i.li,{children:["For ostree container image types (",(0,n.jsx)(i.code,{children:"iot-container"})," and ",(0,n.jsx)(i.code,{children:"edge-container"}),"), it also adds a call to the ",(0,n.jsx)(i.code,{children:"./tools/ci/push-container.sh"})," script to push the container to the GitLab registry. The name and tag for each container is ",(0,n.jsx)(i.code,{children:"<build name>:<manifest ID>"})," (see ",(0,n.jsx)(i.a,{href:"#definitions",children:"Definitions"})," below)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["If no builds are needed, it generates a ",(0,n.jsx)(i.code,{children:"NullConfig"}),", which is a simple shell runner that exits successfully. This is required because the child pipeline config cannot be empty."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"2-dynamic-build-job",children:"2. Dynamic build job"}),"\n",(0,n.jsx)(i.p,{children:"Each build job runs in parallel. For each image that is successfully built, a file is added to the test build cache under the following path:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"<distro>/<arch>/<osbuild NEVRA>/<manifest ID>/info.json\n"})}),"\n",(0,n.jsx)(i.p,{children:"Each file in the cache stores information relevant to the build,\nin the form"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "distro": "<distro>",\n  "arch": "<arch>",\n  "image-type": "<image type>",\n  "config": "<config name>",\n  "manifest-checksum": "<manifest ID>",\n  "osbuild-version": "<osbuild version>",\n  "osbuild-commit": "<osbuild commit ID>",\n  "commit": "<commit ID>",\n  "boot-success": true,\n  "pr": "<PR number>"\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:["(see ",(0,n.jsx)(i.a,{href:"#definitions",children:"Definitions"})," below)"]}),"\n",(0,n.jsx)(i.p,{children:"for example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "distro": "fedora-39",\n  "arch": "x86_64",\n  "image-type": "qcow2",\n  "config": "all-customizations",\n  "manifest-checksum": "8c0ce3987d78fe6f3307494cd57ceed861de61c3b04786d6a7f570faacbdb5df",\n  "osbuild-version": "osbuild 89",\n  "osbuild-commit": "74392a0238dec6bfa3f030e46c840148df2814e0",\n  "commit": "52ecfdf1eb345e09c6a6edf4a8d3dd5c8079c51c",\n  "boot-success": true,\n  "pr": 42\n}\n'})}),"\n",(0,n.jsx)(i.h4,{id:"3-generate-ostree-build-config",children:"3. Generate ostree build config"}),"\n",(0,n.jsxs)(i.p,{children:["This stage of the workflow runs the ",(0,n.jsx)(i.code,{children:"./test/generate-ostree-build-config"})," script. It has the same purpose as the config generator in the first step, but it sets up ostree containers to serve commits to generate manifests for the image types that depend on them."]}),"\n",(0,n.jsx)(i.p,{children:"The config generator:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Generates all the manifests for build config dependencies for a given distribution and architecture using the ",(0,n.jsx)(i.code,{children:"./cmd/gen-manifests"})," tool.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Build config dependencies are image type and config pairings that appear in the ",(0,n.jsx)(i.code,{children:"depends"})," part of a build config ."]}),"\n",(0,n.jsxs)(i.li,{children:["For example ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/configs/iot-ostree-pull-empty.json",children:"iot-ostree-pull-empty"}),") will cause a manifest to be generated for ",(0,n.jsx)(i.code,{children:"iot-container"})," with the ",(0,n.jsx)(i.code,{children:"empty"})," config for all distros."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Determines the container name and tag from the build name and manifest ID and pulls each container from the registry."}),"\n",(0,n.jsx)(i.li,{children:"Runs each container with a unique port mapped to the internal web service port."}),"\n",(0,n.jsxs)(i.li,{children:["For each build config that defines a dependency and for each image that config applies to, creates build configs and a config map that defines the URL, port, and ref for the ostree commit source.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["For example, the config ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/configs/iot-ostree-pull-empty.json",children:"iot-ostree-pull-empty"}),") is mapped in the ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/images/tree/main/test/config-map.json",children:"config-map"})," to the image types ",(0,n.jsx)(i.code,{children:"iot-ami"}),", ",(0,n.jsx)(i.code,{children:"iot-installer"}),", ",(0,n.jsx)(i.code,{children:"iot-raw-image"}),", and ",(0,n.jsx)(i.code,{children:"iot-vsphere"}),". This will create four configs for each distro, one for each image type, that will all have ostree options to pull an ostree commit from an ",(0,n.jsx)(i.code,{children:"iot-container"})," of the same distro."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Generates all the manifests defined in the config map that was generated in the previous step.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Note that this manifest generation step uses the ",(0,n.jsx)(i.code,{children:"-skip-noconfig"})," flag, which means that any image type not defined in the map is skipped."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Downloads the test build cache."}),"\n",(0,n.jsx)(i.li,{children:"Filters out any manifest with an ID that exists in the build cache."}),"\n",(0,n.jsxs)(i.li,{children:["For each remaining manifest, creates a job which builds, boots (if applicable), and uploads the results to the build cache for a given distro, image type, and config file.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"./test/scripts/build-image"})," builds the image using osbuild."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"./test/scripts/boot-image"})," boots the image in the appropriate cloud or virtual environment (if supported)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"./test/scripts/upload-results"})," uploads the results (manifest, image file, and build info) to the CI S3 bucket, so that rebuilds of the same manifest ID can be skipped."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["If no builds are needed, it generates a ",(0,n.jsx)(i.code,{children:"NullConfig"}),", which is a simple shell runner that exits successfully. This is required because the child pipeline config cannot be empty."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"4-dynamic-ostree-build-job",children:"4. Dynamic ostree build job"}),"\n",(0,n.jsx)(i.p,{children:"Each build job runs in parallel. For each image that is successfully built, a file is added to the test build cache, just like for the previous build job in stage 2."}),"\n",(0,n.jsx)(i.h2,{id:"definitions",children:"Definitions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<distro>"}),": distribution name and version (e.g. ",(0,n.jsx)(i.code,{children:"fedora-39"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<arch>"}),": architecture (one of ",(0,n.jsx)(i.code,{children:"x86_64"}),", ",(0,n.jsx)(i.code,{children:"aarch64"}),", ",(0,n.jsx)(i.code,{children:"ppc64le"}),", ",(0,n.jsx)(i.code,{children:"s390x"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<image type>"}),": name of the image type (e.g. ",(0,n.jsx)(i.code,{children:"qcow2"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<config name>"}),": name of a build configuration like the ones found in ",(0,n.jsx)(i.code,{children:"./test/configs/"})," (e.g. ",(0,n.jsx)(i.code,{children:"all-customizations"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<build name>"}),": a concatenation of all the elements that define a unique build configuration. It is created as ",(0,n.jsx)(i.code,{children:"<distro>-<arch>-<image type>-<config name>"})," with dashes ",(0,n.jsx)(i.code,{children:"-"})," in each component replaced by underscores ",(0,n.jsx)(i.code,{children:"_"})," (e.g. ",(0,n.jsx)(i.code,{children:"fedora_38-x86_64-qcow2-all_customizations"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<manifest ID>"}),": the ID of the last stage of the manifest. The manifest ID is unaffected by content sources (RPM or commit URLs for example) but not by content hashes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"<osbuild commit ID>"}),": the commit ID specified in the ",(0,n.jsx)(i.code,{children:"Schutzfile"})," under ",(0,n.jsx)(i.code,{children:"<distro>.dependencies.osbuild.commit"}),". If not specified, it defaults to ",(0,n.jsx)(i.code,{children:"RELEASE"})," and means that osbuild version was installed from the distribution repositories and the ",(0,n.jsx)(i.code,{children:"<osbuild version>"})," is the released version for the given distribution."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>r,a:()=>a});var n=s(7294);const t={},o=n.createContext(t);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);