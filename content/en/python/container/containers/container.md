---
type: docs
title: "Container"
linkTitle: "Container"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Inversion of control (IoC) container that creates components and manages their lifecycle.
 

    The container is driven by configuration, that usually stored in JSON or YAML file.
    The configuration contains a list of components identified by type or locator, followed
    by component configuration.

    On container start it performs the following actions:

    - Creates components using their types or calls registered factories to create components using their locators

    - Configures components that implement [IConfigurable interface](../../../commons/config/iconfigurable) and passes them their configuration parameters

    - Sets references to components that implement [IReferenceable interface](../../../commons/refer/ireferenceable) and passes them references of all components in the container

    - Opens components that implement [IOpenable interface](../../../commons/run/iopenable)


    On container stop actions are performed in reversed order:

    - Closes components that implement [IClosable interface](../../../commons/run/iclosable)

    - Unsets references in components that implement [IUnreferenceable interface](../../../commons/refer/iunreferenceable)

    - Destroys components in the container.
---

**Implements:** [IConfigurable interface](../../../commons/config/iconfigurable),  [IReferenceable interface](../../../commons/refer/ireferenceable),  [IUnreferenceable interface](../../../commons/refer/iunreferenceable), [IOpenable interface](../../../commons/run/iopenable)

See also [IConfigurable interface](../../../commons/config/iconfigurable),  [IReferenceable interface](../../../commons/refer/ireferenceable),  [IUnreferenceable interface](../../../commons/refer/iunreferenceable), [IOpenable interface](../../../commons/run/iopenable)

##### Configuration parameters

- **name**: the context (container or process) name
- **description**: human-readable description of the context
- **properties**: entire section of additional descriptive properties
    - ...

**Example:**

```yaml
======= config.yaml ========
- descriptor: mygroup:mycomponent1:default:default:1.0
param1: 123
param2: ABC
- type: mycomponent2,mypackage
param1: 321
param2: XYZ
============================
```

```python
container = Container()
container.add_factory(MyComponentFactory())

parameters = ConfigParams.from_value(os.env)
container.read_config_from_file("123", "./config/config.yml", parameters)

container.open("123")
print "Container is opened"
# process...
container.close("123")

print "Container is closed"
```

### Constructors
Creates a new instance of the container.  

> Container(name: str = None, description: str = None)

- **name**: str - (optional) a container name (accessible via ContextInfo)
- **description**: str - (optional) a container description (accessible via ContextInfo)

### Fields

<span class="hide-title-link">

#### _config
TODO: add description here
> **_config**: [ContainerConfig](../../config/container_config)

#### _references
TODO: add description here
> **_references**: [ContainerReferences](../../refer/container_references)

#### _logger
TODO: add description here
> **_logger**: [ILogger](../../../components/log/ilogger)

#### _info
TODO: add description here
> **_info**: [ContextInfo](../../../components/info/context_info)

#### _info
TODO: add description here
> **_factories**: [DefaultContainerFactory](../../build/default_container_factory)

</span>

### Methods

#### add_factory
Adds a factory to the container. The factory is used to create components          
added to the container by their locators (descriptors).

> add_factory(factory: [IFactory](../../../components/build/ifactory))

- **factory**: [IFactory](../../../components/build/ifactory) - a component factory to be added.

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### read_config_from_file
Reads container configuration from JSON or YAML file and parameterizes it with given values.

> read_config_from_file(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **path**: str - a path to configuration file
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or None to skip parameterization.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unset_referencesf
Unsets (clears) previously set references to dependent components.

> unset_referencesf()


### See also
- #### [IConfigurable interface](../../../commons/config/iconfigurable)
- #### [IReferenceable interface](../../../commons/refer/ireferenceable)
- #### [IUnreferenceable interface](../../../commons/refer/iunreferenceable)
- #### [IOpenable interface](../../../commons/run/iopenable)
