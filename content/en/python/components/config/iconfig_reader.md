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

### Instance methods

#### _read_config
Reads configuration and parameterize it with given values.

> `abstract` _read_config(correlation_id: Optional[str], parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: str - ConfigParams configuration.
