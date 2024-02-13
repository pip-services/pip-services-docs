---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-config-dart"
description: >
    Abstract config reader that supports configuration parameterization.
---

**Implements**: [IConfigurable](../../../components/config/iconfigurable), [IConfigReader](../iconfig_reader)

### Description

The ConfigReader class allows you to create config readers that support configuration parameterization.

#### Configuration parameters
- **parameters**: this entire section is used as template parameters
    - **...**


### Instance methods

#### addChangeListener
Adds a listener that will be notified when configuration is changed

`@override`
> void addChangeListener([INotifiable](../../../components/exec/inotifiable) listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be added.


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### parameterize
Parameterized configuration template given as string with dynamic parameters.

> String? parameterize(String config, [ConfigParams](../../../components/config/config_params) parameters)

- **config**: String - string with configuration template to be parameterized
- **parameters**: [ConfigParams](../../../components/config/config_params) - dynamic parameters to inject into the template
- **returns**: String? - parameterized configuration string.


#### removeChangeListener
Remove a previously added change listener.

`@override`
> void removeChangeListener([INotifiable](../../../components/exec/inotifiable) listener)

- **listener:** [INotifiable](../../../components/exec/inotifiable) - a listener to be removed.


#### readConfig
Reads configuration and parameterizes it with given values.

`@override`
> Future<[ConfigParams](../../../components/config/config_params)> readConfig(IContext? context, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **parameters**: [ConfigParams](../../../components/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: Future<[ConfigParams](../../../components/config/config_params)> - ConfigParams configuration.


### See also
- #### [IConfigReader](../iconfig_reader/)
