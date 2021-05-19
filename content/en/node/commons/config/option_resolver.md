---
type: docs
title: "OptionResolver"
linkTitle: "OptionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    A helper class to parameters from "options" configuration section.
---
### Description
The OptionResolver class can be use to obtain all the parameters under the section "options" from a CongifParams object. It has a single method called "resolve".

### Static methods

#### resolve
Resolves an "options" configuration section from component configuration parameters.

> `public static` resolve(config: [ConfigParams](../config_params), configAsDefault: boolean = false): [ConfigParams](../config_params)

- **config**: [ConfigParams](../config_params) - configuration parameters
- **configAsDefault**: boolean - (optional) When set true the method returns the entire parameter set when "options" section is not found. Default: false
- **returns**: [ConfigParams](../config_params) - configuration parameters from "options" section

### Examples

```typescript
let config = ConfigParams.fromTuples(
  "abc.param1", "ABC",
  "options.param1", "ABC",
  "options.param2", 123)

let options = OptionsResolver.resolve(config)           // Returns {'param1': 'ABC', 'param2': '123'}

// If the configuration doesn't contain an "options" section, it returns an empty ConfigParams object.
config = ConfigParams.fromTuples(
          "section1.key1", "AAA",
          "section1.key2", 123,
          );
options = OptionsResolver.resolve(config);           // Returns {}

```
