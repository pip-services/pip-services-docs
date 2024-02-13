---
type: docs
title: "JsonConfigReader"
linkTitle: "JsonConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-config-dart"
description: >
    Config reader that reads a configuration from a JSON file.

    
---

**Extends**: [FileConfigReader](../file_config_reader)

### Description

The JsonConfigReader class allows you to create a config reader that reads a configuration from a JSON file.

**Important points**

- The reader supports parameterization using the Handlebar template engine.

#### Configuration parameters

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors
Creates a new instance of the config reader.

> JsonConfigReader([String? path])

- **path**: String? - (optional) path to the configuration file.


### Instance methods


#### readConfig
Reads a configuration and parameterizes it with given values.

> Future<[ConfigParams](../../../components/config/config_params)> readConfig(IContext? context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration or null to skip parameterization.
- **returns**: Future<[ConfigParams](../../../components/config/config_params)> - ConfigParams configuration.


#### readObject
Reads a configuration file, parameterizes its content and converts it into a JSON object.

`@override`
> dynamic readObject(IContext? context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: dynamic - a JSON object with configuration.


#### Static methods

#### readConfig_
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `static` [ConfigParams](../../../components/config/config_params) readConfig_(IContext? context, String path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: String - a path to configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### readObject_
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `static` dynamic readObject_(IContext? context, String path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: String - path to the configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: dynamic - JSON object with configuration.

### Examples

```json
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
```
    
        
```dart
var configReader = new JsonConfigReader('config.json');
var parameters = ConfigParams.fromTuples(['KEY1_VALUE', 123, 'KEY2_VALUE', 'ABC']);
var config = await configReader.readConfig('123', parameters)
    // Result: key1=123;key2=ABC
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
