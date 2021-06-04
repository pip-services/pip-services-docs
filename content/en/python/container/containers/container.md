---
type: docs
title: "Container"
linkTitle: "Container"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Inversion of control (IoC) container that creates components and manages their lifecycle.
 
---

**Implements:** [IConfigurable interface](../../../commons/config/iconfigurable),  [IReferenceable interface](../../../commons/refer/ireferenceable),  [IUnreferenceable interface](../../../commons/refer/iunreferenceable), [IOpenable interface](../../../commons/run/iopenable)

### Description

The Container class allows you to create an inversion of control (IoC) container that creates components and manages their lifecycle.

Important points

- The container is driven by configuration, which is usually stored in a JSON or YAML file.
- The configuration contains a list of components identified by their type or locator, followed by their configuration.
- On start, a container performs the following actions:
    - Creates components using their types or calls registered factories to create them using their locators.
    - Configures components that implement [IConfigurable interface](../../../commons/config/iconfigurable) and passes them their configuration parameters.
    - Sets references to components that implement [IReferenceable interface](../../../commons/refer/ireferenceable) and passes them references of all components in the container.
    - Opens components that implement [IOpenable interface](../../../commons/run/iopenable).
- On stop, a container reverses the orden of its actions:
    - Closes components that implement [IClosable interface](../../../commons/run/iclosable)
    - Unsets references in components that implement [IUnreferenceable interface](../../../commons/refer/iunreferenceable)
    - Destroys components in the container.

##### Configuration parameters

- **name**: context (container or process) name
- **description**: human-readable description of the context
- **properties**: section of additional descriptive properties
    - ...



### Constructors
Creates a new instance of the container.  

> Container(name: str = None, description: str = None)

- **name**: str - (optional) container's name (accessible via ContextInfo)
- **description**: str - (optional) container's description (accessible via ContextInfo)

### Fields

<span class="hide-title-link">

#### _config
Configuration of the container
> **_config**: [ContainerConfig](../../config/container_config)

#### _references
Container's references
> **_references**: [ContainerReferences](../../refer/container_references)

#### _logger
Logger.
> **_logger**: [ILogger](../../../components/log/ilogger)

#### _info
Container's information.
> **_info**: [ContextInfo](../../../components/info/context_info)

#### _factories
Default factories.
> **_factories**: [DefaultContainerFactory](../../build/default_container_factory)

</span>

### Instance methods

#### add_factory
Adds a factory to the container. The factory is used to create components          
added to the container by their locators (descriptors).

> add_factory(factory: [IFactory](../../../components/build/ifactory))

- **factory**: [IFactory](../../../components/build/ifactory) - component factory to be added.

#### close
Closes the component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - True if the component is open and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### read_config_from_file
Reads the container's configuration from a JSON or YAML file and parameterizes it with the given values.

> read_config_from_file(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params))

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **path**: str - path to the configuration file
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or None to skip parameterization.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unset_referencesf
Unsets (clears) previously set references to dependent components.

> unset_referencesf()

### Examples

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

### See also
- #### [IConfigurable interface](../../../commons/config/iconfigurable)
- #### [IReferenceable interface](../../../commons/refer/ireferenceable)
- #### [IUnreferenceable interface](../../../commons/refer/iunreferenceable)
- #### [IOpenable interface](../../../commons/run/iopenable)
