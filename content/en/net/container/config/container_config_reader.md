---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-container-dotnet"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Static methods

#### ReadFromFile
Reads a container's configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> `public static` [ContainerConfig](../container_config) ReadFromFile(string correlationId, string path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### ReadFromJsonFile
Reads a container's configuration from a JSON file.

> `public static` [ContainerConfig](../container_config) ReadFromJsonFile(string correlationId, string path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### ReadFromYamlFile
Reads container configuration from a YAML file.

> `public static` [ContainerConfig](../container_config) ReadFromYamlFile(string correlationId, string path, ConfigParams parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration
