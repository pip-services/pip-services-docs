---
type: docs
title: "Shutdown"
linkTitle: "Shutdown"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-container-go"
description: >
    Random shutdown component that crashes a process
    using various methods.

---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable)

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

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is opened.components/config/config_params
> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### shutdown
Crashes the process using the configured crash mode.

> `public` shutdown()
 

### Examples


