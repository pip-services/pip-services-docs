---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-config-dotnett"
description: >
    Config reader that stores a configuration in memory.
---

**Inherits**: [IConfigReader](../iconfig_reader), [IReconfigurable](../../../components/config/ireconfigurable)

### Description

The MemoryConfigReader class allows you to create a config reader that stores a configuration in memory.

#### Configuration parameters
The configuration parameters are the configuration template

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors
Creates a new instance of a config reader.

> `public` MemoryConfigReader([ConfigParams](../../../components/config/config_params) config = null)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters

### Fields

<span class="hide-title-link">

#### _config

> `protected` **_config**: [ConfigParams](../../../components/config/config_params) = new ConfigParams()

</span>


### Instance methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> `public virtual` void AddChangeListener([INotifiable](../../../components/exec/inotifiable) listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.


#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### ReadConfig
Reads a configuration and parameterizes it with given values.

> `public virtual` [ConfigParams](../../../components/config/config_params) ReadConfig(IContext context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### RemoveChangeListener
Remove a previously added change listener.

> `public virtual` void RemoveChangeListener(INotifiable listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.


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

