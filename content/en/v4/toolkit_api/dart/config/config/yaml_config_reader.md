---
type: docs
title: "YamlConfigReader"
linkTitle: "YamlConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-config-dart"
description: >
    Config reader that reads configuration from YAML file.
---

**Extends**: [FileConfigReader](../file_config_reader)

### Description

The YamlConfigReader allows you to create a config reader that reads a configuration from a YAML file.

#### Configuration parameters

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors
Creates a new instance of the config reader.

> YamlConfigReader([String? path])

- **path**: String? - (optional) path to the configuration file.


### Instance methods


#### readConfig
Reads a configuration and parameterizes it with given values.

`@override`
> Future<[ConfigParams](../../../components/config/config_params)> readConfig(IContext? context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters or null to skip parameterization.
- **returns**: Future<[ConfigParams](../../../components/config/config_params)> - ConfigParams configuration.


#### readObject
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> dynamic readObject(IContext? context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: dynamic - YAML object with a configuration.

### Static methods

#### readConfig_
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `static` [ConfigParams](../../../components/config/config_params) readConfig_(IContext? context, String path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: String - path to the configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### readObject_
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> `static` dynamic readObject_(IContext? context, String path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: String - path to the configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: dynamic - YAML object containing a configuration.

### Examples

```yaml
key1: "{{KEY1_VALUE}}"
key2: "{{KEY2_VALUE}}"
```
    
        
```dart
var configReader = YamlConfigReader('config.yml');
var parameters = ConfigParams.fromTuples('KEY1_VALUE', 123, 'KEY2_VALUE', 'ABC');
var config = await configReader.readConfig('123', parameters)
// Result: key1=123;key2=ABC
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
