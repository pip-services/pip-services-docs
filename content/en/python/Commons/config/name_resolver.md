---
type: docs
title: "NameResolver"
linkTitle: "NameResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    A helper class that allows to extract component name from configuration parameters.
    The name can be defined in "id", "name" parameters or inside a component descriptor.
---

**Example:**

```python
config = ConfigParams.from_tuples("descriptor", "myservice:connector:aws:connector1:1.0",
                                 "param1", "ABC",
                                 "param2", 123)

name = NameResolver.resolve(config)

```

### Methods

#### resolve
Resolves a component name from configuration parameters.
The name can be stored in "id", "name" fields or inside a component descriptor.
If name cannot be determined it returns a defaultName.

> `static` resolve(config: [ConfigParams](../config_params), default_name: str = None): str

- **config**: [ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **default_name**: str - (optional) a default component name.
- **returns**: str - resolved name or default name if the name cannot be determined.


