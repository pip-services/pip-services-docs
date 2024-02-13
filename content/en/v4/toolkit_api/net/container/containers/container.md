---
type: docs
title: "Container"
linkTitle: "Container"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-container-dotnet"
description: >
    Inversion of control (IoC) container that creates components and manages their lifecycle.
 
---

**Inherits:** [IConfigurable](../../../components/config/iconfigurable),  [IReferenceable](../../../components/refer/ireferenceable),  [IUnreferenceable](../../../components/refer/iunreferenceable), [IOpenable](../../../components/run/iopenable)

### Description

The Container class allows you to create an inversion of control (IoC) container that creates components and manages their lifecycle.

**Important points**

- The container is driven by configuration, which is usually stored in a JSON or YAML file.
- The configuration contains a list of components identified by their type or locator, followed by their configuration.
- On start, a container performs the following actions:
    - Creates components using their types or calls registered factories to create them using their locators.
    - Configures components that implement the [IConfigurable](../../../components/config/iconfigurable) interface and passes them their configuration parameters.
    - Sets references to components that implement the [IReferenceable](../../../components/refer/ireferenceable) interface and passes them references of all components in the container.
    - Opens components that implement the [IOpenable](../../../components/run/iopenable) interface.
- On stop, a container reverses the orden of its actions:
    - Closes components that implement the [IClosable](../../../components/run/iclosable) interface.
    - Unsets references in components that implement the [IUnreferenceable](../../../components/refer/iunreferenceable) interface.
    - Destroys components in the container.

#### Configuration parameters

- **name**: context (container or process) name
- **description**: human-readable description of the context
- **properties**: section of additional descriptive properties
    - ...



### Constructors
Creates a new instance of the container.  

> `public` Container(string name = null, string description = null) 

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))

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
> `protected` **_logger**: [ILogger](../../../observability/log/ilogger)

#### _info
Container's information.
> `protected` **_info**: [ContextInfo](../../../components/context/context_info)

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

> `public` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### ReadConfigFromFile
Reads the container's configuration from a JSON or YAML file and parameterizes it with the given values.

> `public` void ReadConfigFromFile(IContext context, string path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: string - path to the configuration file
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


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
- #### [IConfigurable interface](../../../components/config/iconfigurable)
- #### [IReferenceable interface](../../../components/refer/ireferenceable)
- #### [IUnreferenceable interface](../../../components/refer/iunreferenceable)
- #### [IOpenable interface](../../../components/run/iopenable)

