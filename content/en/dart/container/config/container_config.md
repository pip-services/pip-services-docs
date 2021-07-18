---
type: docs
title: "ContainerConfig"
linkTitle: "ContainerConfig"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-container-dart"
description: >
    Container configuration defined as a list of component configurations.
---

**Extends:** ListBase<[ComponentConfig](../component_config)>

### Description

The ContainerConfig class allows you to create a container configuration as a list of component configurations.

### Constructors
Creates a new instance of ContainerConfig.

> ContainerConfig([List<[ComponentConfig](../component_config)> components])

- **components**: List<[ComponentConfig](../component_config)> - (optional) list of component configurations.


### Static methods

#### fromConfig
Creates a new ContainerConfig object based on configuration parameters.
Each section in the configuration parameters is converted into a component configuration.

> `static` [ContainerConfig]() fromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.


#### fromValue
Creates a new ContainerConfig object filled with key-value pairs from a specified object.
The value is converted into ConfigParams object which is used to create the new object.

> `static` [ContainerConfig]( fromValue(value)

- **value**: dynamic - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.
