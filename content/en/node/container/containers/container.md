---
type: docs
title: "Container"
linkTitle: "Container"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
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

#### Configuration parameters

- **name**: context (container or process) name
- **description**: human-readable description of the context
- **properties**: section of additional descriptive properties
    - ...



### Constructors
Creates a new instance of the container.  

> `public` constructor(name?: string, description?: string)

- **name**: string - (optional) container's name (accessible via ContextInfo)
- **description**: string - (optional) container's description (accessible via ContextInfo)

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

#### addFactory
Adds a factory to the container. The factory is used to create components          
added to the container by their locators (descriptors).

> `public` addFactory(factory: [IFactory](../../../components/build/ifactory)): void

- **factory**: [IFactory](../../../components/build/ifactory) - component factory to be added.

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### readConfigFromFile
Reads the container's configuration from a JSON or YAML file and parameterizes it with the given values.

> `public` readConfigFromFile(correlationId: string, path: string, parameters: [ConfigParams](../../../commons/config/config_params)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to the configuration file
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences()

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

```typescript
let container = new Container();
container.addFactory(new MyComponentFactory());
     
let parameters = ConfigParams.fromValue(process.env);
container.readConfigFromFile("123", "./config/config.yml", parameters);
   
await container.open("123");
console.log("Container is opened");
...
await container.close("123");
console.log("Container is closed");
```

### See also
- #### [IConfigurable interface](../../../commons/config/iconfigurable)
- #### [IReferenceable interface](../../../commons/refer/ireferenceable)
- #### [IUnreferenceable interface](../../../commons/refer/iunreferenceable)
- #### [IOpenable interface](../../../commons/run/iopenable)
