---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-config-node"
description: >
    Config reader that stores a configuration in memory.
---

**Implements**: [IConfigReader](../iconfig_reader), [IReconfigurable](../../../components/config/ireconfigurable)

### Description

The MemoryConfigReader class allows you to create a config reader that stores a configuration in memory.

#### Configuration parameters
The configuration parameters are the configuration template

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors
Creates a new instance of a config reader.

> `public` constructor(config: [ConfigParams](../../../components/config/config_params) = null)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters


### Instance methods

#### addChangeListener
Adds a listener that will be notified when configuration is changed

> `public` addChangeListener(listener: [INotifiable](../../../components/exec/inotifiable)): void

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### readConfig
Reads a configuration and parameterizes it with given values.

> `public` readConfig(correlationId: string, parameters: [ConfigParams](../../../components/config/config_params)): [ConfigParams](../../../components/config/config_params)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### removeChangeListener
Remove a previously added change listener.

> `public` removeChangeListener(listener: [INotifiable](../../../components/exec/inotifiable)): void

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.

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
