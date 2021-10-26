---
type: docs
title: "IConfigReader"
linkTitle: "IConfigReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for configuration readers that retrieve a configuration from various sources
    and make it available for other components.
    
---

### Description

The IConfigReader interface is used in configuration readers that retrieve a configuration from various sources and make it availale for other components.

**Important points**

- Some IConfigReader implementations may support configuration parameterization.
- The parameterization allows to use configuration as a template and inject there dynamic values. The values may come from application command like arguments or environment variables.

### Instance methods

#### addChangeListener
Adds a listener that will be notified when configuration is changed

> void addChangeListener([INotifiable](../../../commons/run/inotifiable) listener)

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be added.


#### removeChangeListener
Remove a previously added change listener.

> void removeChangeListener([INotifiable](../../../commons/run/inotifiable) listener)

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be removed.

#### readConfig
Reads configuration and parameterizes it with given values.

> Future<[ConfigParams](../../../commons/config/config_params)> readConfig(String? correlationId, ConfigParams parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values of the configuration or null to skip parameterization.
- **returns**: Future<[ConfigParams](../../../commons/config/config_params)> - ConfigParams configuration.
