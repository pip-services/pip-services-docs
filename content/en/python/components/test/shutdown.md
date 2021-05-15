---
type: docs
title: "Shutdown"
linkTitle: "Shutdown"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Random shutdown component that crashes a process
    using various methods.

---

**Implemenst:** [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)

### Description

The Shutdown class allows you to create a random shutdown component that crashes a process using various methods.

Important points

- The component is usually used for testing, but it can also be used in production to randomly crash microservices.
- It follows the concept of "Chaos Monkey" popularized by Netflix.

#### Configuration parameters

- **mode**: None - crash by NullPointer excepiton, zero - crash by dividing by zero, exception = crash by unhandled exception, exit - exit the process
- **min_timeout**: minimum crash timeout in milliseconds (default: 5 mins)
- **max_timeout**: maximum crash timeout in milliseconds (default: 15 minutes)




### Instance methods

#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### shutdown
Crashes the process using the configured crash mode.

> shutdown()
 

### Examples

```python
shutdown = Shutdown()
shutdown.configure(ConfigParams.from_tuples(
    "mode": "exception"
))
shutdown.shutdown()         # Result: Bang!!! the process crashes
```
