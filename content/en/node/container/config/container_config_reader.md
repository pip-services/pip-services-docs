---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Static methods

#### readFromFile
Reads a container's configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> `public static` readFromFile(correlationId: string, path: string, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlationId**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### readFromJsonFile
Reads a container's configuration from a JSON file.

> `public static` readFromJsonFile(correlationId: string, path: string, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlationId**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### readFromYamlFile
Reads container configuration from a YAML file.

> `public static` readFromYamlFile(correlationId: string, path: string, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlationId**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration
