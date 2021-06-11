---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Abstract config reader that supports configuration parameterization.
---


### Description

The ConfigReader class allows you to create config readers that support configuration parameterization.

#### Configuration parameters
- **parameters**: this entire section is used as template parameters
    - **...**

### Constructors

#### NewConfigReader
Creates a new instance of the config reader.

> NewConfigReader() [*ConfigReader]()


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*ConfigReader]()) Configure(config [*cconfig.ConfigParams](../../../commons/config/config_params))

- **cconfig**: [*cconfig.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Parameterize
Parameterized configuration template given as string with dynamic parameters.

> (c [*ConfigReader]()) Parameterize(config string, parameters [*cconfig.ConfigParams](../../../commons/config/config_params)) (string, error)

- **cconfig**: string - a string with configuration template to be parameterized
- **parameters**: [*cconfig.ConfigParams](../../../commons/config/config_params) - dynamic parameters to inject into the template
- **returns**: (string, error) - a parameterized configuration string.


### See also
- #### [IConfigReader](../iconfigReader)
