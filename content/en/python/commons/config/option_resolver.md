---
type: docs
title: "OptionResolver"
linkTitle: "OptionResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    A helper class to parameters from "options" configuration section.
---
### Description
The OptionResolver class can be use to obtain all the parameters under the section "options" from a CongifParams object. It has a single method "resolve".

### Static methods

#### resolve
Resolves an "options" configuration section from component configuration parameters.

> `static` resolve(config: [ConfigParams](../config_params), config_as_default: bool = False): [ConfigParams](../config_params)

- **config**: [ConfigParams](../config_params) - configuration parameters
- **config_as_default**: bool - (optional) When set true the method returns the entire parameter set when "options" section is not found. Default: false
- **returns**: [ConfigParams](../config_params) - configuration parameters from "options" section

### Examples

```python
config = ConfigParams.from_tuples(
  "abc.param1", "ABC",
  "options.param1", "ABC",
  "options.param2", 123)

options = OptionsResolver.resolve(config) # Returns {'param1': 'ABC', 'param2': '123'}

```
