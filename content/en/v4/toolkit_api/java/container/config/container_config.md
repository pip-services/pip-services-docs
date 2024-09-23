---
type: docs
title: "ContainerConfig"
linkTitle: "ContainerConfig"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
description: >
    Container configuration defined as a list of component configurations.
---

**Extends:** Array<[ComponentConfig](../component_config)>

### Description

The ContainerConfig class allows you to create a container configuration as a list of component configurations.

### Constructors
Creates a new instance of ContainerConfig.

> `public` ContainerConfig(Collection<[ComponentConfig](../component_config)> components)

- **components**: Collection<[ComponentConfig](../component_config)> - (optional) list of component configurations.


### Static methods

#### fromConfig
Creates a new ContainerConfig object based on configuration parameters.
Each section in the configuration parameters is converted into a component configuration.

> `public static` [ContainerConfig] fromConfig([ConfigParams](../../../commons/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../commons/config/config_params) - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig] - created ContainerConfig object.


#### fromValue
Creates a new ContainerConfig object filled with key-value pairs from a specified object.
The value is converted into ConfigParams object which is used to create the new object.

> `public static` [ContainerConfig] fromValue(value: Object)

- **value**: Object - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig] - created ContainerConfig object.
