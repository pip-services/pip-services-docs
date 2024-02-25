![image](https://github.com/pip-services/pip-services-docs/assets/68734409/4d3a8e66-2a73-4674-8d9b-3aa6936c3dc9)---
type: docs
title: "YamlConfigReader"
linkTitle: "YamlConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
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

> `public` YamlConfigReader(String path)

- **path**: String - (optional) path to the configuration file.


### Instance methods


#### readConfig
Reads a configuration and parameterizes it with given values.

> `public` [ConfigParams](../../../commons/config/config_params) readConfig([IContext](../../../components/context/icontext) context, [ConfigParams](../../../commons/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### readObject
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> `public` Object readObject([IContext](../../../components/context/icontext) context, String path, [ConfigParams](../../../commons/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: Object - a YAML object with a configuration.


#### readConfig
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `public` [ConfigParams](../../../commons/config/config_params) readConfig([IContext](../../../components/context/icontext) context, [ConfigParams](../../../commons/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


### Static methods

#### readObject
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> `public static` Object readObject([IContext](../../../components/context/icontext) context, String path, [ConfigParams](../../../commons/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: Object - a YAML object containing a configuration.

### Examples

```yaml
key1: "{{KEY1_VALUE}}"
key2: "{{KEY2_VALUE}}"
```
    
        
```java
{
  YamlConfigReader configReader = new YamlConfigReader("config.yml");
  
  ConfigParams parameters = ConfigParams.fromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");
  configReader.readConfig("123", parameters);
  }
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
