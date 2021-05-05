---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Config reader that stores configuration in memory.
---

**Implements**: [IConfigReader](../iconfig_reader), [IReconfigurable](../../../commons/config/ireconfigurable)


#### Configuration parameters
The configuration parameters are the configuration template

- **path**: path to configuration file
- **parameters**: this entire section is used as template parameters
- ...


**Example:**       
```python
config = ConfigParams.from_tuples("connection.host", "{{SERVICE_HOST}}",
    "connection.port", "{{SERVICE_PORT}}{{^SERVICE_PORT}}8080{{/SERVICE_PORT}}")

configReader = MemoryConfigReader()
configReader.configure(config)

parameters = ConfigParams.fromValue(os.get_env())
configReader.readConfig("123", parameters)
```


### Constructors
Creates a new instance of config reader.

> MemoryConfigReader(config: [ConfigParams](../../../commons/config/config_params) = None)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters


### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _read_config
Reads configuration and parameterize it with given values.

> _read_config(correlation_id: Optional[str], parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.