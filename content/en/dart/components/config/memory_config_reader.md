---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

> MemoryConfigReader([[ConfigParams](../../../commons/config/config_params) config])

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### readConfig
Reads a configuration and parameterizes it with given values.

`@override`
> Future<[ConfigParams](../../../commons/config/config_params)> readConfig(String correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: Future<[ConfigParams](../../../commons/config/config_params)> - ConfigParams configuration.

### Examples

```dart
var config = ConfigParams.fromTuples([
    'connection.host', '{{SERVICE_HOST}}',
    'connection.port', '{{SERVICE_PORT}}{{^SERVICE_PORT}}8080{{/SERVICE_PORT}}'
]);

var configReader = new MemoryConfigReader();
configReader.configure(config);
var parameters = ConfigParams.fromValue(process.env);
var config = await configReader.readConfig('123', parameters)
    // Possible result: connection.host=10.1.1.100;connection.port=8080
```
