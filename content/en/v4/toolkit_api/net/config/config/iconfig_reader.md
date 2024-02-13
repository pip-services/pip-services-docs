---
type: docs
title: "IConfigReader"
linkTitle: "IConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-config-dotnet"
description: >
    Interface for configuration readers that retrieve a configuration from various sources
    and make it available for other components.
    
---

### Description

The IConfigReader interface is used in configuration readers that retrieve a configuration from various sources and make it availale for other components.

**Important points**

- Some IConfigReader implementations may support configuration parameterization.
- The parameterization allows you to use a configuration as a template and inject there dynamic values. The values may come from application command like arguments or environment variables.

### Instance methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> void AddChangeListener([INotifiable](../../../components/exec/inotifiable) listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.


#### RemoveChangeListener
Remove a previously added change listener.

> void RemoveChangeListener(INotifiable listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.

#### ReadConfig
Reads a configuration and parameterizes it with given values.

> `public` [ConfigParams](../../../components/config/config_params) ReadConfig(IContext context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.

