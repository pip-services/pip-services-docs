---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Config reader that stores a configuration in memory.
---

### Description

The MemoryConfigReader class allows you to create a config reader that stores a configuration in memory.

#### Configuration parameters
The configuration parameters are the configuration template

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors

#### NewMemoryConfigReader
Creates a new instance of a config reader.

> NewMemoryConfigReader(config [*cconfig.ConfigParams](../../../commons/config/config_params)) [*MemoryConfigReader]()

- **cconfig**: [*cconfig.ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters

#### NewEmptyMemoryConfigReader
Creates a new instance of config reader.

> NewEmptyMemoryConfigReader() *MemoryConfigReader 

### Methods

#### Configure
Configures a component by passing its configuration parameters.

> (c *MemoryConfigReader) Configure(config *cconfig.ConfigParams)

- **cconfig**: [*cconfig.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ReadConfig
Reads a configuration and parameterizes it with given values.

> (c *MemoryConfigReader) ReadConfig(correlationId string, parameters [*cconfig.ConfigParams](../../../commons/config/config_params)) ([*cconfig.ConfigParams](../../../commons/config/config_params), error)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **parameters**: [*cconfig.ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or nil to skip parameterization.
- **returns**: [*cconfig.ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.

### Examples

```go
config := NewConfigParamsFromTuples(
    "connection.host", "localhost",
    "connection.port", "8080"
);
configReader := NewMemoryConfigReader();
configReader.Configure(config);
  
parameters := NewConfigParamsFromValue(process.env);
  
res, err := configReader.ReadConfig("123", parameters);
// Possible result: connection.host=10.1.1.100;connection.port=8080
```
