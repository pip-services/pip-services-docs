---
type: docs
title: "JsonConfigReader"
linkTitle: "JsonConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-config-python"
description: >
    Config reader that reads a configuration from a JSON file.

    
---

**Implements**: [FileConfigReader](../file_config_reader)

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

> JsonConfigReader(path: str = None)

- **path**: str - (optional) path to the configuration file.


### Instanc methods


#### read_config_
Reads a configuration and parameterizes it with given values.

> read_config_(context: Optional[IContext], parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or None to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### read_object_
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> read_object_(context: Optional[IContext], parameters: [ConfigParams](../../../commons/config/config_params)): Any

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: Any - a JSON object with configuration.


#### read_config
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `static` read_config(context: Optional[IContext], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain![image](https://github.com/pip-services/pip-services-docs/assets/68734409/7492f052-81e9-48b0-83d2-a3241d0b4dfc)
.
- **path**: str - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### read_object
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `static` read_config(context: Optional[IContext], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): Any

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **path**: str - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: Any - a JSON object with configuration.

### Examples

```json
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
```
    
        
```python
configReader = JsonConfigReader("config.json")
parameters = ConfigParams.from_tuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader.read_config_("123", parameters)
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
