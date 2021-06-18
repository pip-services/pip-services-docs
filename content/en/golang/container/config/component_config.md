---
type: docs
title: "ComponentConfig"
linkTitle: "ComponentConfig"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
description: >
    Configuration of a component inside a container.
   
---

### Description

The ComponentConfig class allows you to configure a component residing inside a container.

Important points

- The configuration includes the type of information or descriptor and component configuration parameters.

### Fields

<span class="hide-title-link">

#### Descriptor
Component's descriptor (locator).
> **Descriptor**: [Descriptor](../../../commons/refer/descriptor)

#### Type
Component's type descriptor.
> **Type**: [TypeDescriptor](../../../commons/reflect/type_descriptor)

#### Config
Component's configuration parameters.
> **Config**: [ConfigParams](../../../commons/config/config_params)

</span>

### Constructors

#### NewComponentConfigFromType
Creates a new instance of the configuration component.

> NewComponentConfigFromType(typ [*reflect.TypeDescriptor](../../../commons/reflect/type_descriptor), config [*config.ConfigParams](../../../commons/config/config_params)) [*config.ConfigParams](../../../commons/config/config_params)

- **typ**: [*reflect.TypeDescriptor](../../../commons/reflect/type_descriptor) - (optional) component's type descriptor.
- **config**: [*config.ConfigParams](../../../commons/config/config_params) - (optional) component's configuration parameters.

#### NewComponentConfigFromDescriptor
Creates a new instance of the configuration component.

> NewComponentConfigFromDescriptor(descriptor [*refer.Descriptor](../../../commons/refer/descriptor), config [*config.ConfigParams](../../../commons/config/config_params)) [*ComponentConfig]()

- **descriptor**: [*refer.Descriptor](../../../commons/refer/descriptor) - (optional) component's descriptor (locator).
- **config**: [*config.ConfigParams](../../../commons/config/config_params) - (optional) component's configuration parameters.

### Methods

#### ReadComponentConfigFromConfig
Creates a new instance of ComponentConfig based on a section from a container configuration.
Throws [ConfigException](../commons/errors/config_exception) when neither component descriptor or type is found.

> ReadComponentConfigFromConfig(config [*config.ConfigParams](../../../commons/config/config_params)) (result [*ComponentConfig](), err error)

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - component's parameters from a container configuration.
- **returns**: (result [*ComponentConfig](), err error) - created ComponentConfig or error.
