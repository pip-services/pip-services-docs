---
type: docs
title: "FileConfigReader"
linkTitle: "FileConfigReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Config reader that reads a configuration from a file.
    
---

**Implements**: [ConfigReader](../config_reader)

### Description

The FileConfigReader class allows you to create a config reader that reads a configuration from a file.

#### Configuration parameters

- **path**: path to configuration file
- **parameters**: this entire section is used as template parameters
- ...

### Constructors

#### NewFileConfigReader
Creates a new instance of the config reader.

> NewFileConfigReader(path string) [*FileConfigReader]()

- **path**: string - (optional) a path to configuration file.

#### NewEmptyFileConfigReader
Creates a new instance of the config reader.

> NewEmptyFileConfigReader() [*FileConfigReader]()


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*FileConfigReader]()) Configure(config [*cconfig.ConfigParams](../../../commons/config/config_params))

- **cconfig**: [*cconfig.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Path
Gets the path to configuration file.

> (c [*FileConfigReader]()) Path() string 

- **returns**: string - path to configuration file.


#### SetPath
Sets the path to configuration file.

> (c [*FileConfigReader]()) SetPath(path string)

- **path**: string - new path to configuration file.


### See also
- #### [IConfigReader](../iconfig_reader)
- #### [ConfigReader](../config_reader)
