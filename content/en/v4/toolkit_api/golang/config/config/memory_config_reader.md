---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
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

> NewMemoryConfigReader(config [*cconfig.ConfigParams](../../../components/config/config_params)) [*MemoryConfigReader]()

- **cconfig**: [*cconfig.ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters

#### NewEmptyMemoryConfigReader
Creates a new instance of config reader.

> NewEmptyMemoryConfigReader() [*MemoryConfigReader]()

### Methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> AddChangeListener(ctx context.Context, listener [crun.INotifiable](../../../components/exec/inotifiable))

- **ctx**: context.Context - operation context.
- **listener:** [crun.INotifiable](../../../components/exec/inotifiable) - a listener to be added.


#### Configure
Configures a component by passing its configuration parameters.

> (c *MemoryConfigReader) Configure(ctx context.Context, config *cconfig.ConfigParams)

- **ctx**: context.Context - operation context.
- **cconfig**: [*cconfig.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### ReadConfig
Reads a configuration and parameterizes it with given values.

> (c *MemoryConfigReader) ReadConfig(ctx context.Context, correlationId string, parameters [*cconfig.ConfigParams](../../../components/config/config_params)) ([*cconfig.ConfigParams](../../../components/config/config_params), error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [*cconfig.ConfigParams](../../../components/config/config_params) - values to parameters the configuration or nil to skip parameterization.
- **returns**: [*cconfig.ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### RemoveChangeListener
Remove a previously added change listener.

> RemoveChangeListener(ctx context.Context, listener [crun.INotifiable](../../../components/exec/inotifiable))

- **ctx**: context.Context - operation context.
- **listener:** [crun.INotifiable](../../../components/exec/inotifiable) - a listener to be removed.

### Examples

```go
config := NewConfigParamsFromTuples(
	"connection.host", "{{SERVICE_HOST}}",
	"connection.port", "{{SERVICE_PORT}}{{^SERVICE_PORT}}8080{{/SERVICE_PORT}}",
)
configReader := NewMemoryConfigReader()
configReader.Configure(context.Background(), config)

parameters := NewConfigParamsFromValue(process.env)
res, err := configReader.ReadConfig(context.Background(), "123", parameters) 
// Possible result: connection.host=10.1.1.100;connection.port=8080
```

