"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[877],{3672:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.kickstart","title":"org.osbuild.kickstart","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.kickstart.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.kickstart","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.kickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.kickstart.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.kickstart.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.keymap","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.keymap"},"next":{"title":"org.osbuild.livesys","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.livesys"}}');var s=t(4848),r=t(8453);const o={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.kickstart.meta.json"},a="org.osbuild.kickstart",p={},d=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"orgosbuildkickstart",children:"org.osbuild.kickstart"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Create an Anaconda kickstart file"})}),"\n",(0,s.jsxs)(e.p,{children:["Kickstart files are a way to program the Anaconda\ninstaller.  This stage can be used to create such\na kickstart file at the location given by ",(0,s.jsx)(e.code,{children:"path"}),".\nOnly a very limited set of available kickstart\ncommands are supported here."]}),"\n",(0,s.jsx)(e.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "definitions": {\n    "ksboolean-from-pykickstart-ref": {\n      "enum": [\n        "yes",\n        "on",\n        "true",\n        "1",\n        1,\n        "off",\n        "no",\n        "false",\n        "0",\n        0\n      ]\n    },\n    "network-options-ref": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "Configures network information for the target system and activates network devices in the installation environment",\n      "required": [\n        "device"\n      ],\n      "properties": {\n        "activate": {\n          "description": "Activate (or reactivate) the device. When set to false prevents the device from automatically activating on boot",\n          "type": "boolean"\n        },\n        "bootproto": {\n          "description": "Boot protocol selection",\n          "enum": [\n            "dhcp",\n            "bootp",\n            "ibft",\n            "static"\n          ]\n        },\n        "device": {\n          "description": "Specifies the device to be configured",\n          "type": "string",\n          "pattern": "^([a-zA-Z0-9]{2,16}|(([a-fA-F0-9]{2}:){5}[a-fA-F0-9A]{2}))$"\n        },\n        "onboot": {\n          "description": "Whether or not to enable the device at boot time",\n          "$ref": "#/definitions/ksboolean-from-pykickstart-ref"\n        },\n        "ip": {\n          "description": "IP address of the device",\n          "type": "string",\n          "pattern": "^(((25[0-5]|(2[0-4]|1\\\\d|[1-9]|)\\\\d)\\\\.?\\\\b){4}|auto)$"\n        },\n        "ipv6": {\n          "description": "IPv6 address of the device, in the form of address[/prefix length]",\n          "type": "string"\n        },\n        "gateway": {\n          "description": "Default gateway as a single IPv4 address",\n          "type": "string",\n          "pattern": "^((25[0-5]|(2[0-4]|1\\\\d|[1-9]|)\\\\d)\\\\.?\\\\b){4}$"\n        },\n        "ipv6gateway": {\n          "description": "Default gateway as a single IPv6 address",\n          "type": "string"\n        },\n        "nameservers": {\n          "description": "DNS name servesr, a list of IP addresses",\n          "type": "array",\n          "minSize": 1,\n          "items": {\n            "type": "string",\n            "pattern": "^((25[0-5]|(2[0-4]|1\\\\d|[1-9]|)\\\\d)\\\\.?\\\\b){4}$"\n          }\n        },\n        "netmask": {\n          "description": "Network mask for the installed system",\n          "type": "string"\n        },\n        "hostname": {\n          "description": "Host name for the installed system",\n          "type": "string",\n          "pattern": "(?=^.{1,253}$)^[a-zA-Z0-9][a-zA-Z0-9-]{0,62}((\\\\.[a-zA-Z0-9][a-zA-Z0-9-]{0,62})+)?$"\n        },\n        "essid": {\n          "description": "The network ID for wireless networks",\n          "type": "string"\n        },\n        "wpakey": {\n          "description": "The WPA encryption key for wireless networks",\n          "type": "string"\n        }\n      }\n    }\n  },\n  "additionalProperties": false,\n  "anyOf": [\n    {\n      "required": [\n        "path",\n        "ostree"\n      ],\n      "not": {\n        "required": [\n          "ostreecontainer"\n        ]\n      }\n    },\n    {\n      "required": [\n        "path",\n        "ostreecontainer"\n      ],\n      "not": {\n        "required": [\n          "ostree"\n        ]\n      }\n    },\n    {\n      "required": [\n        "path"\n      ],\n      "not": {\n        "required": [\n          "ostree",\n          "ostreecontainer"\n        ]\n      }\n    }\n  ],\n  "properties": {\n    "path": {\n      "type": "string",\n      "description": "Where to place the kickstart file"\n    },\n    "ostree": {\n      "type": "object",\n      "required": [\n        "osname",\n        "url",\n        "ref"\n      ],\n      "additionalProperties": false,\n      "properties": {\n        "osname": {\n          "type": "string"\n        },\n        "url": {\n          "type": "string"\n        },\n        "ref": {\n          "type": "string"\n        },\n        "remote": {\n          "type": "string",\n          "description": "The remote to tie tie commit to"\n        },\n        "gpg": {\n          "type": "boolean",\n          "default": true\n        }\n      }\n    },\n    "ostreecontainer": {\n      "type": "object",\n      "required": [\n        "url"\n      ],\n      "additionalProperties": false,\n      "properties": {\n        "stateroot": {\n          "type": "string"\n        },\n        "url": {\n          "type": "string"\n        },\n        "transport": {\n          "type": "string",\n          "enum": [\n            "registry",\n            "oci",\n            "oci-archive",\n            "dir"\n          ],\n          "description": "Use the given transport, Anaconda\'s default is \'registry\'"\n        },\n        "remote": {\n          "type": "string"\n        },\n        "signatureverification": {\n          "type": "boolean",\n          "default": true\n        }\n      }\n    },\n    "liveimg": {\n      "type": "object",\n      "required": [\n        "url"\n      ],\n      "properties": {\n        "url": {\n          "type": "string"\n        }\n      }\n    },\n    "groups": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "Keys are group names, values are objects with group info",\n      "patternProperties": {\n        "^[A-Za-z0-9_][A-Za-z0-9_-]{0,31}$": {\n          "type": "object",\n          "properties": {\n            "gid": {\n              "type": "number",\n              "description": "GID for this group"\n            }\n          }\n        }\n      }\n    },\n    "users": {\n      "additionalProperties": false,\n      "type": "object",\n      "description": "Keys are usernames, values are objects giving user info.",\n      "patternProperties": {\n        "^[A-Za-z0-9_][A-Za-z0-9_-]{0,31}$": {\n          "type": "object",\n          "properties": {\n            "uid": {\n              "description": "User UID",\n              "type": "number"\n            },\n            "gid": {\n              "description": "User GID",\n              "type": "number"\n            },\n            "groups": {\n              "description": "Array of group names for this user",\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "description": {\n              "description": "User account description (or full name)",\n              "type": "string"\n            },\n            "home": {\n              "description": "Path to user\'s home directory",\n              "type": "string"\n            },\n            "shell": {\n              "description": "User\'s login shell",\n              "type": "string"\n            },\n            "password": {\n              "description": "User\'s encrypted password, as returned by crypt(3)",\n              "type": "string"\n            },\n            "key": {\n              "description": "SSH Public Key to add to ~/.ssh/authorized_keys",\n              "type": "string"\n            }\n          }\n        }\n      }\n    },\n    "rootpw": {\n      "type": "object",\n      "anyOf": [\n        {\n          "required": [\n            "lock"\n          ],\n          "not": {\n            "required": [\n              "allow_ssh"\n            ]\n          }\n        },\n        {\n          "required": [\n            "iscrypted",\n            "password"\n          ],\n          "not": {\n            "required": [\n              "plaintext"\n            ]\n          }\n        },\n        {\n          "required": [\n            "plaintext",\n            "password"\n          ],\n          "not": {\n            "required": [\n              "iscrypted"\n            ]\n          }\n        }\n      ],\n      "properties": {\n        "lock": {\n          "type": "boolean",\n          "description": "the root account is locked by default"\n        },\n        "plaintext": {\n          "type": "boolean",\n          "description": "the password argument is assumed to be in plain text"\n        },\n        "iscrypted": {\n          "type": "boolean",\n          "description": "the password argument is assumed to already be encrypted"\n        },\n        "allow_ssh": {\n          "type": "boolean",\n          "description": "This will allow remote root logins via ssh using only the password"\n        },\n        "password": {\n          "type": "string",\n          "description": "the root password",\n          "minLength": 1\n        }\n      }\n    },\n    "lang": {\n      "type": "string",\n      "description": "The language code (e.g. en_US.UTF-8)"\n    },\n    "keyboard": {\n      "type": "string",\n      "description": "The keyboard map (e.g. us)"\n    },\n    "timezone": {\n      "type": "string",\n      "description": "The timezone (e.g. UTC)"\n    },\n    "zerombr": {\n      "type": "boolean",\n      "description": "Reinitialize Partition Tables"\n    },\n    "clearpart": {\n      "description": "Removes partitions from the system, prior to creation of new partitions",\n      "type": "object",\n      "anyOf": [\n        {\n          "required": [\n            "all"\n          ]\n        },\n        {\n          "required": [\n            "drives"\n          ]\n        },\n        {\n          "required": [\n            "list"\n          ]\n        },\n        {\n          "required": [\n            "disklabel"\n          ]\n        },\n        {\n          "required": [\n            "linux"\n          ]\n        }\n      ],\n      "properties": {\n        "all": {\n          "description": "Erases all partitions from the system",\n          "type": "boolean"\n        },\n        "initlabel": {\n          "description": "Initializes a disk (or disks) by creating a default disk label for all disks",\n          "type": "boolean"\n        },\n        "drives": {\n          "description": "Specifies which drives to clear partitions from",\n          "type": "array",\n          "items": {\n            "type": "string",\n            "pattern": "^[A-Za-z0-9/:\\\\_|*-]+$"\n          }\n        },\n        "list": {\n          "description": "Specifies which partitions to clear",\n          "type": "array",\n          "items": {\n            "type": "string",\n            "pattern": "^[A-Za-z0-9]+$"\n          }\n        },\n        "disklabel": {\n          "description": "Create a set disk label when relabeling a disk",\n          "type": "string",\n          "pattern": "^[A-Za-z0-9_-]+$"\n        },\n        "linux": {\n          "description": "Erases all Linux partitions",\n          "type": "boolean"\n        }\n      }\n    },\n    "reboot": {\n      "description": "Reboot after the installation is successfully completed",\n      "oneOf": [\n        {\n          "type": "boolean"\n        },\n        {\n          "type": "object",\n          "additionalProperties": false,\n          "anyOf": [\n            {\n              "required": [\n                "eject"\n              ]\n            },\n            {\n              "required": [\n                "kexec"\n              ]\n            }\n          ],\n          "properties": {\n            "eject": {\n              "description": "Attempt to eject the installation media before rebooting",\n              "type": "boolean"\n            },\n            "kexec": {\n              "description": "Use this option to reboot into the new system using the kexec",\n              "type": "boolean"\n            }\n          }\n        }\n      ]\n    },\n    "display_mode": {\n      "description": "Perform the Kickstart installation in the given display mode",\n      "enum": [\n        "text",\n        "graphical",\n        "cmdline"\n      ]\n    },\n    "autopart": {\n      "description": "Automatically creates partitions",\n      "type": "object",\n      "not": {\n        "required": [\n          "pbkdf-iterations",\n          "pbkdf-time"\n        ]\n      },\n      "properties": {\n        "type": {\n          "description": "Selects one of the predefined automatic partitioning schemes you want to use",\n          "type": "string",\n          "enum": [\n            "lvm",\n            "btrfs",\n            "plain",\n            "thinp"\n          ]\n        },\n        "fstype": {\n          "description": "Specify a supported file system (such as ext4 or xfs) to replace the default when doing automatic partitioning",\n          "type": "string"\n        },\n        "nolvm": {\n          "description": "Do not use LVM or Btrfs for automatic partitioning. This option is equal to --type=plain",\n          "type": "boolean"\n        },\n        "encrypted": {\n          "description": "Encrypts all partitions",\n          "type": "boolean"\n        },\n        "passphrase": {\n          "description": "Provides a default system-wide passphrase for all encrypted devices",\n          "type": "string"\n        },\n        "escrowcert": {\n          "description": "Stores data encryption keys of all encrypted volumes as files in /root, encrypted using the X.509 certificate from the URL specified",\n          "type": "string"\n        },\n        "backuppassphrase": {\n          "description": "Adds a randomly-generated passphrase to each encrypted volume",\n          "type": "boolean"\n        },\n        "cipher": {\n          "description": "Specifies which type of encryption will be used if the Anaconda default aes-xts-plain64 is not satisfactory",\n          "type": "string"\n        },\n        "luks-version": {\n          "description": "Specifies which version of LUKS should be used to encrypt the system",\n          "type": "string"\n        },\n        "pbkdf": {\n          "description": "Sets Password-Based Key Derivation Function (PBKDF) algorithm for the LUKS keyslot",\n          "type": "string"\n        },\n        "pbkdf-memory": {\n          "description": "Sets the memory cost for PBKDF",\n          "type": "integer"\n        },\n        "pbkdf-time": {\n          "description": "Sets the number of milliseconds to spend with PBKDF passphrase processing",\n          "type": "integer"\n        },\n        "pbkdf-iterations": {\n          "description": "Sets the number of iterations for passphrase processing directly",\n          "type": "integer"\n        },\n        "nohome": {\n          "description": "Disables automatic creation of the /home partition",\n          "type": "boolean"\n        },\n        "noswap": {\n          "description": "Disables automatic creation of a swap partition",\n          "type": "boolean"\n        }\n      }\n    },\n    "network": {\n      "type": "array",\n      "minItems": 1,\n      "items": {\n        "$ref": "#/definitions/network-options-ref"\n      }\n    },\n    "bootloader": {\n      "description": "Specifies how the boot loader should be installed",\n      "additionalProperties": false,\n      "type": "object",\n      "properties": {\n        "append": {\n          "description": "Specifies additional kernel parameters",\n          "type": "string"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:"{}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);