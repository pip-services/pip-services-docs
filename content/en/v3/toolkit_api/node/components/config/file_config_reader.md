---
type: docs
title: "FileConfigReader"
linkTitle: "FileConfigReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Config reader that reads a configuration from a file.
    
---

**Extends**: [ConfigReader](../config_reader)

### Description

The FileConfigReader class allows you to create a config reader that reads a configuration from a file.

#### Configuration parameters

- **path**: path to configuration file
- **parameters**: this entire section is used as template parameters
- ...

### Constructors
Creates a new instance of the config reader.

> `public` constructor(path: string = null)

- **path**: string - (optional) a path to configuration file.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getPath
Gets the path to configuration file.

> getPath(): string

- **returns**: string - path to configuration file.


#### setPath
Sets the path to configuration file.

> setPath(path: string): void

- **path**: string - new path to configuration file.


### See also
- #### [IConfigReader](../iconfig_reader)
- #### [ConfigReader](../config_reader)
