---
type: docs
title: "OptionResolver"
linkTitle: "OptionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    A helper class to parameters from "options" configuration section.
---
### Description
The OptionResolver class can be use to obtain all the parameters under the section "options" from a CongifParams object. It has a single method called "resolve".

### Funcs

#### Resolve
Resolves an "options" configuration section from component configuration parameters.

> (c *TOptionsResolver) Resolve(config [*ConfigParams](../config_params)) [*ConfigParams](../config_params)

- **config**: [*ConfigParams](../config_params) - configuration parameters
- **returns**: [*ConfigParams](../config_params) - configuration parameters from "options" section


#### ResolveWithDefault
Resolves an "options" configuration section from component configuration parameters.

> (c *TOptionsResolver) ResolveWithDefault(config [*ConfigParams](../config_params)) [*ConfigParams](../config_params)

- **config**: [*ConfigParams](../config_params) - default configuration parameters
- **returns**: [*ConfigParams](../config_params) - configuration parameters from "options" section

### Examples

```go
config := NewConfigParamsFromTuples(
    ...
    "options.param1", "ABC",
    "options.param2", 123
);
 
options := OptionsResolver.resolve(config); // Result: param1=ABC;param2=123

```
