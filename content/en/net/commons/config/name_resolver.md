---
type: docs
title: "NameResolver"
linkTitle: "NameResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    A helper class that allows to extract component "name" from configuration parameters.
    
---
### Description
A helper class that allows to extract component "name" from configuration parameters.
The name can be defined in the "id" or "name" parameters or inside a component of type descriptor.

### Static Methods

#### Resolve
Resolves a component name from configuration parameters.
The name can be stored in "id", "name" fields or inside a component descriptor.
If name cannot be determined it returns a defaultName.

> `public static` string Resolve([ConfigParams](../config_params) config, string defaultName = null)

- **config**: [ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **defaultName**: string - (optional) a default component name.
- **returns**: string - resolved name or default name if the name cannot be determined.

### Examples

```cs
// Using the descriptor class (which has the following parameters: "group", "type", "kind", "name", "version") will extract the value of the "name" parameter.
var config = ConfigParams.FromTuples("descriptor", "myservice:connector:aws:connector1:1.0",
                                 "param1", "ABC",
                                 "param2", 123);

var name = NameResolver.Resolve(config); // Returns connector1

// Using name
config = ConfigParams.FromTuples("name", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123); 
name = NameResolver.Resolve(config) // Returns myservice:connector:aws:connector1:1.0

// Using id
config = ConfigParams.FromTuples("id", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123);
var id = NameResolver.Resolve(config);  // Returns myservice:connector:aws:connector1:1.0

// If name cannot be determined
config = ConfigParams.FromTuples("param1", "ABC",
                                         "param2", 123);
name = NameResolver.Resolve(config,"default name"); // Returns "default name"
```
