---
type: docs
title: "ComponentConfig"
linkTitle: "ComponentConfig"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Configuration of a component inside a container.

   
---

### Description

The ComponentConfig class allows you to configure a component inside a container.

Important points

- The configuration includes the type of information or descriptor, and component configuration parameters.

### Fields

<span class="hide-title-link">

#### descriptor
Component's descriptor (locator).
> **descriptor**: [Descriptor](../../../commons/refer/descriptor)

#### type
Component's type descriptor.
> **type**: [TypeDescriptor](../../../commons/reflect/type_descriptor)

#### config
Component's configuration parameters.
> **config**: [ConfigParams](../../../commons/config/config_params)

</span>

### Constructors
Creates a new instance of the component configuration.

> ComponentConfig(descriptor: [Descriptor](../../../commons/refer/descriptor) = None, type: [TypeDescriptor](../../../commons/reflect/type_descriptor) = None, config: [ConfigParams](../../../commons/config/config_params) = None)

- **descriptor**: [Descriptor](../../../commons/refer/descriptor) - (optional) component's descriptor (locator).
- **type**: [TypeDescriptor](../../../commons/reflect/type_descriptor) - (optional) component's type descriptor.
- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component's configuration parameters.

### Static methods

#### from_config
Creates a new instance of ComponentConfig based on a section from a container configuration.

> `static` from_config(config: [ConfigParams](../../../commons/config/config_params)): [ComponentConfig]()

- **config**: [ConfigParams](../../../commons/config/config_params) - component's parameters from container configuration
- **returns**: [ComponentConfig]() - created ComponentConfig
