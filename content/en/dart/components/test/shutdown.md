---
type: docs
title: "Shutdown"
linkTitle: "Shutdown"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Random shutdown component that crashes a process
    using various methods.

---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)

### Description

The Shutdown class allows you to create a random shutdown component that crashes a process using various methods.

**Important points**

- The component is usually used for testing, but it can also be used in production to randomly crash microservices.
- It follows the concept of "Chaos Monkey" popularized by Netflix.

#### Configuration parameters

- **mode**: null - crash by NullPointer excepiton, zero - crash by dividing by zero, exception = crash by unhandled exception, exit - exit the process
- **min_timeout**: minimum crash timeout in milliseconds (default: 5 mins)
- **max_timeout**: maximum crash timeout in milliseconds (default: 15 minutes)




### Instance methods


#### close
Closes a component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

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

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### shutdown
Crashes the process using the configured crash mode.

> void shutdown()
 

### Examples

```dart
var shutdown = Shutdown();
shutdown.configure(ConfigParams.fromTuples([
    "mode": "exception"
]));

shutdown.shutdown();         // Result: Bang!!! the process crashes
```
