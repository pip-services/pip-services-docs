---
type: docs
title: "ComponentConfig"
linkTitle: "ComponentConfig"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
description: >
    Configuration of a component inside a container.
   
---

### Description

The ComponentConfig class allows you to configure a component residing inside a container.

**Important points**

- The configuration includes the type of information or descriptor and component configuration parameters.

### Constructors
Creates a new instance of the configuration component.

> `public` ComponentConfig([Descriptor](../../../commons/refer/descriptor) descriptor, [TypeDescriptor](../../../commons/reflect/type_descriptor) type, [ConfigParams](../../../commons/config/config_params) config)

- **descriptor**: [Descriptor](../../../commons/refer/descriptor) - (optional) component's descriptor (locator).
- **type**: [TypeDescriptor](../../../commons/reflect/type_descriptor) - (optional) component's type descriptor.
- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component's configuration parameters.

### Fields

<span class="hide-title-link">

#### descriptor
Component's descriptor (locator).
> **_descriptor**: [Descriptor](../../../commons/refer/descriptor)

#### type
Component's type descriptor.
> `**_type**: [TypeDescriptor](../../../commons/reflect/type_descriptor)

#### config
Component's configuration parameters.
> **_config**: [ConfigParams](../../../commons/config/config_params)

</span>

### Static methods

#### fromConfig
Creates a new instance of ComponentConfig based on a section from a container configuration.
Throws [ConfigException](../../../commons/errors/config_exception) when neither component descriptor or type is found.

> `public static` [ComponentConfig]() fromConfig([ConfigParams](../../../commons/config/config_params) config) throws [ConfigException](../../../commons/errors/config_exception)

- **config**: [ConfigParams](../../../commons/config/config_params) - component's parameters from a container configuration.
- **returns**: [ComponentConfig]() - created ComponentConfig.
