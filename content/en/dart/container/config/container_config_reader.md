---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-container-dart"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Static methods

#### readFromFile
Reads a container's configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> `static` Future<[ContainerConfig](../container_config)> readFromFile(String correlationId, String path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **path**: String - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: Future<[ContainerConfig](../container_config)> - read container configuration


#### readFromJsonFile
Reads a container's configuration from a JSON file.

> `static` Future<[ContainerConfig](../container_config)> readFromJsonFile(String correlationId, String path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **path**: String - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: Future<[ContainerConfig](../container_config)> - read container configuration


#### readFromYamlFile
Reads container configuration from a YAML file.

> `static` Future<[ContainerConfig](../container_config)> readFromYamlFile(String correlationId, String path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **path**: String - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: Future<[ContainerConfig](../container_config)> - read container configuration
