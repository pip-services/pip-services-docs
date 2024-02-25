---
type: docs
title: "MemoryConfigReader"
linkTitle: "MemoryConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
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

> `public` MemoryConfigReader([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters


### Instance methods

#### addChangeListener
Adds a listener that will be notified when configuration is changed

> `public` void addChangeListener([INotifiable](../../../components/exec/inotifiable) listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.

#### configure
Configures a component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params)config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### readConfig
Reads a configuration and parameterizes it with given values.

> `public` [ConfigParams](../../../components/config/config_params) readConfig([IContext](../../../components/context/icontext) context, ConfigParams parameters) throws Exception

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../components/config/config_params) - ConfigParams configuration.


#### removeChangeListener
Remove a previously added change listener.

> `public` void removeChangeListener([INotifiable](../../../components/exec/inotifiable) listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.

### Examples

```java
 {
  ConfigParams config = ConfigParams.fromTuples(
       "connection.host", "{{SERVICE_HOST}}",
       "connection.port", "{{SERVICE_PORT}}{{^SERVICE_PORT}}8080{{/SERVICE_PORT}}"
  );
 
  MemoryConfigReader configReader = new MemoryConfigReader();
  configReader.configure(config);
 
  ConfigParams parameters = ConfigParams.fromValue(process.env);
 
  configReader.readConfig("123", parameters);
  }
```
