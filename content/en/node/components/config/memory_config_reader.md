---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Config reader that stores a configuration in memory.
---

**Implements**: [IConfigReader](../iconfig_reader), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The MemoryConfigReader class allows you to create a config reader that stores a configuration in memory.

#### Configuration parameters
The configuration parameters are the configuration template

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors
Creates a new instance of a config reader.

> `public` constructor(config: [ConfigParams](../../../commons/config/config_params) = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### readConfig
Reads a configuration and parameterizes it with given values.

> `public` readConfig(correlationId: string, parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.

### Examples

```typescript
let config = ConfigParams.fromTuples(
    "connection.host", "{{SERVICE_HOST}}",
    "connection.port", "{{SERVICE_PORT}}{{^SERVICE_PORT}}8080{{/SERVICE_PORT}}"
);
    
let configReader = new MemoryConfigReader();
configReader.configure(config);
    
let parameters = ConfigParams.fromValue(process.env);
    
let config = await configReader.readConfig("123", parameters);
// Possible result: connection.host=10.1.1.100;connection.port=8080
```
