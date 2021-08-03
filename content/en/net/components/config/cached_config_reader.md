---
type: docs
title: "CachedConfigReader"
linkTitle: "CachedConfigReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    TODO: add description
---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

TODO: add description


### Properties

#### Timeout
Timedout (Default value is 60000)
> `public` long Timeout{ get; set; }

### Instance methods

#### ReadConfig
Configures a component by passing its configuration parameters.

> `public` [ConfigParams](../../../commons/config/config_params) ReadConfig(string correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - configuration parameters to be set.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.
