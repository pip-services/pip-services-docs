---
type: docs
title: "OptionResolver"
linkTitle: "OptionResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    A helper class to parameters from "options" configuration section.
---
### Description
The OptionResolver class can be use to obtain all the parameters under the section "options" from a CongifParams object. It has a single method called "resolve".

### Static methods

#### Resolve
Resolves an "options" configuration section from component configuration parameters.

> `public static` [ConfigParams](../config_params) resolve([ConfigParams](../config_params) config, boolean configAsDefault = true)

- **config**: [ConfigParams](../config_params) - configuration parameters
- **configAsDefault**: boolean - (optional) When set true the method returns the entire parameter set when "options" section is not found. Default: false
- **returns**: [ConfigParams](../config_params) - configuration parameters from "options" section

### Examples

```cs
var config = ConfigParams.FromTuples(
  "abc.param1", "ABC",
  "options.param1", "ABC",
  "options.param2", 123);

var options = OptionsResolver.Resolve(config);  // Returns {'param1': 'ABC', 'param2': '123'}

// If the configuration doesn't contain an "options" section, it returns an empty ConfigParams object.
config = ConfigParams.FromTuples(
          "section1.key1", "AAA",
          "section1.key2", 123,
          );
options = OptionsResolver.Resolve(config);  // Returns {}

```
