---
type: docs
title: "IConfigReader"
linkTitle: "IConfigReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Interface for configuration readers that retrieve a configuration from various sources
    and make it available for other components.
    
---

### Description

The IConfigReader interface is used in configuration readers that retrieve a configuration from various sources and make it availale for other components.

Important points

- Some IConfigReader implementations may support configuration parameterization.
- The parameterization allows to use configuration as a template and inject there dynamic values. The values may come from application command like arguments or environment variables.

### Abstract methods

#### add_change_listener
Adds a listener that will be notified when configuration is changed

> `abstractmethod` add_change_listener(listener: [INotifiable](../../../commons/run/inotifiable))

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be added.


#### remove_change_listener
Remove a previously added change listener.

> `abstractmethod` remove_change_listener(listener: [INotifiable](../../../commons/run/inotifiable)): void

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be removed.

#### read_config_
Reads configuration and parameterizes it with given values.

> `abstractmethod` read_config_(correlation_id: Optional[str], parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or None to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.
