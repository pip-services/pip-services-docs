---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Helper class that reads container configuration from a JSON or YAML file.
---

### Description

The ContainerConfigReader class allows you to read a container's configuration from a JSON or YAML file.

### Static methods

#### read_from_file
Reads container configuration from JSON or YAML file.
The type of the file is determined by the file extension.

> `static` read_from_file(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlation_id**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.
- **path**: str - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or None to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### read_from_json_file
Reads container configuration from JSON file.

> `static` read_from_json_file(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlation_id**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.
- **path**: str - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or None to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration


#### read_from_json_file
Reads container configuration from YAML file.

> `static` read_from_yaml_file(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlation_id**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.
- **path**: str - path to the component's configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or None to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - read container configuration
