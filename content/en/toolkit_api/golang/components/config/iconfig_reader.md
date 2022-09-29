---
type: docs
title: "IConfigReader"
linkTitle: "IConfigReader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Interface for configuration readers that retrieve a configuration from various sources
    and make it available for other components.
    
---

### Description

The IConfigReader interface is used in configuration readers that retrieve a configuration from various sources and make it availale for other components.

Important points

- Some IConfigReader implementations may support configuration parameterization.
- The parameterization allows to use configuration as a template and inject there dynamic values. The values may come from application command like arguments or environment variables.

### Methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> AddChangeListener(ctx context.Context, listener [crun.INotifiable](../../../commons/run/inotifiable))

- **ctx**: context.Context - operation context.
- **listener:** [crun.INotifiable](../../../commons/run/inotifiable) - a listener to be added.


#### RemoveChangeListener
Remove a previously added change listener.

> RemoveChangeListener(ctx context.Context, listener [crun.INotifiable](../../../commons/run/inotifiable))

- **ctx**: context.Context - operation context.
- **listener:** [crun.INotifiable](../../../commons/run/inotifiable) - a listener to be removed.

#### ReadConfig
Reads a configuration and parameterizes it with given values.

> ReadConfig(ctx context.Context, correlationId string, parameters [*c.ConfigParams](../../../commons/config/config_params)) ([*c.ConfigParams](../../../commons/config/config_params), error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [*c.ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or nil to skip parameterization.
- **returns**: [*c.ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.
