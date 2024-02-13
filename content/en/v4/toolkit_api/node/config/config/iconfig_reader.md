---
type: docs
title: "IConfigReader"
linkTitle: "IConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-config-node"
description: >
    Interface for configuration readers that retrieve a configuration from various sources
    and make it available for other components.
    
---

### Description

The IConfigReader interface is used in configuration readers that retrieve a configuration from various sources and make it availale for other components.

Important points

- Some IConfigReader implementations may support configuration parameterization.
- The parameterization allows to use configuration as a template and inject there dynamic values. The values may come from application command like arguments or environment variables.

### Instance methods

#### addChangeListener
Adds a listener that will be notified when configuration is changed

> addChangeListener(listener: [INotifiable](../../../components/exec/inotifiable)): void

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.


#### removeChangeListener
Remove a previously added change listener.

> removeChangeListener(listener: [INotifiable](../../../components/exec/inotifiable)): void

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.

#### readConfig
Reads configuration and parameterizes it with given values.

> `public` readConfig(correlationId: string, parameters: [ConfigParams](../../../components/config/config_params)): Promise<[ConfigParams](../../../components/config/config_params)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: Promise<[ConfigParams](../../../components/config/config_params)> - ConfigParams configuration.
