---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-container-go"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Methods

#### ReadFromFile
Reads a container's configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> ReadFromFile(ctx context.Context, correlationId string, path string, parameters [*config.ConfigParams](../../../components/config/config_params)) ([ContainerConfig](../container_config), error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters or nil to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### ReadFromJsonFile
Reads a container's configuration from a JSON file.

> ReadFromJsonFile(ctx context.Context, correlationId string, path string, parameters [*config.ConfigParams](../../../components/config/config_params)) ([ContainerConfig](../container_config), error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters or nil to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### ReadFromYamlFile
Reads container configuration from a YAML file.

> ReadFromYamlFile(ctx context.Context, correlationId string, path string, parameters [*config.ConfigParams](../../../components/config/config_params)) ([ContainerConfig](../container_config), error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the component's configuration file.
- **parameters**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters or nil to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration

