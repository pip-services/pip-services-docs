---
type: docs
title: "NameResolver"
linkTitle: "NameResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    A helper class that allows to extract component "name" from configuration parameters.
    
---
### Description
A helper class that allows to extract component "name" from configuration parameters.
The name can be defined in the "id" or "name" parameters or inside a component of type descriptor.

### Static Methods

#### resolve
Resolves a component name from configuration parameters.
The name can be stored in "id", "name" fields or inside a component descriptor.
If name cannot be determined it returns a defaultName.

> `public static` resolve(config: [ConfigParams](../config_params), defaultName: string = null): string

- **config**: [ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **defaultName**: string - (optional) a default component name.
- **returns**: string - resolved name or default name if the name cannot be determined.

### Examples

```typescript
// Using the descriptor class (which has the following parameters: "group", "type", "kind", "name", "version") will extract the value of the "name" parameter.
let config = ConfigParams.fromTuples("descriptor", "myservice:connector:aws:connector1:1.0",
                                 "param1", "ABC",
                                 "param2", 123);

let name = NameResolver.resolve(config); // Returns connector1

// Using name
config = ConfigParams.fromTuples("name", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123); 
name = NameResolver.resolve(config) // Returns myservice:connector:aws:connector1:1.0

// Using id
config = ConfigParams.fromTuples("id", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123);
let id = NameResolver.resolve(config);  // Returns myservice:connector:aws:connector1:1.0

// If name cannot be determined
config = ConfigParams.fromTuples("param1", "ABC",
                                         "param2", 123);
name = NameResolver.resolve(config,"default name"); // Returns "default name"
```
