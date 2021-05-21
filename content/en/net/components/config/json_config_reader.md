---
type: docs
title: "JsonConfigReader"
linkTitle: "JsonConfigReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Config reader that reads a configuration from a JSON file.

    
---

**Inherits**: [FileConfigReader](../file_config_reader)

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

> `public` JsonConfigReader(string path = null)

- **path**: string - (optional) path to the configuration file.


### Instance methods


#### ReadConfig
Reads a configuration and parameterizes it with given values.

> `public override` ReadConfig(string correlationId, [ConfigParams](../../../commons/config/config_params) [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### ReadObject
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `private` object ReadObject(string correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: object - a JSON object with configuration.


#### Static methods

#### ReadConfig
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `public static` [ConfigParams](../../../commons/config/config_params) ReadConfig(string correlationId, string path, [ConfigParams](../../../commons/config/config_params) parameters) 

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **path**: string - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### ReadObject
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `public static` object ReadObject(string correlationId, string path, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **path**: string - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: object - a JSON object with configuration.

### Examples

```json
======== config.json ======
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
===========================
```
    
        
```cs
var configReader = new JsonConfigReader("config.json");
var parameters = ConfigParams.FromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");

configReader.ReadConfig("123", parameters);
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
