---
type: docs
title: "CachedConfigReader"
linkTitle: "CachedConfigReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Creates a cached configuration reader.
---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [IReconfigurable](../../../commons/config/ireconfigurable), [IConfigReader](../iconfig_reader)

### Description

The CachedConfigReader class allows you to create a cached configuration reader.


### Properties

#### Timeout
Timedout (Default value is 60000)
> `public` long Timeout{ get; set; }

### Instance methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> `public virtual` void AddChangeListener([INotifiable](../../../commons/run/inotifiable) listener)

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be added.

#### ReadConfig
Configures a component by passing its configuration parameters.

> `public` [ConfigParams](../../../commons/config/config_params) ReadConfig(string correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - configuration parameters to be set.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.

#### RemoveChangeListener
Remove a previously added change listener.

> `public virtual` void RemoveChangeListener(INotifiable listener)

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be removed.
