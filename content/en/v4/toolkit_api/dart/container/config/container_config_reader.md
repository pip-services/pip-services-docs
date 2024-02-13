---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-container-dart"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Static methods

#### readFromFile
Reads a container's configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> `static` Future<[ContainerConfig](../container_config)> readFromFile(IContext? context, String? path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: String? - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: Future<[ContainerConfig](../container_config)> - read container configuration


#### readFromJsonFile
Reads a container's configuration from a JSON file.

> `static` Future<[ContainerConfig](../container_config)> readFromJsonFile(IContext? context, String path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: String - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: Future<[ContainerConfig](../container_config)> - read container configuration


#### readFromYamlFile
Reads container configuration from a YAML file.

> `static` Future<[ContainerConfig](../container_config)> readFromYamlFile(IContext? context, String path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: String - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.
- **returns**: Future<[ContainerConfig](../container_config)> - read container configuration
