"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8842],{7557:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=t(5893),s=t(1151);const o={},r="Partitioning",a={id:"user-guide/partitioning",title:"Partitioning",description:"The final partition table of an image built with image builder is determined by a combination of the following:",source:"@site/docs/user-guide/07-partitioning.md",sourceDirName:"user-guide",slug:"/user-guide/partitioning",permalink:"/docs/user-guide/partitioning",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/user-guide/07-partitioning.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"userguide",previous:{title:"Uploading an ostree commit to Pulp",permalink:"/docs/user-guide/uploading-to-pulp-stree"},next:{title:"Firstboot script",permalink:"/docs/user-guide/firstboot"}},l={},h=[{value:"General principles",id:"general-principles",level:2},{value:"Modifying partition tables",id:"modifying-partition-tables",level:2},{value:"Partitioning modes",id:"partitioning-modes",level:3},{value:"Mountpoints",id:"mountpoints",level:3},{value:"Image size",id:"image-size",level:3},{value:"Creating images with exact sizes",id:"creating-images-with-exact-sizes",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"partitioning",children:"Partitioning"})}),"\n",(0,n.jsx)(i.p,{children:"The final partition table of an image built with image builder is determined by a combination of the following:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"The base partition table for a given image type."}),"\n",(0,n.jsxs)(i.li,{children:["The relevant blueprint customizations:","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"blueprint-reference#partitioning-mode",children:"Partitioning mode"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"blueprint-reference#filesystems",children:"Filesystem customizations"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["The image size parameter of the build request.","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["On the command line, this is the ",(0,n.jsx)(i.code,{children:"--size"})," argument of the ",(0,n.jsx)(i.code,{children:"composer-cli compose start"})," command."]}),"\n",(0,n.jsxs)(i.li,{children:["In the service, this is the ",(0,n.jsx)(i.code,{children:"size"})," parameter of an ",(0,n.jsx)(i.code,{children:"image_request"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This page describes how these elements affect the final layout of the partition table."}),"\n",(0,n.jsx)(i.h2,{id:"general-principles",children:"General principles"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"All sizes, whether for specific filesystems or the image itself, are treated as minimum requirements. This means the full disk image size is always larger than the size of the sum of the partitions, due to requirements for headers and metadata."}),"\n",(0,n.jsx)(i.li,{children:"The partition that contains the root filesystem, whether this is a plain formatted partition, an LVM Volume Group, or a Btrfs partition, is always last in the partition table layout."}),"\n",(0,n.jsx)(i.li,{children:"In the case of raw partitioning (no LVM and no Btrfs), the partition containing the root filesystem is grown to fill any left over space on the partition table. Logical Volumes are not grown to fill the space in the Volume Group since they are trivial to grow on a live system."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["In addition to the above, certain directories have hard-coded minimum sizes which cannot be overridden. These are 1 GiB for ",(0,n.jsx)(i.code,{children:"/"})," and 2 GiB for ",(0,n.jsx)(i.code,{children:"/usr"}),". This means that, if ",(0,n.jsx)(i.code,{children:"/usr"})," is not on a separate partition, the root filesystem will always be at least 3 GiB."]}),"\n",(0,n.jsx)(i.h2,{id:"modifying-partition-tables",children:"Modifying partition tables"}),"\n",(0,n.jsx)(i.h3,{id:"partitioning-modes",children:"Partitioning modes"}),"\n",(0,n.jsx)(i.p,{children:"The partitioning mode controls how the partition table is modified from the image type's default layout."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"raw"})," will not convert any partition to LVM or Btrfs."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"lvm"})," will always convert the partition that contains the root mountpoint ",(0,n.jsx)(i.code,{children:"/"})," to an LVM Volume Group and create a root Logical Volume. Any extra mountpoints, except ",(0,n.jsx)(i.code,{children:"/boot"}),", will be added to the Volume Group as new Logical Volumes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"btrfs"})," will convert the partition that contains the root mountpoint ",(0,n.jsx)(i.code,{children:"/"})," to a Btrfs volume and create a root subvolume. Any extra mountpoints, except ",(0,n.jsx)(i.code,{children:"/boot"}),", will be added to the Btrfs volume as new Btrfs subvolumes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"auto-lvm"})," is the default mode and will convert a raw partition table to an LVM-based one if and only if new mountpoints are defined in the ",(0,n.jsx)(i.a,{href:"blueprint-reference#filesystems",children:"filesystems customization"}),". See also the ",(0,n.jsx)(i.a,{href:"#mountpoints",children:"Mountpoints"})," section below."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"mountpoints",children:"Mountpoints"}),"\n",(0,n.jsxs)(i.p,{children:["New filesystems and minimum partition sizes are defined using the ",(0,n.jsx)(i.a,{href:"blueprint-reference#filesystems",children:"filesystems customization"})," in the blueprint. By default, if new mountpoints are created, a partition table is automatically converted to LVM (see ",(0,n.jsx)(i.a,{href:"#partitioning-modes",children:"Partitioning modes"})," above)."]}),"\n",(0,n.jsx)(i.h3,{id:"image-size",children:"Image size"}),"\n",(0,n.jsxs)(i.p,{children:["The minimum size of the partition table, which in turn will be the size of the disk image. The final size of the image will either be the value of the ",(0,n.jsx)(i.code,{children:"size"})," parameter or the sum of all partitions and their associated metadata, whichever is larger."]}),"\n",(0,n.jsx)(i.h2,{id:"creating-images-with-exact-sizes",children:"Creating images with exact sizes"}),"\n",(0,n.jsxs)(i.p,{children:["If a disk image of a very specific size is required, the exact ",(0,n.jsx)(i.a,{href:"#image-size",children:"Image size"})," should be specified in the build request and any ",(0,n.jsx)(i.a,{href:"#mountpoints",children:"Mountpoints"})," defined as customizations should specify sizes that are smaller than the total size in sum. The partition table, partitions, and other entities often require extra space for metadata and headers, so the space required to fit all the mountpoints is always larger than the sum of the size of the partitions. The exact size of the extra space that is required varies based on too many factors to cover here exhaustively."]}),"\n",(0,n.jsx)(i.p,{children:"The best strategy for creating a disk image of a very specific size is the following:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Set the ",(0,n.jsx)(i.a,{href:"#image-size",children:"Image size"})," parameter to the desired size."]}),"\n",(0,n.jsxs)(i.li,{children:["Add any extra desired mountpoints with their required minimum sizes, making sure that the sum of the sizes is smaller than the image size by at least 3.01 GiB if there is no ",(0,n.jsx)(i.code,{children:"/usr"})," mountpoint, or at least 1.01 GiB if there is.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The extra 0.01 MiB is more than enough for the headers and metadata for which extra space might be reserved."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Do not specify a size for the ",(0,n.jsx)(i.code,{children:"/"})," mountpoint."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The combination above will create a disk with a partition table of the desired size with each partition sized to fit the desired mountpoints. The root partition (or root LVM Logical Volume) will be at least 3 GiB (or 1 GiB if ",(0,n.jsx)(i.code,{children:"/usr"})," is specified) (see note on directory sizes in ",(0,n.jsx)(i.a,{href:"#general-principles",children:"General principles"})," above)."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"If the partition table does not have any LVM Volume Groups or Btrfs volumes, the root partition will be grown to fill the remaining space."}),"\n",(0,n.jsx)(i.li,{children:"If the partition table contains an LVM Volume Group, the VG will have unallocated extents that can be used to grow any of the Logical Volumes."}),"\n",(0,n.jsx)(i.li,{children:"If the partition table contains a Btrfs volume, the partition for that volume will be grown to fill the remaining space."}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>r});var n=t(7294);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);