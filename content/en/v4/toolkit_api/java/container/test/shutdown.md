---
type: docs
title: "Shutdown"
linkTitle: "Shutdown"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
description: >
    Random shutdown component that crashes a process
    using various methods.

---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)

### Description

The Shutdown class allows you to create a random shutdown component that crashes a process using various methods.

Important points

- The component is usually used for testing, but it can also be used in production to randomly crash microservices.
- It follows the concept of "Chaos Monkey" popularized by Netflix.

#### Configuration parameters

- **mode**: null - crash by NullPointer excepiton, zero - crash by dividing by zero, exception = crash by unhandled exception, exit - exit the process
- **min_timeout**: minimum crash timeout in milliseconds (default: 5 mins)
- **max_timeout**: maximum crash timeout in milliseconds (default: 15 minutes)




### Instance methods


#### close
Closes component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../commons/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is opened.

> `public` boolean isOpen()

- **returns**: boolean - true if the component has been opened and false otherwise.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### shutdown
Crashes the process using the configured crash mode.

> `public` void shutdown() throws ApplicationException
 

### Examples

```java
{
  Shutdown shutdown = new Shutdown();
  shutdown.configure(ConfigParams.fromTuples(
      "mode", "exception"
  ));
  shutdown.shutdown();         // Result: Bang!!! the process crashes
  }
```
