---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-config-python"
description: >
    Abstract config reader that supports configuration parameterization.
---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IConfigReader](../iconfig_reader)

### Description

The ConfigReader class allows you to create config readers that support configuration parameterization.

#### Configuration parameters
- **parameters**: this entire section is used as template parameters
    - **...**


### Instance methods

#### add_change_listener
Adds a listener that will be notified when configuration is changed

> add_change_listener(listener: [INotifiable](../../../commons/run/inotifiable))

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be added.

#### configure
Configures component by passing configuration parameters.

>  configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _parameterize
Parameterized configuration template given as string with dynamic parameters.

>  _parameterize(config: str, parameters: [ConfigParams](../../../commons/config/config_params)): str

- **config**: str - a string with configuration template to be parameterized
- **parameters**: [ConfigParams](../../../commons/config/config_params) - dynamic parameters to inject into the template
- **returns**: str - a parameterized configuration string.

#### remove_change_listener
Remove a previously added change listener.

> remove_change_listener(listener: [INotifiable](../../../commons/run/inotifiable)): void

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be removed.

### Abstract methods

#### read_config_
Reads configuration and parameterizes it with given values.

> `abstractmethod` read_config_(correlation_id: Optional[str], parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters of the configuration or None to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.



### See also
- #### [IConfigReader](../iconfig_reader)
