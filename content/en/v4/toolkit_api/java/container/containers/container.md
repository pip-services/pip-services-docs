---
type: docs
title: "Container"
linkTitle: "Container"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
description: >
    Inversion of control (IoC) container that creates components and manages their lifecycle.
 
---

**Implements:** [IConfigurable interface](../../../components/config/iconfigurable),  [IReferenceable interface](../../../components/refer/ireferenceable),  [IUnreferenceable interface](../../../components/refer/iunreferenceable), [IOpenable interface](../../../components/run/iopenable)

### Description

The Container class allows you to create an inversion of control (IoC) container that creates components and manages their lifecycle.

Important points

- The container is driven by configuration, which is usually stored in a JSON or YAML file.
- The configuration contains a list of components identified by their type or locator, followed by their configuration.
- On start, a container performs the following actions:
    - Creates components using their types or calls registered factories to create them using their locators.
    - Configures components that implement [IConfigurable interface](../../../components/config/iconfigurable) and passes them their configuration parameters.
    - Sets references to components that implement [IReferenceable interface](../../../components/refer/ireferenceable) and passes them references of all components in the container.
    - Opens components that implement [IOpenable interface](../../../components/run/iopenable).
- On stop, a container reverses the orden of its actions:
    - Closes components that implement [IClosable interface](../../../commons/run/iclosable)
    - Unsets references in components that implement [IUnreferenceable interface](../../../components/refer/iunreferenceable)
    - Destroys components in the container.

#### Configuration parameters

- **name**: context (container or process) name
- **description**: human-readable description of the context
- **properties**: section of additional descriptive properties
    - ...



### Constructors
Creates a new instance of the container.  

> `public` Container(String name, String description)

- **name**: String - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: String - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))

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
> `protected` **_logger**: [ILogger](../../../obesrvability/log/ilogger)

#### _info
Container's information.
> `protected` **_info**: [ContextInfo](../../../components/context/context_info)

#### _factories
Default factories.
> `protected` **_factories**: [DefaultContainerFactory](../../build/default_container_factory)

</span>

### Instance methods

#### addFactory
Adds a factory to the container. The factory is used to create components          
added to the container by their locators (descriptors).

> `public` void addFactory([IFactory](../../../components/build/ifactory) factory)

- **factory**: [IFactory](../../../components/build/ifactory) - component factory to be added.

#### close
Closes the component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### getConfig
Gets the container's configuration.
> `public` ContainerConfig getConfig()

- **returns**: ContainerConfig - container's configuration.

#### setConfig
Sets the container's configuration.
> `public` void setConfig(ContainerConfig value)

- **value**: ContainerConfig - container's configuration.

#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - True if the component is open and false otherwise.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.


#### readConfigFromFile
Reads the container's configuration from a JSON or YAML file and parameterizes it with the given values.

> `public` void readConfigFromFile([IContext](../../../components/context/icontext) context, String path, [ConfigParams](../../../components/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **path**: String - path to the configuration file
- **parameters**: [ConfigParams](../../../components/config/config_params) - configuration parameters or null to skip parameterization.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` void unsetReferences()

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

```java
{
  Container container = new Container();
  container.addFactory(new MyComponentFactory());
 
  ConfigParams parameters = ConfigParams.fromValue(process.env);
  container.readConfigFromFile("123", "./config/config.yml", parameters);
 
  container.open("123");
  System.out.println("Container is opened");
  ...
  container.close("123");
  System.out.println("Container is closed");
  }
```

### See also
- #### [IConfigurable interface](../../../components/config/iconfigurable)
- #### [IReferenceable interface](../../../components/refer/ireferenceable)
- #### [IUnreferenceable interface](../../../components/refer/iunreferenceable)
- #### [IOpenable interface](../../../components/run/iopenable)
