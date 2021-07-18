---
type: docs
title: "ContextInfo"
linkTitle: "ContextInfo"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Context information component that provides detailed information
    about an execution context.

   
---

**Implements:** [IReconfigurable](../../../commons/config/ireconfigurable)

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

> ContextInfo([String name, String description]) 

- **name**: String - (optional) a context name.
- **description**: String - (optional) a human-readable description of the context.


### Properties

#### contextId
Gets the unique context id. Usually it is the current host name.

> String get contextId

- **returns**: String - the unique context id.

Gets the unique context id. Usually it is the current host name.

> set contextId(String value)

- **contextId**: String - the unique context id.

#### description
Gets the human-readable description of the context.

> String get description

- **returns**: String - the human-readable description of the context.

Sets the human-readable description of the context.

> set description(String value)

- **description**: String - a new human readable description of the context.

#### name
Gets the context name.

> String get name

- **returns**: String - the context name

Sets the context name.

> set name(String value)

- **name**: String - a new name for the context.

#### properties
Gets context additional parameters.

> dynamic get properties

- **returns**: dynamic - a JSON object with additional context parameters.

Sets context additional parameters.

> set properties(dynamic properties)

- **properties**: dynamic - a JSON object with context additional parameters


#### startTime
Gets the context start time.

> DateTime get startTime

- **returns**: DateTime - a JSON object with additional context parameters.

Sets the context start time.

> set startTime(DateTime value)

- **value**: DateTime - a new context start time.


### Instance methods

#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config) 

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Static methods

#### fromConfig
Creates a new ContextInfo and sets its configuration parameters.

> `static` [ContextInfo]() fromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters for the new ContextInfo.
- **returns**: [ContextInfo]() - a newly created ContextInfo

### Examples

```dart
let contextInfo = new ContextInfo();
contextInfo.configure(ConfigParams.fromTuples(
    'name', 'MyMicroservice',
    'description', 'My first microservice'
));

context.name;			// Result: 'MyMicroservice'
context.contextId;		// Possible result: 'mylaptop'
context.startTime;		// Possible result: 2018-01-01:22:12:23.45Z
context.uptime;			// Possible result: 3454345
```
