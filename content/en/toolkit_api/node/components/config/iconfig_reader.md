---
type: docs
title: "IConfigReader"
linkTitle: "IConfigReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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

> addChangeListener(listener: [INotifiable](../../../commons/run/inotifiable)): void

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be added.


#### removeChangeListener
Remove a previously added change listener.

> removeChangeListener(listener: [INotifiable](../../../commons/run/inotifiable)): void

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be removed.

#### readConfig
Reads configuration and parameterizes it with given values.

> `public` readConfig(correlationId: string, parameters: [ConfigParams](../../../commons/config/config_params)): Promise<[ConfigParams](../../../commons/config/config_params)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: Promise<[ConfigParams](../../../commons/config/config_params)> - ConfigParams configuration.
