---
type: docs
title: "ContainerConfig"
linkTitle: "ContainerConfig"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-container-go"
description: >
    Container configuration defined as a list of component configurations.
---

**Implements:** [ComponentConfig](../component_config)

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

> NewContainerConfigFromValue(value any) [ContainerConfig]()

- **value**: any - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.


### Methods

#### ReadContainerConfigFromConfig
Creates a new ContainerConfig object based on configuration parameters.
Each section in the configuration parameters is converted into a component configuration.

> ReadContainerConfigFromConfig(config [*config.ConfigParams](../../../components/config/config_params)) ([ContainerConfig](), error)

- **config**: [ConfigParams](../../../components/config/config_params) - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object or error.




