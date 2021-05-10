---
type: docs
title: "ContextInfo"
linkTitle: "ContextInfo"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Context information component that provides detailed information
    about execution context.

   
---

**Implemenst:** [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The ContextInfo class allows you to create context information components that provide detailed information about an execution context.

Important points

- Most often ContextInfo is used by logging and performance counters to identify source of the collected logs and metrics.


#### Configuration parameters

- **name**: the context (container or process) name
- **description**: human-readable description of the context
- **properties**: entire section of additional descriptive properties
- **...**

### Constructors
Creates a new instance of this context info.

> MemoryDiscovery(name: str = None, description: str = None)

- **name**: str - (optional) a context name.
- **description**: str - (optional) a human-readable description of the context.


### Properties

#### context_id
Gets the unique context id. Usually it is the current host name.

> context_id(): str

- **returns**: str - the unique context id.

Gets the unique context id. Usually it is the current host name.

> context_id(context_id: str)

- **context_id**: str - the unique context id.

#### description
Gets the human-readable description of the context.

> description(): str

- **returns**: str - the human-readable description of the context.

Sets the human-readable description of the context.

> description(description: str)

- **description**: str - a new human readable description of the context.

#### name
Gets the context name.

> name(): str

- **returns**: str - the context name

Sets the context name.

> name(name: str)

- **name**: str - a new name for the context.

#### properties
Gets context additional parameters.

> properties(): Any

- **returns**: Any - a JSON object with additional context parameters.

Sets context additional parameters.

> properties(properties: Any)

- **properties**: Any - a JSON object with context additional parameters


#### start_time
Gets the context start time.

> start_time(): datetime.datetime

- **returns**: Any - a JSON object with additional context parameters.

Sets the context start time.

> start_time(start_time: datetime.datetime)

- **start_time**: datetime.datetime - a new context start time.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Static methods

#### from_config
Creates a new ContextInfo and sets its configuration parameters.

>  `static` from_config(config: [ConfigParams](../../../commons/config/config_params)): [ContextInfo]()

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters for the new ContextInfo.
- **returns**: [ContextInfo]() - a newly created ContextInfo

### Examples

```python
 contextInfo = ContextInfo()
contextInfo.configure(ConfigParams.from_tuples(
    "name", "MyMicroservice",
    "description", "My first microservice"))

context.name			# Result: "MyMicroservice"
context.context_id		# Possible result: "mylaptop"
context.start_time		# Possible result: 2018-01-01:22:12:23.45Z
context.uptime			# Possible result: 3454345
```
