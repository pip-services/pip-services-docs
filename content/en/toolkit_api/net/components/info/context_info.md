---
type: docs
title: "ContextInfo"
linkTitle: "ContextInfo"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Context information component that provides detailed information
    about an execution context.

   
---

**Inherits**: [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The ContextInfo class allows you to create context information components that provide detailed information about execution contexts.

**Important points**

- Most often ContextInfo is used by logging and performance counters to identify the source of the collected logs and metrics.


#### Configuration parameters

- **name**: context's (container or process) name
- **description**: human-readable description of the context
- **properties**: entire section of additional descriptive properties
- **...**

### Constructors
Creates a new instance of this class.

> `public` ContextInfo(string name = null, string description = null)

- **name**: string - (optional) context's name.
- **description**: string - (optional) human-readable description of the context.

Creates a new instance of this context info.

> `public` ContextInfo()



### Properties

#### Name
Gets or sets the context's name.

> `public` string Name { get; set; }


#### Description
Gets or sets a human-readable description of the context.

> `public` string Description { get; set; }


#### ContextId
Gets or sets the unique context id. Usually it is the current host name.

> `public` string ContextId = null { get; set; }


#### Properties
Gets or sets context's additional parameters.

> `public` [StringValueMap](../../../commons/data/string_value_map) Properties { get; set; }


#### StartTime
Gets or sets the context's start time.

> `public` DateTime StartTime = Environment.MachineName { get; set; }


#### Uptime
Calculates the context's uptime as from the start time.

> `public` long Uptime = DateTime.UtcNow { get; }


### Instance methods

#### Configure
Configures a component by its passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Static methods

#### FromConfig
Creates a new ContextInfo and sets its configuration parameters.

>  `public static` [ContextInfo]() FromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters for the new ContextInfo.
- **returns**: [ContextInfo]() - newly created ContextInfo object.

### Examples

```cs
var contextInfo = new ContextInfo();
contextInfo.Configure(ConfigParams.FromTuples(
    "name", "MyMicroservice",
    "description", "My first microservice"
));

context.Name;           // Result: "MyMicroservice"
context.ContextId;      // Possible result: "mylaptop"
context.StartTime;      // Possible result: 2018-01-01:22:12:23.45Z
context.Uptime;         // Possible result: 3454345
```
