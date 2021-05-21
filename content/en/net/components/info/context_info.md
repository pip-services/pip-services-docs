---
type: docs
title: "ContextInfo"
linkTitle: "ContextInfo"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Context information component that provides detailed information
    about an execution context.

   
---

**Implemenst:** [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The ContextInfo class allows you to create context information components that provide detailed information about execution contexts.

Important points

- Most often ContextInfo is used by logging and performance counters to identify the source of the collected logs and metrics.


#### Configuration parameters

- **name**: the context (container or process) name
- **description**: human-readable description of the context
- **properties**: entire section of additional descriptive properties
- **...**

### Constructors
Creates a new instance of this context info.

> `public` constructor(name?: string, description?: string)

- **name**: string - (optional) a context name.
- **description**: string - (optional) a human-readable description of the context.


### Properties

#### contextId
Gets the unique context id. Usually it is the current host name.

> contextId(): string

- **returns**: string - the unique context id.

Gets the unique context id. Usually it is the current host name.

> contextId(context_id: string)

- **contextId**: string - the unique context id.

#### description
Gets the human-readable description of the context.

> description(): string

- **returns**: string - the human-readable description of the context.

Sets the human-readable description of the context.

> description(description: string)

- **description**: string - a new human readable description of the context.

#### name
Gets the context name.

> name(): string

- **returns**: string - the context name

Sets the context name.

> name(name: string)

- **name**: string - a new name for the context.

#### properties
Gets context additional parameters.

> properties(): any

- **returns**: any - a JSON object with additional context parameters.

Sets context additional parameters.

> properties(properties: any)

- **properties**: any - a JSON object with context additional parameters


#### startTime
Gets the context start time.

> startTime(): Date

- **returns**: any - a JSON object with additional context parameters.

Sets the context start time.

> startTime(start_time: Date)

- **start_time**: Date - a new context start time.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Static methods

#### fromConfig
Creates a new ContextInfo and sets its configuration parameters.

>  `public static` fromConfig(config: [ConfigParams](../../../commons/config/config_params)): [ContextInfo]()

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters for the new ContextInfo.
- **returns**: [ContextInfo]() - a newly created ContextInfo

### Examples

```typescript
let contextInfo = new ContextInfo();
contextInfo.configure(ConfigParams.fromTuples(
    "name", "MyMicroservice",
    "description", "My first microservice"
));

context.name;            // Result: "MyMicroservice"
context.contextId;        // Possible result: "mylaptop"
context.startTime;        // Possible result: 2018-01-01:22:12:23.45Z
context.uptime;            // Possible result: 3454345
```
