---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-config-python"
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

> MemoryConfigReader(config: [ConfigParams](../../../commons/config/config_params) = None)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters


### Instance methods

#### add_change_listener
Adds a listener that will be notified when configuration is changed

> add_change_listener(listener: [INotifiable](../../../commons/run/inotifiable))

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be added.

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### read_config_
Reads a configuration and parameterizes it with given values.

> read_config_(context: Optional[IContext], parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or None to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.


#### remove_change_listener
Remove a previously added change listener.

> remove_change_listener(listener: [INotifiable](../../../commons/run/inotifiable)): void

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be removed.

### Examples

```python
config = ConfigParams.from_tuples(
	"connection.host", "localhost",
	"connection.port", "8080"
)
config_reader = MemoryConfigReader()
config_reader.configure(config)
parameters = ConfigParams.from_value(sys.argv)
config_reader.read_config("123", parameters) # Result: connection.host=localhost;connection.port=8080
```
