---
type: docs
title: "ContextInfo"
linkTitle: "ContextInfo"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
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

> `public` ContextInfo(String name, String description)

- **name**: String - (optional) a context name.
- **description**: String - (optional) a human-readable description of the context.


### Properties

#### contextId
Gets the unique context id. Usually it is the current host name.

> `public` String contextId = System.getenv("HOSTNAME") == null ? System.getenv("COMPUTERNAME") : System.getenv("HOSTNAME")

#### description
Gets the human-readable description of the context.

> `private` String _description = null

#### name
Gets the context name.

> `private` String _name = "unknown"

#### properties
Gets context additional parameters.

> `private StringValueMap _properties = new StringValueMap()

#### startTime
Gets the context start time.

> `private` ZonedDateTime startTime = ZonedDateTime.now(ZoneId.of("UTC"))


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Static methods

#### fromConfig
Creates a new ContextInfo and sets its configuration parameters.

>  `public static` [ContextInfo]() fromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters for the new ContextInfo.
- **returns**: [ContextInfo]() - a newly created ContextInfo

String getName()

void setName(String _name)

String getDescription()

void setDescription(String _description)

 String getContextId()

 void setContextId(String contextId)

 ZonedDateTime getStartTime()

  void setStartTime(ZonedDateTime startTime)

  long getUptime() 

  StringValueMap getProperties()

  void setProperties(StringValueMap _properties)

### Examples

```java
{
  ContextInfo contextInfo = new ContextInfo();
  contextInfo.configure(ConfigParams.fromTuples(
  		"name", "MyMicroservice",
  		"description", "My first microservice"
  ));
 
  context.getName();			// Result: "MyMicroservice"
  context.getContextId();		// Possible result: "mylaptop"
  context.getStartTime();		// Possible result: 2018-01-01:22:12:23.45Z
  context.getUptime();			// Possible result: 3454345
  }
```
