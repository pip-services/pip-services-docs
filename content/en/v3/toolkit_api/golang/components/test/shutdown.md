---
type: docs
title: "Shutdown"
linkTitle: "Shutdown"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
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
Creates new instance of Shutdown

> NewShutdown() [*Shutdown]()


### Methods


#### Close
Closes a component and frees used resources.

> (c [*Shutdown]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not received.

#### Configure
Configures a component by passing configuration parameters.

> (c [*Shutdown]()) Configure(ctx context.Context, config [config.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is opened.

> (c [*Shutdown]()) IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> (c [*Shutdown]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returned error if not received.


#### Shutdown
Crashes the process using the configured crash mode.

> (c [*Shutdown]()) Shutdown(ctx context.Context,)

- **ctx**: context.Context - operation context. 

### Examples

```go
TODO: add example
```
