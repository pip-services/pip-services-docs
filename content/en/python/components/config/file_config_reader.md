---
type: docs
title: "FileConfigReader"
linkTitle: "FileConfigReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Abstract config reader that reads configuration from a file.
    Child classes add support for config files in their specific format
    like JSON, YAML or property files.
---

**Implements**: [ConfigReader](../config_reader)

See also [IConfigReader](../iconfig_reader), [ConfigReader](../config_reader)

#### Configuration parameters

- **path**: path to configuration file
- **parameters**: this entire section is used as template parameters
- ...

### Constructors
Creates a new instance of the config reader.

> FileConfigReader(path: str = None)

- **path**: str - (optional) a path to configuration file.


### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### get_path
Get the path to configuration file.

> get_path(): str

- **returns**: str - the path to configuration file.


#### set_path
Set the path to configuration file.

> set_path(path: str)

- **path**: str - a new path to configuration file.


### See also
- #### [IConfigReader](../iconfig_reader)
- #### [ConfigReader](../config_reader)