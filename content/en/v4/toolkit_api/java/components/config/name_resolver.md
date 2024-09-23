---
type: docs
title: "NameResolver"
linkTitle: "NameResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: > 
    A helper class that allows to extract a component's "name" from its configuration parameters.
    
---
### Description
A helper class that allows to extract a component's "name" from its configuration parameters.
The name can be defined in the "id" or "name" parameters or inside a component of type descriptor.

### Static Methods

#### resolve
Resolves a component's name from configuration parameters.
The name can be stored in "id", "name" fields or inside a component descriptor.
If the name cannot be determined it returns a defaultName.

> `public static` String resolve(ConfigParams[ConfigParams](../config_params) config, String defaultName)

- **config**: [ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **defaultName**: String - (optional) default component name.
- **returns**: string - resolved name or default name if the name cannot be determined.

### Examples

```java
{
  ConfigParams config = ConfigParams.fromTuples(
    "descriptor", "myservice:connector:aws:connector1:1.0",
    "param1", "ABC",
    "param2", 123
  );
 
  String name = NameResolver.resolve(config); // Result: connector1
  }
```
