---
type: docs
title: "NameResolver"
linkTitle: "NameResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    A helper class that allows to extract component name from configuration parameters.
    The name can be defined in "id", "name" parameters or inside a component descriptor.
---

**Example:**

```typescript
let config = ConfigParams.fromTuples(
    "descriptor", "myservice:connector:aws:connector1:1.0",
    "param1", "ABC",
    "param2", 123
);

let name = NameResolver.resolve(config); // Result: connector1

```

### Methods

#### resolve
Resolves a component name from configuration parameters.
The name can be stored in "id", "name" fields or inside a component descriptor.
If name cannot be determined it returns a defaultName.

> `static` resolve(config: [ConfigParams](../config_params), defaultName: string = null): string

- **config**: [ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **defaultName**: string = null - (optional) a default component name.
- **returns**: string - resolved name or default name if the name cannot be determined.


