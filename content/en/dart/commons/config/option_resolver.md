---
type: docs
title: "OptionResolver"
linkTitle: "OptionResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    A helper class used to obtain all the parameters from the "options" configuration section.
---
### Description
The OptionResolver class can be use to obtain all the parameters under the section "options" from a CongifParams object. It has a single method called "resolve".

### Static methods

#### resolve
Resolves an "options" configuration section from component configuration parameters.

> `static` [ConfigParams](../config_params) resolve([ConfigParams](../config_params) config, [bool configAsDefault = false])

- **config**: [ConfigParams](../config_params) - configuration parameters
- **configAsDefault**: bool - (optional) When set true the method returns the entire parameter set when "options" section is not found. Default: false
- **returns**: [ConfigParams](../config_params) - configuration parameters from "options" section

### Examples

```dart
var config = ConfigParams.fromTuples([
    ...
    'options.param1', 'ABC',
    'options.param2', 123
]);

var options = OptionsResolver.resolve(config); // Result: param1=ABC;param2=123

```
