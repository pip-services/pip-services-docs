---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Abstract config reader that supports configuration parameterization.
---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [IConfigReader](../iconfig_reader)

### Description

The ConfigReader class allows you to create config readers that support configuration parameterization.

#### Configuration parameters
- **parameters**: this entire section is used as template parameters
    - **...**


### Instance methods

#### Configure
Configures component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Parameterize
Parameterized configuration template given as string with dynamic parameters.

> `protected` string Parameterize(string config, [ConfigParams](../../../commons/config/config_params) parameters)

- **config**: string - a string with configuration template to be parameterized
- **parameters**: [ConfigParams](../../../commons/config/config_params) - dynamic parameters to inject into the template
- **returns**: string - parameterized configuration string.

### Abstract methods

#### ReadConfig
Reads configuration and parameterizes it with given values.

> `public abstract` [ConfigParams](../../../commons/config/config_params) ReadConfig(string correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.



### See also
- #### [IConfigReader](../iconfig_reader)
