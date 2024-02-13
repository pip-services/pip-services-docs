---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Helper class that reads a container's configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Static methods

#### read_from_file
Reads a container's configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> `static` read_from_file(context: Optional[IContext], path: str, parameters: [ConfigParams](../../../components/config/config_params)): [ContainerConfig](../container_config)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: str - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or None to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### read_from_json_file
Reads a container's configuration from a JSON file.

> `static` read_from_json_file(context: Optional[IContext], path: str, parameters: [ConfigParams](../../../components/config/config_params)): [ContainerConfig](../container_config)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: str - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or None to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### read_from_yalm_file
Reads container configuration from a YAML file.

> `static` read_from_yaml_file(context: Optional[IContext], path: str, parameters: [ConfigParams](../../../components/config/config_params)): [ContainerConfig](../container_config)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: str - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or None to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration
