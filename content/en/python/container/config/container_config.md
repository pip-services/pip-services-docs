---
type: docs
title: "ContainerConfig"
linkTitle: "ContainerConfig"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Container configuration defined as a list of component configurations.
---

**Implements:** list

### Description

The ContainerConfig class allows you to create a container configuration as a list of component configurations.

### Constructors
Creates a new instance of ContainerConfig.

> ComponentConfig(components: Sequence[[ComponentConfig](../component_config)] = None)

- **components**: Sequence[[ComponentConfig](../component_config)] - (optional) list of component configurations.


### Static methods

#### from_config
Creates a new ContainerConfig object based on configuration parameters.
Each section in the configuration parameters is converted into a component configuration.

> `static` from_config(config: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig]()

- **config**: [ConfigParams](../../../commons/config/config_params) - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.


#### from_value
Creates a new ContainerConfig object filled with key-value pairs from a specified object.
The value is converted into ConfigParams object which is used to create the new object.

> `static` from_value(value: Any): [ContainerConfig]()

- **value**: [ConfigParams](../../../commons/config/config_params) - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.
