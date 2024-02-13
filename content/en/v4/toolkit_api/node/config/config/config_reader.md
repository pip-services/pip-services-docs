---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-config-node"
description: >
    Abstract config reader that supports configuration parameterization.
---

**Implements**: [IConfigurable](../../../components/config/iconfigurable), [IConfigReader](../iconfig_reader)

### Description

The ConfigReader class allows you to create config readers that support configuration parameterization.

#### Configuration parameters
- **parameters**: this entire section is used as template parameters
    - **...**


### Instance methods

#### addChangeListener
Adds a listener that will be notified when configuration is changed

> `public` addChangeListener(listener: [INotifiable](../../../components/exec/inotifiable)): void

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### parameterize
Parameterized configuration template given as string with dynamic parameters.

> `protected` parameterize(config: string, parameters: [ConfigParams](../../../components/config/config_params)): string

- **config**: string - a string with configuration template to be parameterized
- **parameters**: [ConfigParams](../../../components/config/config_params) - dynamic parameters to inject into the template
- **returns**: string - a parameterized configuration string.


#### removeChangeListener
Remove a previously added change listener.

> `public` removeChangeListener(listener: [INotifiable](../../../components/exec/inotifiable)): void

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.

### Abstract methods

#### readConfig
Reads configuration and parameterizes it with given values.

> `public abstract` readConfig(correlationId: string, parameters: [ConfigParams](../../../components/config/config_params)) Promise<[ConfigParams](../../../components/config/config_params)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: Promise<[ConfigParams](../../../components/config/config_params)> - ConfigParams configuration.



### See also
- #### [IConfigReader](../iconfig_reader)
