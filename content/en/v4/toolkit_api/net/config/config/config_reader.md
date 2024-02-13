---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-config-dotnet"
description: >
    Abstract config reader that supports configuration parameterization.
---

**Inherits**: [IConfigurable](../../../components/config/iconfigurable), [IConfigReader](../iconfig_reader)

### Description

The ConfigReader class allows you to create config readers that support configuration parameterization.

#### Configuration parameters
- **parameters**: this entire section is used as template parameters
    - **...**


### Instance methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> `public virtual` void AddChangeListener([INotifiable](../../../components/exec/inotifiable) listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.

#### Configure
Configures component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Parameterize
Parameterized configuration template given as string with dynamic parameters.

> `protected` string Parameterize(string config, [ConfigParams](../../../components/config/config_params) parameters)

- **config**: string - a string with configuration template to be parameterized
- **parameters**: [ConfigParams](../../../components/config/config_params) - dynamic parameters to inject into the template
- **returns**: string - parameterized configuration string.

#### RemoveChangeListener
Remove a previously added change listener.

> `public virtual` void RemoveChangeListener(INotifiable listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.

### Abstract methods

#### ReadConfig
Reads configuration and parameterizes it with given values.

> `public abstract` [ConfigParams](../../../components/config/config_params) ReadConfig(IContext context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.



### See also
- #### [IConfigReader](../iconfig_reader)
