---
type: docs
title: "OptionResolver"
linkTitle: "OptionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    A helper class to parameters from "options" configuration section.
---

**Example:**

```typescript
let config = ConfigParams.fromTuples(
    ...
    "options.param1", "ABC",
    "options.param2", 123
);
   
let options = OptionsResolver.resolve(config); // Result: param1=ABC;param2=123 

```

### Methods

#### resolve
Resolves an "options" configuration section from component configuration parameters.

> `static` resolve(config: [ConfigParams](../config_params), configAsDefault: boolean = false): [ConfigParams](../config_params)

- **config**: [ConfigParams](../config_params) - configuration parameters
- **configAsDefault**: boolean = false - (optional) When set true the method returns the entire parameter set when "options" section is not found. Default: false
- **returns**: [ConfigParams](../config_params) - configuration parameters from "options" section