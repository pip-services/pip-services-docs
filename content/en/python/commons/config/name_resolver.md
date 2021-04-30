---
type: docs
title: "NameResolver"
linkTitle: "NameResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    A helper class that allows to extract component name from configuration parameters.
    
---
### Description
A helper class that allows to extract component "name" from configuration parameters.
The name can be defined in the "id" or "name" parameters or inside a component of type descriptor.

### Static Methods

#### resolve
Resolves a component name from configuration parameters.
The name can be stored in "id", "name" fields or inside a component descriptor.
If name cannot be determined it returns a defaultName.

> `static` resolve(config: [ConfigParams](../config_params), default_name: str = None): str

- **config**: [ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **default_name**: str - (optional) a default component name.
- **returns**: str - resolved name or default name if the name cannot be determined.

## Examples

```python
# Using the descriptor class (which has the following parameters: "group", "type", "kind", "name", "version") will extract the value of the "name" parameter.
config = ConfigParams.from_tuples("descriptor", "myservice:connector:aws:connector1:1.0",
                                 "param1", "ABC",
                                 "param2", 123)

name = NameResolver.resolve(config) # Returns connector1

# Using name
config = ConfigParams.from_tuples("name", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123)
name = NameResolver.resolve(config) # Returns myservice:connector:aws:connector1:1.0

# Using id
config = ConfigParams.from_tuples("id", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123)
id = NameResolver.resolve(config)  # Returns myservice:connector:aws:connector1:1.0

# If name cannot be determined
config = ConfigParams.from_tuples("param1", "ABC",
                                         "param2", 123)
name = NameResolver.resolve(config,"default name") #Returns "default name"


```
