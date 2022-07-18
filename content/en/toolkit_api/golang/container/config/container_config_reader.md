---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Methods

#### ReadFromFile
Reads a container's configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> (c *TContainerConfigReader) ReadFromFile(correlationId string, path string, parameters [*config.ConfigParams](../../../commons/config/config_params)) ([ContainerConfig](../container_config), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters or nil to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### ReadFromJsonFile
Reads a container's configuration from a JSON file.

> (c *TContainerConfigReader) ReadFromJsonFile(correlationId string, path string, parameters [*config.ConfigParams](../../../commons/config/config_params)) ([ContainerConfig](../container_config), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters or nil to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### ReadFromYamlFile
Reads container configuration from a YAML file.

> (c *TContainerConfigReader) ReadFromYamlFile(correlationId string, path string, parameters [*config.ConfigParams](../../../commons/config/config_params)) ([ContainerConfig](../container_config), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters or nil to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration
