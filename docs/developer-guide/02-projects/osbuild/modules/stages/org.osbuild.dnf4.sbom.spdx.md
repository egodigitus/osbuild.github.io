---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf4.sbom.spdx.meta.json
---
# org.osbuild.dnf4.sbom.spdx
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf4.sbom.spdx.meta.json )
-->

**Generate SPDX SBOM document for the installed packages.**

The stage generates a Software Bill of Materials (SBOM) document
in SPDX v2 format for the installed RPM packages. DNF4 API is used
to retrieve the installed packages and their metadata. The SBOM
document is saved in the specified path. If a tree is provided,
as an input, the stage will analyze the tree instead of the
current pipeline tree.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "description": "Options for the SPDX SBOM generator.",
    "required": [
      "config"
    ],
    "properties": {
      "config": {
        "type": "object",
        "description": "Configuration for the SPDX SBOM generator.",
        "additionalProperties": false,
        "required": [
          "doc_path"
        ],
        "properties": {
          "doc_path": {
            "type": "string",
            "pattern": "^\\/(?!\\.\\.)((?!\\/\\.\\.\\/).)+[\\w]{1,250}\\.spdx.json$",
            "description": "Path used to save the SPDX SBOM document."
          }
        }
      }
    }
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "root-tree"
    ],
    "properties": {
      "root-tree": {
        "type": "object",
        "additionalProperties": true,
        "description": "The tree containing the installed packages. If the input is not provided, the stage will analyze the tree of the current pipeline.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "org.osbuild.tree"
            ]
          }
        }
      }
    }
  }
}
```