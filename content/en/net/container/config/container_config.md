---
type: docs
title: "ContainerConfig"
linkTitle: "ContainerConfig"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-container-dotnet"
description: >
    Container configuration defined as a list of component configurations.
---

**Implements:** List<[ComponentConfig](../component_config)>

### Description

The ContainerConfig class allows you to create a container configuration as a list of component configurations.

### Constructors
Creates a new instance of ContainerConfig.

> `public` ContainerConfig(IEnumerable<[ComponentConfig](../component_config)> components)

- **components**: IEnumerable<[ComponentConfig](../component_config)> - (optional) list of component configurations.

Creates a new instance of container configuration.

> `public` ContainerConfig()


### Static methods

#### FromConfig
Creates a new ContainerConfig object based on configuration parameters.
Each section in the configuration parameters is converted into a component configuration.

> `public static` [ContainerConfig]() FromConfig([ConfigParams](../../../commons/config/config_params config)

- **config**: [ConfigParams](../../../commons/config/config_params) - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.


#### FromObject
Creates a new ContainerConfig object filled with key-value pairs from a specified object.
The value is converted into ConfigParams object which is used to create the new object.

> `public static` [ContainerConfig]() FromObject(object value)

- **value**: object - object with key-value pairs used to initialize a new ContainerConfig.
- **returns**: [ContainerConfig]() - created ContainerConfig object.
