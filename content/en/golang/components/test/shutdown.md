---
type: docs
title: "Shutdown"
linkTitle: "Shutdown"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
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




### Methods


#### close
Closes component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### shutdown
Crashes the process using the configured crash mode.

> `public` shutdown()
 

### Examples

```typescript
let shutdown = new Shutdown();
shutdown.configure(ConfigParams.fromTuples(
    "mode": "exception"
));
shutdown.shutdown();         // Result: Bang!!! the process crashes
```
