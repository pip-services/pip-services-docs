---
type: docs
title: "ContextInfo"
linkTitle: "ContextInfo"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Context information component that provides detailed information
    about an execution context.

   
---

**Implements:** [IReconfigurable](../../config/ireconfigurable)

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

#### ContextId
Gets/sets the unique context id. Usually it is the current host name.

> `public` string ContextId

- **returns**: string - the unique context id.

#### Description
Gets/sets the human-readable description of the context.

> `public` string Description

- **returns**: string - the human-readable description of the context.

#### Name
Gets/sets the context name.

> `public` string Name

- **returns**: string - the context name


#### properties
Gets/sets context additional parameters.

> `public` StringValueMap Properties

#### StartTime
Gets the context start time.

> `public` DateTime StartTime { get; set; } = DateTime.UtcNow

- **returns**: DateTime - an object with additional context parameters.


### Instance methods

#### Configure
Configures component by passing configuration parameters.

> `public` void Configure(ConfigParams config)

- **config**: [ConfigParams](../../config/config_params) - configuration parameters to be set.

### Static methods

#### FromConfig
Creates a new ContextInfo and sets its configuration parameters.

>  `public static`  ContextInfo FromConfig(ConfigParams config)

- **config**: [ConfigParams](../../config/config_params) - configuration parameters for the new ContextInfo.
- **returns**: [ContextInfo]() - a newly created ContextInfo

### Examples

```typescript
var contextInfo = new ContextInfo();
contextInfo.Configure(ConfigParams.FromTuples(
   "name", "MyMicroservice",
   "description", "My first microservice"
));
 
context.Name;			// Result: "MyMicroservice"
context.ContextId;		// Possible result: "mylaptop"
context.StartTime;		// Possible result: 2018-01-01:22:12:23.45Z
context.Uptime;			// Possible result: 3454345
```

