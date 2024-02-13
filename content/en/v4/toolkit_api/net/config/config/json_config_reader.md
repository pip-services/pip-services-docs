---
type: docs
title: "JsonConfigReader"
linkTitle: "JsonConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-config-dotnet"
description: >
    Config reader that reads a configuration from a JSON file.

    
---

**Inherits**: [FileConfigReader](../file_config_reader)

### Description

The JsonConfigReader class allows you to create a config reader that reads a configuration from a JSON file.

**Important points**

- The reader supports parameterization using Handlebar template engine.

#### Configuration parameters

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors
Creates a new instance of the config reader.

> `public` JsonConfigReader(string path = null)

- **path**: string - (optional) path to the configuration file.


### Instance methods


#### ReadConfig
Reads a configuration and parameterizes it with given values.

> `public override` ReadConfig(IContext context, [ConfigParams](../../../components/config/config_params) [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### ReadObject
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `private` object ReadObject(IContext context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: object - JSON object with configuration.


#### Static methods

#### ReadConfig
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `public static` [ConfigParams](../../../components/config/config_params) ReadConfig(IContext context, string path, [ConfigParams](../../../components/config/config_params) parameters) 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: string - path to configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### ReadObject
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `public static` object ReadObject(IContext context, string path, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: string - path to configuration file.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: object - JSON object with configuration.

### Examples

```json
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
```
    
        
```cs
var configReader = new JsonConfigReader("config.json");
var parameters = ConfigParams.FromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");

configReader.ReadConfig("123", parameters);
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)

