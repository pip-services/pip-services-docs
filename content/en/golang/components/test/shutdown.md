---
type: docs
title: "Shutdown"
linkTitle: "Shutdown"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Random shutdown component that crashes a process
    using various methods.

---

### Description

The Shutdown class allows you to create a random shutdown component that crashes a process using various methods.

Important points

- The component is usually used for testing, but it can also be used in production to randomly crash microservices.
- It follows the concept of "Chaos Monkey" popularized by Netflix.

#### Configuration parameters

- **mode**: null - crash by NullPointer excepiton, zero - crash by dividing by zero, exception = crash by unhandled exception, exit - exit the process
- **min_timeout**: minimum crash timeout in milliseconds (default: 5 mins)
- **max_timeout**: maximum crash timeout in milliseconds (default: 15 minutes)

### Constructors

#### NewShutdown
Create new instance of Shutdown

> NewShutdown() [*Shutdown]()


### Methods


#### Close
Closes component and frees used resources.

> (c [*Shutdown]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: error - returns error if not received.

#### Configure
Configures a component by passing configuration parameters.

> (c [*Shutdown]()) Configure(config [config.ConfigParams](../../../commons/config/config_params))

- **config**: [config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is opened.

> (c [*Shutdown]()) IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> (c [*Shutdown]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: error - returns error if not received.


#### Shutdown
Crashes the process using the configured crash mode.

> (c [*Shutdown]()) Shutdown()
 

### Examples

```go
TODO: add example
```
