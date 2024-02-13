---
type: docs
title: "CachedConfigReader"
linkTitle: "CachedConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-config-dotnet"
description: >
    Creates a cached configuration reader.
---

**Inherits**: [IConfigurable](../../../components/config/iconfigurable), [IReconfigurable](../../../components/config/ireconfigurable), [IConfigReader](../iconfig_reader)

### Description

The CachedConfigReader class allows you to create a cached configuration reader.


### Properties

#### Timeout
Timedout (Default value is 60000)
> `public` long Timeout{ get; set; }

### Instance methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> `public virtual` void AddChangeListener([INotifiable](../../../components/exec/inotifiable) listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.

#### ReadConfig
Configures a component by passing its configuration parameters.

> `public` [ConfigParams](../../../components/config/config_params) ReadConfig(IContext context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.

#### RemoveChangeListener
Remove a previously added change listener.

> `public virtual` void RemoveChangeListener(INotifiable listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.
