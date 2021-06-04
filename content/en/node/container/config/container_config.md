---
type: docs
title: "ContainerConfig"
linkTitle: "ContainerConfig"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
description: >
    Container configuration defined as a list of component configurations.
---

**Implements:** Array<[ComponentConfig](../component_config)>

### Description

The ContainerConfig class allows you to create a container configuration as a list of component configurations.

### Constructors
Creates a new instance of ContainerConfig.

> `public` constructor(components?: [ComponentConfig](../component_config)[])

- **components**: [ComponentConfig](../component_config)[] - (optional) list of component configurations.


### Static methods

#### fromConfig
Creates a new ContainerConfig object based on configuration parameters.
Each section in the configuration parameters is converted into a component configuration.

> `public static` fromConfig(config: [ConfigParams](../../../commons/config/config_params)): [ContainerConfig]()

- **config**: [ConfigParams](../../../commons/config/config_params) - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.


#### fromValue
Creates a new ContainerConfig object filled with key-value pairs from a specified object.
The value is converted into ConfigParams object which is used to create the new object.

> `static` fromValue(value: any): [ContainerConfig]()

- **value**: any - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.
