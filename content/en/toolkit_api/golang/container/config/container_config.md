---
type: docs
title: "ContainerConfig"
linkTitle: "ContainerConfig"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
description: >
    Container configuration defined as a list of component configurations.
---

**Implements:** [][ComponentConfig](../component_config)

### Description

The ContainerConfig class allows you to create a container configuration as a list of component configurations.

### Constructors

#### NewContainerConfig
Creates a new instance of ContainerConfig.

> NewContainerConfig(components ...[*ComponentConfig](../component_config)) ContainerConfig

- **components**: ...[*ComponentConfig](../component_config) - (optional) list of component configurations.


#### NewContainerConfigFromValue
Creates a new ContainerConfig object filled with key-value pairs from a specified object.
The value is converted into ConfigParams object which is used to create the new object.

> NewContainerConfigFromValue(value interface{}) [ContainerConfig]()

- **value**: interface{} - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.


### Methods

#### ReadContainerConfigFromConfig
Creates a new ContainerConfig object based on configuration parameters.
Each section in the configuration parameters is converted into a component configuration.

> ReadContainerConfigFromConfig(config [*config.ConfigParams](../../../commons/config/config_params)) ([ContainerConfig](), error)

- **config**: [ConfigParams](../../../commons/config/config_params) - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object or error.



