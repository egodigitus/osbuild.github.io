
# org.osbuild.systemd.unit.create

**Create Systemd services unit file**

This stage allows to create Systemd unit files in
`/usr/lib/systemd/system/`. The `filename` property specifies the
'.service' file to be added. These names are validated using the
same rules as specified by systemd.unit(5) and they must contain the
'.service' suffix (other types of unit files are not supported).
'unit-type' determines if the unit file is created at global or
system level,'unit-path' will determine the systemd unit load path.

The Unit configuration can currently specify the following subset
of options:
  - 'Unit' section
    - 'Description' - string
    - 'ConditionPathExists' - string
    - 'ConditionPathIsDirectory' - string
    - 'DefaultDependencies' - bool
    - 'Requires' - \[strings\]
    - 'Wants' - \[strings\]
    - 'After' - \[strings\]
  - 'Service' section
    - 'Type' - string
    - 'RemainAfterExit' - bool
    - 'ExecStartPre' - \[string\]
    - 'ExecStopPost' - \[string\]
    - 'ExecStart' - \[string\]
    - 'Environment' - \[object\]
    - 'EnvironmentFile' - \[string\]
  - 'Install' section
    - 'WantedBy' - \[string\]
    - 'RequiredBy' - \[string\]

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "filename",
    "config"
  ],
  "properties": {
    "filename": {
      "type": "string",
      "pattern": "^[\\w:.\\\\-]+[@]{0,1}[\\w:.\\\\-]*\\.service$"
    },
    "unit-type": {
      "type": "string",
      "enum": [
        "system",
        "global"
      ],
      "default": "system",
      "description": "Selects between systemd system or global unit to add dropin"
    },
    "unit-path": {
      "type": "string",
      "enum": [
        "usr",
        "etc"
      ],
      "default": "usr",
      "description": "Define the system load path"
    },
    "config": {
      "additionalProperties": false,
      "type": "object",
      "required": [
        "Unit",
        "Service",
        "Install"
      ],
      "description": "Configuration for a '.service' unit.",
      "properties": {
        "Unit": {
          "additionalProperties": false,
          "type": "object",
          "description": "'Unit' configuration section of a unit file.",
          "properties": {
            "Description": {
              "type": "string"
            },
            "Wants": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "After": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "Requires": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "ConditionPathExists": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "ConditionPathIsDirectory": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "DefaultDependencies": {
              "type": "boolean"
            }
          }
        },
        "Service": {
          "additionalProperties": false,
          "type": "object",
          "description": "'Service' configuration section of a unit file.",
          "properties": {
            "Type": {
              "type": "string",
              "enum": [
                "simple",
                "exec",
                "forking",
                "oneshot",
                "dbus",
                "notify",
                "notify-reload",
                "idle"
              ]
            },
            "RemainAfterExit": {
              "type": "boolean"
            },
            "ExecStartPre": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "ExecStopPost": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "ExecStart": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "Environment": {
              "type": "array",
              "description": "Sets environment variables for executed process.",
              "items": {
                "type": "object",
                "description": "Sets environment variables for executed process.",
                "additionalProperties": false,
                "properties": {
                  "key": {
                    "type": "string",
                    "pattern": "^[A-Za-z_][A-Za-z0-9_]*"
                  },
                  "value": {
                    "type": "string"
                  }
                }
              }
            },
            "EnvironmentFile": {
              "type": "array",
              "description": "Path to file that contains environment variables to set for the process.",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "Install": {
          "additionalProperties": false,
          "type": "object",
          "description": "'Install' configuration section of a unit file.",
          "properties": {
            "WantedBy": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "RequiredBy": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  }
}
```

## Schema 2

```json
{}
```