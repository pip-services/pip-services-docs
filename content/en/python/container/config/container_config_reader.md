---
type: docs
title: "ContainerConfigReader"
linkTitle: "ContainerConfigReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Helper class that reads container configuration from JSON or YAML file.
---


#### read_from_file
Reads container configuration from JSON or YAML file.
The type of the file is determined by file extension.

> `static` read_from_file(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlation_id**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id to trace execution through call chain.
- **path**: str - a path to component configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - the read container configuration


#### read_from_json_file
Reads container configuration from JSON file.

> `static` read_from_json_file(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlation_id**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id to trace execution through call chain.
- **path**: str - a path to component configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - the read container configuration


#### read_from_json_file
Reads container configuration from YAML file.

> `static` read_from_yaml_file(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig](../container_config)

- **correlation_id**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id to trace execution through call chain.
- **path**: str - a path to component configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ContainerConfig](../container_config) - the read container configuration
