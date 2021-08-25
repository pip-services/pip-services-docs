---
type: docs
title: "Container"
linkTitle: "Container"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-container-dart"
description: >
    Inversion of control (IoC) container that creates components and manages their lifecycle.
 
---

**Implements:** [IConfigurable interface](../../../commons/config/iconfigurable),  [IReferenceable interface](../../../commons/refer/ireferenceable),  [IUnreferenceable interface](../../../commons/refer/iunreferenceable), [IOpenable interface](../../../commons/run/iopenable)

### Description

The Container class allows you to create an inversion of control (IoC) container that creates components and manages their lifecycle.

**Important points**

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

> Container([String name, String description])

- **name**: String - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: String - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

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

### Instance methods

#### addFactory
Adds a factory to the container. The factory is used to create the components          
added to the container by their locators (descriptors).

> void addFactory([IFactory](../../../components/build/ifactory) factory)

- **factory**: [IFactory](../../../components/build/ifactory) - component factory to be added.

#### close
Closes the component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### readConfigFromFile
Reads the container's configuration from a JSON or YAML file and parameterizes it with the given values.

> void readConfigFromFile(String correlationId, String path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **path**: String - path to the configuration file
- **parameters**: [ConfigParams](../../../commons/config/config_params) - configuration parameters or null to skip parameterization.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

`@override`
> void unsetReferences()

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

```dart
var container = new Container();
container.addFactory(new MyComponentFactory());
var parameters = ConfigParams.fromValue(process.env);
container.readConfigFromFile('123', './config/config.yml', parameters);

container.open('123', (err) => {
    console.log('Container is opened');
    ...
    container.close('123', (err) => {
        console.log('Container is closed');
    });
});
```

### See also
- #### [IConfigurable interface](../../../commons/config/iconfigurable)
- #### [IReferenceable interface](../../../commons/refer/ireferenceable)
- #### [IUnreferenceable interface](../../../commons/refer/iunreferenceable)
- #### [IOpenable interface](../../../commons/run/iopenable)
