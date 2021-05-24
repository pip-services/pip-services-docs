---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Config reader that stores a configuration in memory.
---

**Inherits**: [IConfigReader](../iconfig_reader), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The MemoryConfigReader class allows you to create a config reader that stores a configuration in memory.

#### Configuration parameters
The configuration parameters are the configuration template

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors
Creates a new instance of a config reader.

> `public` MemoryConfigReader([ConfigParams](../../../commons/config/config_params) config = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters

### Fields

<span class="hide-title-link">

#### _config

> `protected` **_config**: [ConfigParams](../../../commons/config/config_params) = new ConfigParams()

</span>


### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ReadConfig
Reads a configuration and parameterizes it with given values.

> `public virtual` [ConfigParams](../../../commons/config/config_params) ReadConfig(string correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.

### Examples

```cs

var config = ConfigParams.FromTuples(
    "connection.host", "{{SERVICE_HOST}}",
    "connection.port", "{{SERVICE_PORT}}{{^SERVICE_PORT}}8080{{/SERVICE_PORT}}"
);

var configReader = new MemoryConfigReader();
configReader.Configure(config);

var parameters = ConfigParams.fromValue(process.env);
configReader.ReadConfig("123", parameters);
```
