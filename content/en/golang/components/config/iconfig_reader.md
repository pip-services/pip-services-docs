---
type: docs
title: "IConfigReader"
linkTitle: "IConfigReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
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

#### ReadConfig
Reads a configuration and parameterizes it with given values.

> ReadConfig(correlationId string, parameters [*c.ConfigParams](../../../commons/config/config_params)) ([*c.ConfigParams](../../../commons/config/config_params), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [*c.ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or nil to skip parameterization.
- **returns**: [*c.ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.
