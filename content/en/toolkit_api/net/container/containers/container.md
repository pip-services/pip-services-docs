---
type: docs
title: "Container"
linkTitle: "Container"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-container-dotnet"
description: >
    Inversion of control (IoC) container that creates components and manages their lifecycle.
 
---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable),  [IReferenceable](../../../commons/refer/ireferenceable),  [IUnreferenceable](../../../commons/refer/iunreferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The Container class allows you to create an inversion of control (IoC) container that creates components and manages their lifecycle.

**Important points**

- The container is driven by configuration, which is usually stored in a JSON or YAML file.
- The configuration contains a list of components identified by their type or locator, followed by their configuration.
- On start, a container performs the following actions:
    - Creates components using their types or calls registered factories to create them using their locators.
    - Configures components that implement the [IConfigurable](../../../commons/config/iconfigurable) interface and passes them their configuration parameters.
    - Sets references to components that implement the [IReferenceable](../../../commons/refer/ireferenceable) interface and passes them references of all components in the container.
    - Opens components that implement the [IOpenable](../../../commons/run/iopenable) interface.
- On stop, a container reverses the orden of its actions:
    - Closes components that implement the [IClosable](../../../commons/run/iclosable) interface.
    - Unsets references in components that implement the [IUnreferenceable](../../../commons/refer/iunreferenceable) interface.
    - Destroys components in the container.

#### Configuration parameters

- **name**: context (container or process) name
- **description**: human-readable description of the context
- **properties**: section of additional descriptive properties
    - ...



### Constructors
Creates a new instance of the container.  

> `public` Container(string name = null, string description = null) 

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

### Fields

<span class="hide-title-link">

#### _config
Configuration of the container
> `protected` **_config**: [ContainerConfig](../../config/container_config)

#### _references
Container's references
> `protected` **_references**: [ContainerReferences](../../refer/container_references)

#### _logger
Logger.
> `protected` **_logger**: [ILogger](../../../components/log/ilogger)

#### _info
Container's information.
> `protected` **_info**: [ContextInfo](../../../components/info/context_info)

#### _factories
Default factories.
> `protected` **_factories**: [DefaultContainerFactory](../../build/default_container_factory)

</span>

### Instance methods

#### AddFactory
Adds a factory to the container. The factory is used to create components          
added to the container by their locators (descriptors).

> `public` void AddFactory([IFactory](../../../components/build/ifactory) factory)

- **factory**: [IFactory](../../../components/build/ifactory) - component factory to be added.

#### Close
Closes the component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### ReadConfigFromFile
Reads the container's configuration from a JSON or YAML file and parameterizes it with the given values.

> `public` void ReadConfigFromFile(string correlationId, string path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the configuration file
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> `public virtual` void UnsetReferences()

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

```cs
var container = new Container();
container.AddFactory(new MyComponentFactory());

var parameters = ConfigParams.fromValue(process.env);
container.ReadConfigFromFile("123", "./config/config.yml", parameters);

container.Open("123");
Console.Out.WriteLine("Container is opened");
...
container.Close("123");
Console.Out.WriteLine("Container is closed");
```

### See also
- #### [IConfigurable interface](../../../commons/config/iconfigurable)
- #### [IReferenceable interface](../../../commons/refer/ireferenceable)
- #### [IUnreferenceable interface](../../../commons/refer/iunreferenceable)
- #### [IOpenable interface](../../../commons/run/iopenable)
