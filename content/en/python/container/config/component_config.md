---
type: docs
title: "ComponentConfig"
linkTitle: "ComponentConfig"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Configuration of a component inside a container.

    The configuration includes type information or descriptor, and component configuration parameters.
---


### Fields

<span class="hide-title-link">

#### descriptor
TODO: add description here
> **descriptor**: [Descriptor](../../../commons/refer/descriptor)

#### type
TODO: add description here
> **type**: [TypeDescriptor](../../../commons/reflect/type_descriptor)

#### config
TODO: add description here
> **config**: [ConfigParams](../../../commons/config/config_params)

</span>

### Constructors
Creates a new instance of the component configuration.

> ComponentConfig(descriptor: [Descriptor](../../../commons/refer/descriptor) = None, type: [TypeDescriptor](../../../commons/reflect/type_descriptor) = None, config: [ConfigParams](../../../commons/config/config_params) = None)

- **descriptor**: [Descriptor](../../../commons/refer/descriptor) - (optional) a components descriptor (locator).
- **type**: [TypeDescriptor](../../../commons/reflect/type_descriptor) - (optional) a components type descriptor.
- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters.


#### from_config
Creates a new instance of ComponentConfig based on section from container configuration.

> `static` from_config(config: [ConfigParams](../../../commons/config/config_params)): [ComponentConfig]()

- **config**: [ConfigParams](../../../commons/config/config_params) - component parameters from container configuration
- **returns**: [ComponentConfig]() - a newly created ComponentConfig
