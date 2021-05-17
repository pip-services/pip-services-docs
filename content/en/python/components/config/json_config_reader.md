---
type: docs
title: "JsonConfigReader"
linkTitle: "JsonConfigReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
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


#### _read_config
Reads a configuration and parameterizes it with given values.

> _read_config(correlation_id: Optional[str], parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or None to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### _read_object
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> _read_object(correlation_id: Optional[str], parameters: [ConfigParams](../../../commons/config/config_params)): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: Any - a JSON object with configuration.


#### read_config
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `static` read_config(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **path**: str - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### read_object
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> `static` read_config(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **path**: str - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: Any - a JSON object with configuration.

### Examples

```json
======== config.json ======
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
===========================
```
    
        
```python
configReader = JsonConfigReader("config.json")
parameters = ConfigParams.from_tuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader._read_config("123", parameters)
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
