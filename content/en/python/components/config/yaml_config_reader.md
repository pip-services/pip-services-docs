---
type: docs
title: "YamlConfigReader"
linkTitle: "YamlConfigReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Config reader that reads configuration from YAML file.
---

**Implements**: [FileConfigReader](../file_config_reader)

See also [IConfigReader](../iconfig_reader), [FileConfigReader](../file_config_reader)

#### Configuration parameters

- **path**: path to configuration file
- **parameters**: this entire section is used as template parameters
- ...


**Example:**
```yaml
======== config.yml ======
key1: "{{KEY1_VALUE}}"
key2: "{{KEY2_VALUE}}"
===========================
```
    
        
```python
configReader = YamlConfigReader("config.yml")
parameters = ConfigParams.from_tuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader._read_config("123", parameters)
```


### Constructors
Creates a new instance of the config reader.

> YamlConfigReader(path: str = None)

- **path**: str - (optional) a path to configuration file.


### Methods


#### _read_config
Reads configuration and parameterize it with given values.

> _read_config(correlation_id: Optional[str], parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### _read_object
Reads configuration file, parameterizes its content and converts it into YAML object.

> _read_object(self, correlation_id: Optional[str], parameters: [ConfigParams](../../../commons/config/config_params)): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration.
- **returns**: Any - a YAML object with configuration.


#### read_config
Reads configuration from a file, parameterize it with given values and returns a new ConfigParams object.

> `static` read_config(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **path**: str - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### read_object
Reads configuration file, parameterizes its content and converts it into YAML object.

> `static` read_config(correlation_id: Optional[str], path: str, parameters: [ConfigParams](../../../commons/config/config_params)): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **path**: str - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration.
- **returns**: Any - a YAML object with configuration.

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)