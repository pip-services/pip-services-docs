---
type: docs
title: "NameResolver"
linkTitle: "NameResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: > 
    A helper class that allows to extract component "name" from configuration parameters.
    
---
### Description
A helper class that allows to extract component "name" from configuration parameters.
The name can be defined in the "id" or "name" parameters or inside a component of type descriptor.

### Methods

#### Resolve
Resolves a component name from configuration parameters. The name can be stored in "id",
"name" fields or inside a component descriptor. If name cannot be determined it returns a empty string.

> (c *TNameResolver) Resolve(config *ConfigParams) string

- **config**: [*ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **returns**: string -  resolved name or "" if the name cannot be determined.


#### ResolveWithDefault
Resolves a component name from configuration parameters.
The name can be stored in "id", "name" fields or inside a component descriptor.
If name cannot be determined it returns a defaultName.

> (c *TNameResolver) ResolveWithDefault(config [*ConfigParams](../config_params), defaultName string) string

- **config**: [*ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **defaultName**: string - (optional) a default component name.
- **returns**: string - resolved name or default name if the name cannot be determined.

### Examples

```go
config := NewConfigParamsFromTuples(
    "descriptor", "myservice:connector:aws:connector1:1.0",
    "param1", "ABC",
    "param2", 123
);
 
name := NameResolver.Resolve(config); // Result: connector1

```

