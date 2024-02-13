---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
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

> AddChangeListener(listener [crun.INotifiable](../../../commons/run/inotifiable))

- **listener:** [crun.INotifiable](../../../commons/run/inotifiable) - a listener to be added.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*ConfigReader]()) Configure(ctx context.Context, config [*cconfig.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconfig.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Parameterize
Parameterized configuration template given as string with dynamic parameters.

> (c [*ConfigReader]()) Parameterize(config string, parameters [*cconfig.ConfigParams](../../../commons/config/config_params)) (string, error)

- **cconfig**: string - string with a configuration template to be parameterized
- **parameters**: [*cconfig.ConfigParams](../../../commons/config/config_params) - dynamic parameters to inject into the template
- **returns**: (string, error) - parameterized configuration string.


#### RemoveChangeListener
Remove a previously added change listener.

> RemoveChangeListener(listener [crun.INotifiable](../../../commons/run/inotifiable))

- **listener:** [crun.INotifiable](../../../commons/run/inotifiable) - a listener to be removed.


### See also
- #### [IConfigReader](../iconfig_reader)
