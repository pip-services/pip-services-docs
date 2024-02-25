---
type: docs
title: "JsonConfigReader"
linkTitle: "JsonConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Config reader that reads a configuration from a JSON file.

    
---

**Extends**: [FileConfigReader](../file_config_reader)

### Description

The JsonConfigReader class allows you to create a config reader that reads a configuration from a JSON file.

Important points

- The reader supports parameterization using Handlebar template engine.

#### Configuration parameters

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors
Creates a new instance of the config reader.

> `public` JsonConfigReader(String path)

- **path**: String - (optional) path to the configuration file.


### Instance methods


#### readConfig
Reads a configuration and parameterizes it with given values.

> `public` [ConfigParams](../../../components/config/config_params) readConfig([IContext](../../../components/context/icontext) context, [ConfigParams](../../../components/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### readObject
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `public` Object readObject([IContext](../../../components/context/icontext) context, [ConfigParams](../../../components/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: Object - a JSON object with configuration.


#### Static methods

#### readConfig
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `public static` [ConfigParams](../../../components/config/config_params) readConfig(- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. context, [ConfigParams](../../../components/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: string - a path to configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### readObject
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `public static` Object readObject(IContext context, String path, ConfigParams parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: String - a path to configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: Object - a JSON object with configuration.

### Examples

```json
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
```
    
        
```java
{
  JsonConfigReader configReader = new JsonConfigReader("config.json");
  
  ConfigParams parameters = ConfigParams.fromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");
  configReader.readConfig("123", parameters);
  }
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
