---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-container-dotnet"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Static methods

#### ReadFromFile
Reads a container's configuration from a JSON or YAML file.
The type of the file is determined by the file extension.

> `public static` [ContainerConfig](../container_config) ReadFromFile(IContext context, string path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### ReadFromJsonFile
Reads a container's configuration from a JSON file.

> `public static` [ContainerConfig](../container_config) ReadFromJsonFile(IContext context, string path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### ReadFromYamlFile
Reads container configuration from a YAML file.

> `public static` [ContainerConfig](../container_config) ReadFromYamlFile(IContext context, string path, ConfigParams parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration

