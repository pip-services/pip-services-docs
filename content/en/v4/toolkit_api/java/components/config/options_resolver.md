---
type: docs
title: "OptionsResolver"
linkTitle: "OptionsResolver"
gitUrl: "https:/github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: > 
    A helper class used to obtain all the parameters from the "options" configuration section.
---
### Description
The OptionsResolver class can be use to obtain all the parameters under the section "options" from a CongifParams object. It has a single method called "resolve".

### Static methods

#### resolve
Resolves an "options" configuration section from component configuration parameters.

> `public static` [ConfigParams](../config_params) resolve([ConfigParams](../config_params) config, boolean configAsDefault)

- **config**: [ConfigParams](../config_params) - configuration parameters
- **configAsDefault**: boolean - (optional) When set true the method returns the entire parameter set when "options" section is not found. Default: false
- **returns**: [ConfigParams](../config_params) - configuration parameters from "options" section

### Examples

```java
{
  ConfigParams config = ConfigParams.fromTuples(
    ...
    "options.param1", "ABC",
    "options.param2", 123
  );
 
  ConfigParams options = OptionsResolver.resolve(config, false); // Result: param1=ABC;param2=123
  }

```
