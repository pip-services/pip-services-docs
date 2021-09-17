---
type: docs
title: "ComponentConfig"
linkTitle: "ComponentConfig"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
description: >
    Configuration of a component inside a container.
   
---

### Description

The ComponentConfig class allows you to configure a component residing inside a container.

**Important points**

- The configuration includes the type of information or descriptor and component configuration parameters.

### Constructors
Creates a new instance of the configuration component.

> `public` constructor(descriptor?: [Descriptor](../../../commons/refer/descriptor), type?: [TypeDescriptor](../../../commons/reflect/type_descriptor), config?: [ConfigParams](../../../commons/config/config_params))

- **descriptor**: [Descriptor](../../../commons/refer/descriptor) - (optional) component's descriptor (locator).
- **type**: [TypeDescriptor](../../../commons/reflect/type_descriptor) - (optional) component's type descriptor.
- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component's configuration parameters.

### Fields

<span class="hide-title-link">

#### descriptor
Component's descriptor (locator).
> `public` **descriptor**: [Descriptor](../../../commons/refer/descriptor)

#### type
Component's type descriptor.
> `public` **type**: [TypeDescriptor](../../../commons/reflect/type_descriptor)

#### config
Component's configuration parameters.
> `public` **config**: [ConfigParams](../../../commons/config/config_params)

</span>

### Static methods

#### fromConfig
Creates a new instance of ComponentConfig based on a section from a container configuration.
Throws [ConfigException](../commons/errors/config_exception) when neither component descriptor or type is found.

> `public static` fromConfig(config: [ConfigParams](../../../commons/config/config_params)): [ComponentConfig]()

- **config**: [ConfigParams](../../../commons/config/config_params) - component's parameters from a container configuration.
- **returns**: [ComponentConfig]() - created ComponentConfig.
