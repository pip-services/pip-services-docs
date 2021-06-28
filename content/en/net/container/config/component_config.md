---
type: docs
title: "ComponentConfig"
linkTitle: "ComponentConfig"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-container-dotnet"
description: >
    Configuration of a component inside a container.
   
---

### Description

The ComponentConfig class allows you to configure a component residing inside a container.

Important points

- The configuration includes the type of information or descriptor and component configuration parameters.

### Properties

#### Descriptor
Component's descriptor (locator).
> `public` [Descriptor](../../../commons/refer/descriptor)  Descriptor { get; set; }

#### Type
Component's type descriptor.
> `public` [TypeDescriptor](../../../commons/reflect/type_descriptor) Type { get; set; }

#### Config
Component's configuration parameters.
> `public` [ConfigParams](../../../commons/config/config_params) Config { get; set; }


### Constructors
Creates a new instance of the configuration component.

> `public` ComponentConfig(Descriptor descriptor, TypeDescriptor type, ConfigParams config)

- **descriptor**: [Descriptor](../../../commons/refer/descriptor) - (optional) component's descriptor (locator).
- **type**: [TypeDescriptor](../../../commons/reflect/type_descriptor) - (optional) component's type descriptor.
- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component's configuration parameters.

### Static methods

#### FromConfig
Creates a new instance of ComponentConfig based on a section from a container configuration.
Throws [ConfigException](../commons/errors/config_exception) when neither component descriptor or type is found.

> `public static` [ComponentConfig]() FromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - component's parameters from a container configuration.
- **returns**: [ComponentConfig]() - created ComponentConfig.
