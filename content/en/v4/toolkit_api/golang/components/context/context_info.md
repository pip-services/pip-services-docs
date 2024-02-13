---
type: docs
title: "ContextInfo"
linkTitle: "ContextInfo"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Context information component that provides detailed information
    about an execution context.

   
---

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

> NewContextInfo() *ContextInfo



### Properties

#### contextId
The unique context id. Usually it is the current host name.

> ContextId   string            `json:"context_id"`

#### description
A human-readable description of the context.

> Description string            `json:"description"`

#### name
The context name.

> Name        string            `json:"name"`

- **returns**: string - the context name

#### properties
Context additional parameters.

> Properties  map[string]string `json:"properties"`

#### startTime
The context's start time.

> `public` startTime(): Date




### Instance methods

#### configure
Configures component by passing configuration parameters.

> (c *ContextInfo) Configure(ctx context.Context, cfg *config.ConfigParams)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```go
		contextInfo := NewContextInfo();
		contextInfo.Configure(context.Background(), NewConfigParamsFromTuples(
			ContextInfoParameterName, "MyMicroservice",
			ContextInfoParameterDescription, "My first microservice"
		));

		context.Name;     	// Result: "MyMicroservice"
		context.ContextId;	// Possible result: "mylaptop"
		context.StartTime;	// Possible result: 2018-01-01:22:12:23.45Z
```

