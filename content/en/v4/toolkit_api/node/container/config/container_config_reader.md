---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-container-node"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Static methods

#### readFromFile
Reads a container's configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> `public static` readFromFile(context: [IContext](../../../components/context/icontext), path: string, parameters: [ConfigParams](../../../components/config/config_params)): [ContainerConfig](../container_config)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### readFromJsonFile
Reads a container's configuration from a JSON file.

> `public static` readFromJsonFile(context: [IContext](../../../components/context/icontext), path: string, parameters: [ConfigParams](../../../components/config/config_params)): [ContainerConfig](../container_config)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### readFromYamlFile
Reads container configuration from a YAML file.

> `public static` readFromYamlFile(context: [IContext](../../../components/context/icontext), path: string, parameters: [ConfigParams](../../../components/config/config_params)): [ContainerConfig](../container_config)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration
