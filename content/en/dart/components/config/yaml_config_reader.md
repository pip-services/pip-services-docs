---
type: docs
title: "YamlConfigReader"
linkTitle: "YamlConfigReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

> YamlConfigReader([String path])

- **path**: String - (optional) path to the configuration file.


### Instance methods


#### readConfig
Reads a configuration and parameterizes it with given values.

`@override`
> Future<[ConfigParams](../../../commons/config/config_params)> readConfig(String correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters or null to skip parameterization.
- **returns**: Future<[ConfigParams](../../../commons/config/config_params)> - ConfigParams configuration.


#### readObject
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> dynamic readObject(String correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: dynamic - YAML object with a configuration.

### Static methods

#### readConfig_
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `static` [ConfigParams](../../../commons/config/config_params) readConfig_(String correlationId, String path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **path**: String - path to the configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### readObject_
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> `static` dynamic readObject_(String correlationId, String path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id used to trace the execution through the call chain.
- **path**: String - path to the configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
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
