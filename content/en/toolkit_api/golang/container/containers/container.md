---
type: docs
title: "Container"
linkTitle: "Container"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
description: >
    Inversion of control (IoC) container that creates components and manages their lifecycle.
 
---

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

#### Configuration parameters

- **name**: context (container or process) name
- **description**: human-readable description of the context
- **properties**: section of additional descriptive properties
    - ...



### Constructors

#### NewContainer
Creates a new instance of the container.  

> NewContainer(name string, description string) [*Container]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

#### NewEmptyContainer 
Creates a new empty instance of the container.

> NewEmptyContainer() [*Container]()

#### InheritContainer
Creates a new instance of the container inherit from reference.

> InheritContainer(name string, description string, referenceable [IReferenceable](../refer/ireferenceable)) [*Container]()

- **name**: string - a container name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - a container description (accessible via [ContextInfo](../../../components/info/context_info))
- **referenceable**: [IReferenceable](../refer/ireferenceable) - referenceble object for inherit

### Fields

<span class="hide-title-link">

#### config
Configuration of the container
> **config**: [ContainerConfig](../../config/container_config)

#### references
Container's references
> **references**: [ContainerReferences](../../refer/container_references)

#### logger
Logger.
> **logger**: [ILogger](../../../components/log/ilogger)

#### info
Container's information.
> **info**: [ContextInfo](../../../components/info/context_info)

#### factories
Default factories.
> **factories**: [DefaultContainerFactory](../../build/default_container_factory)

</span>

### Methods

#### AddFactory
Adds a factory to the container. The factory is used to create components          
added to the container by their locators (descriptors).

> (c [*Container]()) AddFactory(factory [IFactory](../../../components/build/ifactory))

- **factory**: [IFactory](../../../components/build/ifactory) - component factory to be added.

#### Close
Closes the component and frees used resources.

> (c [*Container]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not closed


#### Configure
Configures the component by passing its configuration parameters.

> (c [*Container]()) Configure(conf [*ConfigParams](../../../commons/config/config_params))

- **conf**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> (c [*Container]()) IsOpen() bool

- **returns**: bool - True if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*Container]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: error - returns error if not opened


#### ReadConfigFromFile
Reads the container's configuration from a JSON or YAML file and parameterizes it with the given values.

> (c [*Container]()) ReadConfigFromFile(correlationId string, path string, parameters [*ConfigParams](../../../commons/config/config_params)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the configuration file
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or nil to skip parameterization.
- **returns**: error - returns error if not readed


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

```go
container := NewEmptyContainer()
container.AddFactory(newMyComponentFactory())

parameters := NewConfigParamsFromValue(process.env)
container.ReadConfigFromFile("123", "./config/config.yml", parameters)

err := container.Open("123")
ftm.Println("Container is opened")
...
err = container.Close("123")
fmt.Println("Container is closed")

```

### See also
- #### [IConfigurable interface](../../../commons/config/iconfigurable)
- #### [IReferenceable interface](../../../commons/refer/ireferenceable)
- #### [IUnreferenceable interface](../../../commons/refer/iunreferenceable)
- #### [IOpenable interface](../../../commons/run/iopenable)
