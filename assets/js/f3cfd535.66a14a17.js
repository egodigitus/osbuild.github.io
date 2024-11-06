"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1596],{2134:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"developer-guide/projects/composer-cli/index","title":"composer-cli","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/composer-cli/index.md","sourceDirName":"developer-guide/02-projects/composer-cli","slug":"/developer-guide/projects/composer-cli/","permalink":"/docs/developer-guide/projects/composer-cli/","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/weldr-client/blob/main/README.md","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/weldr-client/blob/main/README.md"},"sidebar":"developer","previous":{"title":"Cockpit-Composer Integration Test","permalink":"/docs/developer-guide/projects/cockpit-composer/testing"},"next":{"title":"Hacking on composer-cli","permalink":"/docs/developer-guide/projects/composer-cli/HACKING"}}');var t=n(4848),o=n(8453);const r={custom_edit_url:"https://github.com/osbuild/weldr-client/blob/main/README.md"},l="composer-cli",d={},c=[{value:"Edit a Blueprint",id:"edit-a-blueprint",level:2},{value:"Build an image",id:"build-an-image",level:2},{value:"Monitor the build status",id:"monitor-the-build-status",level:2},{value:"Download the image",id:"download-the-image",level:2},{value:"Image Uploads",id:"image-uploads",level:2},{value:"providers.toml",id:"providerstoml",level:3},{value:"AWS",id:"aws",level:4},{value:"Azure",id:"azure",level:4},{value:"VMWare",id:"vmware",level:4},{value:"Build an image and upload results",id:"build-an-image-and-upload-results",level:2},{value:"JSON Output",id:"json-output",level:2},{value:"Blueprint Format",id:"blueprint-format",level:2},{value:"[[packages]] and [[modules]]",id:"packages-and-modules",level:3},{value:"[[groups]]",id:"groups",level:3},{value:"Customizations",id:"customizations",level:3},{value:"[customizations.kernel]",id:"customizationskernel",level:4},{value:"[[customizations.sshkey]]",id:"customizationssshkey",level:4},{value:"[[customizations.user]]",id:"customizationsuser",level:4},{value:"[[customizations.group]]",id:"customizationsgroup",level:4},{value:"[customizations.timezone]",id:"customizationstimezone",level:4},{value:"[customizations.locale]",id:"customizationslocale",level:4},{value:"[customizations.firewall]",id:"customizationsfirewall",level:4},{value:"[customizations.services]",id:"customizationsservices",level:4},{value:"Package Sources",id:"package-sources",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"composer-cli",children:"composer-cli"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"composer-cli"})," is a command line utility used with\n",(0,t.jsx)(s.a,{href:"https://www.osbuild.org",children:"osbuild-composer"})," to manage blueprints, build and\nupload images, and manage source repositories."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#edit-a-blueprint",children:"Edit a Blueprint"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#build-an-image",children:"Build an image"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#monitor-the-build-status",children:"Monitor the build status"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#download-the-image",children:"Download the image"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#image-uploads",children:"Image Uploads"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#build-an-image-and-upload-results",children:"Build an image and upload results"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#json-output",children:"JSON Output"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#blueprint-format",children:"Blueprint Format"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#package-sources",children:"Package Sources"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"edit-a-blueprint",children:"Edit a Blueprint"}),"\n",(0,t.jsxs)(s.p,{children:["Start out by listing the available blueprints using ",(0,t.jsx)(s.code,{children:"composer-cli blueprints list"}),", pick one and save it to the local directory by running ",(0,t.jsx)(s.code,{children:"composer-cli blueprints save http-server"}),". If there are no blueprints available you can copy\none of the examples from ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/weldr-client/tree/main/examples",children:"here"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Edit the file (it will be saved with a .toml extension) and change the\ndescription, add a package to it. Send it back to the server by\nrunning ",(0,t.jsx)(s.code,{children:"composer-cli blueprints push http-server.toml"}),". You can verify that it was\nsaved by viewing the changelog - ",(0,t.jsx)(s.code,{children:"composer-cli blueprints changes http-server"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["See the ",(0,t.jsx)(s.a,{href:"#blueprint-format",children:"Blueprint Format"})," section for the details on how to\ncreate a blueprint."]}),"\n",(0,t.jsx)(s.h2,{id:"build-an-image",children:"Build an image"}),"\n",(0,t.jsxs)(s.p,{children:["Build a ",(0,t.jsx)(s.code,{children:"qcow2"})," disk image from this blueprint by running ",(0,t.jsx)(s.code,{children:"composer-cli compose start http-server qcow2"}),". It will print a UUID that you can use to\nkeep track of the build. You can also cancel the build if needed."]}),"\n",(0,t.jsxs)(s.p,{children:["The available types of images is displayed by ",(0,t.jsx)(s.code,{children:"composer-cli compose types"}),".\nCurrently this consists of: ami, fedora-iot-commit, openstack, qcow2, vhd, vmdk"]}),"\n",(0,t.jsxs)(s.p,{children:["You can optionally start an upload of the finished image, see\n",(0,t.jsx)(s.a,{href:"#image-uploads",children:"Image Uploads"})," for more information."]}),"\n",(0,t.jsx)(s.h2,{id:"monitor-the-build-status",children:"Monitor the build status"}),"\n",(0,t.jsxs)(s.p,{children:["Monitor it using ",(0,t.jsx)(s.code,{children:"composer-cli compose info UUID"})," where UUID is the UUID\nreturned by the start command. This will show the status of the build. You can\nview the build logs once it is in the ",(0,t.jsx)(s.code,{children:"RUNNING"})," state using ",(0,t.jsx)(s.code,{children:"composer-cli compose log UUID"})]}),"\n",(0,t.jsxs)(s.p,{children:["Once the build is in the ",(0,t.jsx)(s.code,{children:"FINISHED"})," state you can download the image."]}),"\n",(0,t.jsx)(s.h2,{id:"download-the-image",children:"Download the image"}),"\n",(0,t.jsxs)(s.p,{children:["Downloading the final image is done with ",(0,t.jsx)(s.code,{children:"composer-cli compose image UUID"})," and\nit will save the qcow2 image as ",(0,t.jsx)(s.code,{children:"UUID-disk.qcow2"})," which you can then use to\nboot a VM like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"qemu-kvm --name test-image -m 1024 -hda ./UUID-disk.qcow2\n"})}),"\n",(0,t.jsx)(s.h2,{id:"image-uploads",children:"Image Uploads"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"composer-cli"})," can upload the images to a number of services, including AWS,\nAzure, and VMWare. The upload can be started when the build is finished by\npassing the service's profile.toml to the ",(0,t.jsx)(s.code,{children:"compose start"})," command. For example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"composer-cli compose start http-server server aws.toml\n"})}),"\n",(0,t.jsx)(s.h3,{id:"providerstoml",children:"providers.toml"}),"\n",(0,t.jsx)(s.p,{children:"Each provider requires it's own set of details in order to upload to it, this\nusually involves authentication information. Each provider has its own list of\nrequirements."}),"\n",(0,t.jsx)(s.h4,{id:"aws",children:"AWS"}),"\n",(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.code,{children:"provider.toml"})," file for AWS looks like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[settings]\nbucket = "AWS Bucket"\nregion = "AWS Region"\nkey = "AWS Key"\naccessKeyID = "AWS Access Key"\nsecretAccessKey = "AWS Secret Key"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The access key and secret key can be created by going to the\n",(0,t.jsx)(s.code,{children:"IAM->Users->Security Credentials"})," section and creating a new access key. The\nsecret key will only be shown when it is first created so make sure to record\nit in a secure place. The region should be the region that you want to use the\nAMI in, and the bucket can be an existing bucket, or a new one, following the\nnormal AWS bucket naming rules. It will be created if it doesn't already exist."]}),"\n",(0,t.jsx)(s.p,{children:"When uploading the image it is first uploaded to the s3 bucket, and then\nconverted to an AMI.  If the conversion is successful the s3 object will be\ndeleted. If it fails, re-trying after correcting the problem will re-use the\nobject if you have not deleted it in the meantime, speeding up the process."}),"\n",(0,t.jsx)(s.h4,{id:"azure",children:"Azure"}),"\n",(0,t.jsxs)(s.p,{children:["For Azure the ",(0,t.jsx)(s.code,{children:"provider.toml"})," looks like:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[settings]\nstorageAccount = "account"\nstorageAccessKey = "key"\ncontainer = "container"\n'})}),"\n",(0,t.jsx)(s.h4,{id:"vmware",children:"VMWare"}),"\n",(0,t.jsxs)(s.p,{children:["The VMWare ",(0,t.jsx)(s.code,{children:"provider.toml"})," uses this template:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[settings]\nhost =  "Hostname"\nusername =  "Username"\npassword = "Password"\ndatacenter = "Datacenter"\ncluster = "Cluster"\ndatastore = "Datastore"\n'})}),"\n",(0,t.jsx)(s.h2,{id:"build-an-image-and-upload-results",children:"Build an image and upload results"}),"\n",(0,t.jsxs)(s.p,{children:["If you have a profile named ",(0,t.jsx)(s.code,{children:"test-uploads"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'composer-cli compose start example-http-server ami "http image" aws test-uploads\n'})}),"\n",(0,t.jsx)(s.p,{children:"Or if you have the settings stored in a TOML file:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'composer-cli compose start example-http-server ami "http image" aws-settings.toml\n'})}),"\n",(0,t.jsxs)(s.p,{children:["It will return the UUID of the image build, and the UUID of the upload. Once\nthe build has finished successfully it will start the upload process, which you\ncan monitor with ",(0,t.jsx)(s.code,{children:"composer-cli upload info <UPLOAD-UUID>"})]}),"\n",(0,t.jsx)(s.p,{children:"You can also view the upload logs from the Ansible playbook with:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"composer-cli upload log <UPLOAD-UUID>\n"})}),"\n",(0,t.jsx)(s.p,{children:"The type of the image must match the type supported by the provider."}),"\n",(0,t.jsx)(s.h2,{id:"json-output",children:"JSON Output"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"composer-cli"})," can output the JSON data returned by the ",(0,t.jsx)(s.code,{children:"osbuild-composer"})," API,\neither for debugging or testing purposes. The return format is a JSON 'object'\nthat contains 4 fields: ",(0,t.jsx)(s.code,{children:"method"})," with the HTTP method used to make the request,\n",(0,t.jsx)(s.code,{children:"path"})," is the API path that was called, ",(0,t.jsx)(s.code,{children:"status"})," is the HTTP return code from\nthe server, and ",(0,t.jsx)(s.code,{children:"body"})," contains the raw JSON returned by the server."]}),"\n",(0,t.jsx)(s.p,{children:"Some commands send 2 requests to the server in order to retrieve all the\nresults at once.  The API supports pagination and defaults to 20 items, so you\nneed to find the total and set the limit to that total in order to get all of\nthem."}),"\n",(0,t.jsxs)(s.p,{children:["For example, the JSON response from a ",(0,t.jsx)(s.code,{children:"composer-cli blueprints list"})," looks like\nthis:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[{\n    "method": "GET",\n    "path": "/blueprints/list?limit=0",\n    "status": 200,\n    "body": {\n        "blueprints": [],\n        "limit": 0,\n        "offset": 0,\n        "total": 3\n    }\n},\n{\n    "method": "GET",\n    "path": "/blueprints/list?limit=23",\n    "status": 200,\n    "body": {\n        "blueprints": [\n            "http-server-bp-1"\n            "database-bp-1"\n            "dev-bp-1"\n        ],\n        "limit": 3,\n        "offset": 0,\n        "total": 3\n    }\n}]\n'})}),"\n",(0,t.jsx)(s.p,{children:"NOTE: This output format changed in weldr-client v35.6, it used to be a stream of objectes and is\nnow a proper JSON list of objects, making it easier to parse."}),"\n",(0,t.jsx)(s.h2,{id:"blueprint-format",children:"Blueprint Format"}),"\n",(0,t.jsxs)(s.p,{children:["Blueprints are simple text files in ",(0,t.jsx)(s.a,{href:"https://github.com/toml-lang/toml",children:"TOML"})," format that describe\nwhich packages, and what versions, to install into the image. They can also define a limited set\nof customizations to make to the final image."]}),"\n",(0,t.jsxs)(s.p,{children:["Example blueprints can be found in ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/weldr-client/tree/main/examples",children:"here"}),", with a simple one looking like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'name = "base"\ndescription = "A base system with bash"\nversion = "0.0.1"\n\n[[packages]]\nname = "bash"\nversion = "4.4.*"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"name"})," field is the name of the blueprint. It can contain spaces, but they will be converted to ",(0,t.jsx)(s.code,{children:"-"}),"\nwhen it is written to disk. It should be short and descriptive."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"description"})," can be a longer description of the blueprint, it is only used for display purposes."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"version"})," is a ",(0,t.jsx)(s.a,{href:"https://semver.org/",children:"semver compatible"})," version number. If\na new blueprint is uploaded with the same ",(0,t.jsx)(s.code,{children:"version"})," the server will\nautomatically bump the PATCH level of the ",(0,t.jsx)(s.code,{children:"version"}),". If the ",(0,t.jsx)(s.code,{children:"version"}),"\ndoesn't match it will be used as is. eg. Uploading a blueprint with ",(0,t.jsx)(s.code,{children:"version"}),"\nset to ",(0,t.jsx)(s.code,{children:"0.1.0"})," when the existing blueprint ",(0,t.jsx)(s.code,{children:"version"})," is ",(0,t.jsx)(s.code,{children:"0.0.1"})," will\nresult in the new blueprint being stored as ",(0,t.jsx)(s.code,{children:"version 0.1.0"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"packages-and-modules",children:"[[packages]] and [[modules]]"}),"\n",(0,t.jsx)(s.p,{children:"These entries describe the package names and matching version glob to be installed into the image."}),"\n",(0,t.jsxs)(s.p,{children:["The names must match the names exactly, and the versions can be an exact match\nor a filesystem-like glob of the version using ",(0,t.jsx)(s.code,{children:"*"})," wildcards and ",(0,t.jsx)(s.code,{children:"?"}),"\ncharacter matching."]}),"\n",(0,t.jsxs)(s.p,{children:["NOTE: Currently there is no difference between ",(0,t.jsx)(s.code,{children:"packages"})," and ",(0,t.jsx)(s.code,{children:"modules"}),". In\nthe future the ",(0,t.jsx)(s.code,{children:"modules"})," list may be used for module support, so it is best to\njust use ",(0,t.jsx)(s.code,{children:"[[packages]]"})," for now."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, to install ",(0,t.jsx)(s.code,{children:"tmux-2.9a"})," and ",(0,t.jsx)(s.code,{children:"openssh-server-8.*"}),", you would add\nthis to your blueprint:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[[packages]]\nname = "tmux"\nversion = "2.9a"\n\n[[packages]]\nname = "openssh-server"\nversion = "8.*"\n'})}),"\n",(0,t.jsx)(s.h3,{id:"groups",children:"[[groups]]"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"groups"})," entries describe a group of packages to be installed into the image.  Package groups are\ndefined in the repository metadata.  Each group has a descriptive name used primarily for display\nin user interfaces and an ID more commonly used in kickstart files.  Here, the ID is the expected\nway of listing a group."]}),"\n",(0,t.jsx)(s.p,{children:"Groups have three different ways of categorizing their packages:  mandatory, default, and optional.\nFor purposes of blueprints, mandatory and default packages will be installed.  There is no mechanism\nfor selecting optional packages."}),"\n",(0,t.jsxs)(s.p,{children:["For example, if you want to install the ",(0,t.jsx)(s.code,{children:"anaconda-tools"})," group you would add this to your\nblueprint:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[[groups]]\nname="anaconda-tools"\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"groups"})," is a TOML list, so each group needs to be listed separately, like ",(0,t.jsx)(s.code,{children:"packages"})," but with\nno version number."]}),"\n",(0,t.jsx)(s.h3,{id:"customizations",children:"Customizations"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"[customizations]"})," section can be used to configure the hostname of the final image. eg.:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[customizations]\nhostname = "baseimage"\n'})}),"\n",(0,t.jsx)(s.p,{children:"This is optional and may be left out to use the defaults."}),"\n",(0,t.jsx)(s.h4,{id:"customizationskernel",children:"[customizations.kernel]"}),"\n",(0,t.jsxs)(s.p,{children:["This allows you to append arguments to the bootloader's kernel commandline. This will not have any\neffect on ",(0,t.jsx)(s.code,{children:"tar"})," or ",(0,t.jsx)(s.code,{children:"ext4-filesystem"})," images since they do not include a bootloader."]}),"\n",(0,t.jsx)(s.p,{children:"For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[customizations.kernel]\nappend = "nosmt=force"\n'})}),"\n",(0,t.jsx)(s.h4,{id:"customizationssshkey",children:"[[customizations.sshkey]]"}),"\n",(0,t.jsx)(s.p,{children:"Set an existing user's ssh key in the final image:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[[customizations.sshkey]]\nuser = "root"\nkey = "PUBLIC SSH KEY"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The key will be added to the user's ",(0,t.jsx)(s.code,{children:"authorized_keys"})," file."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"WARNING"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"key"})," expects the entire content of ",(0,t.jsx)(s.code,{children:"~/.ssh/id_rsa.pub"}),", make sure it is the public key."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h4,{id:"customizationsuser",children:"[[customizations.user]]"}),"\n",(0,t.jsxs)(s.p,{children:["Add a user to the image, and/or set their ssh key.\nAll fields for this section are optional except for the ",(0,t.jsx)(s.code,{children:"name"}),", here is a complete example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[[customizations.user]]\nname = "admin"\ndescription = "Administrator account"\npassword = "$6$CHO2$3rN8eviE2t50lmVyBYihTgVRHcaecmeCk31L..."\nkey = "PUBLIC SSH KEY"\nhome = "/srv/widget/"\nshell = "/usr/bin/bash"\ngroups = ["widget", "users", "wheel"]\nuid = 1200\ngid = 1200\n'})}),"\n",(0,t.jsxs)(s.p,{children:["If the password starts with ",(0,t.jsx)(s.code,{children:"$6$"}),", ",(0,t.jsx)(s.code,{children:"$5$"}),", or ",(0,t.jsx)(s.code,{children:"$2b$"})," it will be stored as\nan encrypted password. Otherwise it will be treated as a plain text password."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"WARNING"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"key"})," expects the entire content of ",(0,t.jsx)(s.code,{children:"~/.ssh/id_rsa.pub"}),", make sure it is the public key."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h4,{id:"customizationsgroup",children:"[[customizations.group]]"}),"\n",(0,t.jsxs)(s.p,{children:["Add a new group to the image. ",(0,t.jsx)(s.code,{children:"name"})," is required and ",(0,t.jsx)(s.code,{children:"gid"})," is optional:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[[customizations.group]]\nname = "widget"\ngid = 1130\n'})}),"\n",(0,t.jsx)(s.h4,{id:"customizationstimezone",children:"[customizations.timezone]"}),"\n",(0,t.jsx)(s.p,{children:"Customizing the timezone and the NTP servers to use for the system:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[customizations.timezone]\ntimezone = "US/Eastern"\nntpservers = ["0.north-america.pool.ntp.org", "1.north-america.pool.ntp.org"]\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The values supported by ",(0,t.jsx)(s.code,{children:"timezone"})," can be listed by running ",(0,t.jsx)(s.code,{children:"timedatectl list-timezones"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If no timezone is setup the system will default to using ",(0,t.jsx)(s.code,{children:"UTC"}),". The ntp servers are also\noptional and will default to using the distribution defaults which are fine for most uses."]}),"\n",(0,t.jsx)(s.p,{children:"In some image types there are already NTP servers setup, eg. Google cloud image, and they\ncannot be overridden because they are required to boot in the selected environment. But the\ntimezone will be updated to the one selected in the blueprint."}),"\n",(0,t.jsx)(s.h4,{id:"customizationslocale",children:"[customizations.locale]"}),"\n",(0,t.jsx)(s.p,{children:"Customize the locale settings for the system:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[customizations.locale]\nlanguages = ["en_US.UTF-8"]\nkeyboard = "us"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The values supported by ",(0,t.jsx)(s.code,{children:"languages"})," can be listed by running ",(0,t.jsx)(s.code,{children:"localectl list-locales"})," from\nthe command line."]}),"\n",(0,t.jsxs)(s.p,{children:["The values supported by ",(0,t.jsx)(s.code,{children:"keyboard"})," can be listed by running ",(0,t.jsx)(s.code,{children:"localectl list-keymaps"})," from\nthe command line."]}),"\n",(0,t.jsxs)(s.p,{children:["Multiple languages can be added. The first one becomes the\nprimary, and the others are added as secondary. One or the other of ",(0,t.jsx)(s.code,{children:"languages"}),"\nor ",(0,t.jsx)(s.code,{children:"keyboard"})," must be included (or both) in the section."]}),"\n",(0,t.jsx)(s.h4,{id:"customizationsfirewall",children:"[customizations.firewall]"}),"\n",(0,t.jsxs)(s.p,{children:["By default the firewall blocks all access except for services that enable their ports explicitly,\nlike ",(0,t.jsx)(s.code,{children:"sshd"}),". This command can be used to open other ports or services. Ports are configured using\nthe port",":protocol"," format:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[customizations.firewall]\nports = ["22:tcp", "80:tcp", "imap:tcp", "53:tcp", "53:udp"]\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Numeric ports, or their names from ",(0,t.jsx)(s.code,{children:"/etc/services"})," can be used in the ",(0,t.jsx)(s.code,{children:"ports"})," enabled/disabled lists."]}),"\n",(0,t.jsxs)(s.p,{children:["The blueprint settings extend any existing settings in the image templates, so if ",(0,t.jsx)(s.code,{children:"sshd"})," is\nalready enabled it will extend the list of ports with the ones listed by the blueprint."]}),"\n",(0,t.jsxs)(s.p,{children:["If the distribution uses ",(0,t.jsx)(s.code,{children:"firewalld"})," you can specify services listed by ",(0,t.jsx)(s.code,{children:"firewall-cmd --get-services"}),"\nin a ",(0,t.jsx)(s.code,{children:"customizations.firewall.services"})," section:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[customizations.firewall.services]\nenabled = ["ftp", "ntp", "dhcp"]\ndisabled = ["telnet"]\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Remember that the ",(0,t.jsx)(s.code,{children:"firewall.services"})," are different from the names in ",(0,t.jsx)(s.code,{children:"/etc/services"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Both are optional, if they are not used leave them out or set them to an empty list ",(0,t.jsx)(s.code,{children:"[]"}),". If you\nonly want the default firewall setup this section can be omitted from the blueprint."]}),"\n",(0,t.jsx)(s.p,{children:"NOTE: Some compose types disable the firewall, this cannot be overridden by the blueprint."}),"\n",(0,t.jsx)(s.h4,{id:"customizationsservices",children:"[customizations.services]"}),"\n",(0,t.jsxs)(s.p,{children:["This section can be used to control which services are enabled at boot time.\nSome image types already have services enabled or disabled in order for the\nimage to work correctly, and cannot be overridden. eg. ",(0,t.jsx)(s.code,{children:"ami"})," requires\n",(0,t.jsx)(s.code,{children:"sshd"}),", ",(0,t.jsx)(s.code,{children:"chronyd"}),", and ",(0,t.jsx)(s.code,{children:"cloud-init"}),". Without them the image will not\nboot. Blueprint services are added to, not replacing, the list already in the\ncompose type, if any."]}),"\n",(0,t.jsxs)(s.p,{children:["The service names are systemd service units. You may specify any systemd unit\nfile accepted by ",(0,t.jsx)(s.code,{children:"systemctl enable"})," eg. ",(0,t.jsx)(s.code,{children:"cockpit.socket"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[customizations.services]\nenabled = ["sshd", "cockpit.socket", "httpd"]\ndisabled = ["postfix", "telnetd"]\n'})}),"\n",(0,t.jsx)(s.h2,{id:"package-sources",children:"Package Sources"}),"\n",(0,t.jsxs)(s.p,{children:["By default osbuild-composer uses the host's configured repositories.\nThese are immutable system\nrepositories and cannot be deleted or changed. If you want to add additional\nrepos use the ",(0,t.jsx)(s.code,{children:"composer-cli sources"})," command to create them."]}),"\n",(0,t.jsxs)(s.p,{children:["A new source repository can be added by creating a TOML file with the details\nof the repository and add it to the server with ",(0,t.jsx)(s.code,{children:"composer-cli sources add newrepo.toml"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'name = "custom-source-1"\nurl = "https://url/path/to/repository/"\ntype = "yum-baseurl"\nproxy = "https://proxy-url/"\ncheck_ssl = true\ncheck_gpg = true\ngpgkey_urls = ["https://url/path/to/gpg-key"]\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"proxy"})," and ",(0,t.jsx)(s.code,{children:"gpgkey_urls"})," entries are optional. All of the others are required. The supported\ntypes for the urls are:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"yum-baseurl"})," is a URL to a yum repository."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"yum-mirrorlist"})," is a URL for a mirrorlist."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"yum-metalink"})," is a URL for a metalink."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"check_ssl"})," is true the https certificates must be valid. If they are\nself-signed you can either set this to false, or add your Certificate Authority\nto the host system."]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"check_gpg"})," is true the GPG key must either be installed on the host system, or ",(0,t.jsx)(s.code,{children:"gpgkey_urls"}),"\nshould point to it."]}),"\n",(0,t.jsxs)(s.p,{children:["You can edit an existing source (other than system sources), by using ",(0,t.jsx)(s.code,{children:"sources add"})," or ",(0,t.jsx)(s.code,{children:"sources change"})," with the new version of the source. It will overwrite\nthe previous one."]}),"\n",(0,t.jsxs)(s.p,{children:["A list of existing sources is available ",(0,t.jsx)(s.code,{children:"composer-cli sources list"}),", and detailed info\non a source can be retrieved with ",(0,t.jsx)(s.code,{children:"composer-cli sources info SOURCE-NAME"}),". Deleting a non-system source is done using ",(0,t.jsx)(s.code,{children:"composer-cli sources delete SOURCE-NAME"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The configured sources are used for all blueprint depsolve operations, and for composing images.\nWhen adding additional sources you must make sure that the packages in the source do not\nconflict with any other package sources, otherwise depsolving will fail."})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var i=n(6540);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);