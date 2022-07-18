---
type: docs
title: "YamlConfigReader"
linkTitle: "YamlConfigReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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

> `public` constructor(path: string = null)

- **path**: string - (optional) path to the configuration file.


### Instance methods


#### readConfig
Reads a configuration and parameterizes it with given values.

> `public` readConfig(correlationId: string, parameters: [ConfigParams](../../../commons/config/config_params)): Promise<[ConfigParams](../../../commons/config/config_params)>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters or null to skip parameterization.
- **returns**: Promise<[ConfigParams](../../../commons/config/config_params)> - ConfigParams configuration.


#### readObject
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> `public` readObject(correlationId: string, parameters: [ConfigParams](../../../commons/config/config_params)): any

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: any - a YAML object with a configuration.

### Static methods

#### readConfig
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> `public static` readConfig(correlationId: string, path: string, parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlationId**: string - (optional) transaction id to trace the execution through a call chain.
- **path**: string - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### readObject
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> `public static` readObject(correlationId: string, path: string, parameters: [ConfigParams](../../../commons/config/config_params)): any

- **correlationId**: string - (optional) transaction id to trace the execution through a call chain.
- **path**: string - a path to configuration file.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: any - a YAML object containing a configuration.

### Examples

```yaml
key1: "{{KEY1_VALUE}}"
key2: "{{KEY2_VALUE}}"
```
    
        
```typescript
let configReader = new YamlConfigReader("config.yml");
  
let parameters = ConfigParams.fromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");
let config = await configReader.readConfig("123", parameters);
// Result: key1=123;key2=ABC
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
