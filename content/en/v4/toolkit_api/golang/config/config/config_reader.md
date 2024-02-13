---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Abstract config reader that supports configuration parameterization.
---


### Description

The ConfigReader class allows you to create config readers that support configuration parameterization.

#### Configuration parameters
- **parameters**: this entire section is used as template parameters.
    - **...**

### Constructors

#### NewConfigReader
Creates a new instance of the config reader.

> NewConfigReader() [*ConfigReader]()


### Methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> AddChangeListener(listener [crun.INotifiable](../../../components/exec/inotifiable))

- **listener:** [crun.INotifiable](../../../components/exec/inotifiable) - a listener to be added.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*ConfigReader]()) Configure(ctx context.Context, config [*cconfig.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconfig.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Parameterize
Parameterized configuration template given as string with dynamic parameters.

> (c [*ConfigReader]()) Parameterize(config string, parameters [*cconfig.ConfigParams](../../../components/config/config_params)) (string, error)

- **cconfig**: string - string with a configuration template to be parameterized
- **parameters**: [*cconfig.ConfigParams](../../../components/config/config_params) - dynamic parameters to inject into the template
- **returns**: (string, error) - parameterized configuration string.


#### RemoveChangeListener
Remove a previously added change listener.

> RemoveChangeListener(listener [crun.INotifiable](../../../components/exec/inotifiable))

- **listener:** [crun.INotifiable](../../../components/exec/inotifiable) - a listener to be removed.


### See also
- #### [IConfigReader](../iconfig_reader)


