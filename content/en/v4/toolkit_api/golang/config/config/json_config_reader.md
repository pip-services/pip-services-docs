---
type: docs
title: "JsonConfigReader"
linkTitle: "JsonConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
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

#### NewJsonConfigReader
Creates a new instance of the config reader.

> NewJsonConfigReader(path string) [*JsonConfigReader]()

- **path**: string - (optional) path to the configuration file.


#### NewEmptyJsonConfigReader
Creates a new instance of the config reader.

> NewEmptyJsonConfigReader() [*JsonConfigReader]()


### Methods

#### ReadConfig
Reads a configuration and parameterizes it with given values.

> (c [*JsonConfigReader]()) ReadConfig(ctx context.Context, context.Context, correlationId string, parameters [*cconfig.ConfigParams](../../../components/config/config_params)) (result [*cconfig.ConfigParams](../../../components/config/config_params), err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [*cconfig.ConfigParams](../../../components/config/config_params) - values to parameters the configuration or nil to skip parameterization.
- **returns**: (result [*cconfig.ConfigParams](../../../components/config/config_params), err error) - ConfigParams configuration.


#### ReadObject
Reads a configuration file, parameterizes its content and converts it into JSON object.

> (c [*JsonConfigReader]()) ReadObject(ctx context.Context, correlationId string, parameters [*cconfig.ConfigParams](../../../components/config/config_params)) (any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [*cconfig.ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: (any, error) - JSON object with configuration.


#### ReadConfig
Reads a configuration from a file, parameterizes it with given values and returns a new ConfigParams object.

> (c [*JsonConfigReader]()) ReadConfig(ctx context.Context, correlationId string, parameters [*cconfig.ConfigParams](../../../components/config/config_params)) (result [*cconfig.ConfigParams](../../../components/config/config_params), err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to a configuration file.
- **parameters**: [*cconfig.ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: (result [*cconfig.ConfigParams](../../../components/config/config_params), err error) - ConfigParams configuration.


#### ReadJsonObject
Reads a configuration file, parameterizes its content and converts it into a JSON object.

> ReadJsonObject(ctx context.Context, correlationId string, path string, parameters [*cconfig.ConfigParams](../../../components/config/config_params)) (any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **path**: string - path to configuration file.
- **parameters**: [*cconfig.ConfigParams](../../../components/config/config_params) - values of the configuration parameters.
- **returns**: (any, error) - JSON object with configuration.

### Examples

```json
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
```
    
        
```go
configReader := NewJsonConfigReader("config.json")
parameters := NewConfigParamsFromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
res, err := configReader.ReadConfig(context.Background(), "123", parameters)
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)

