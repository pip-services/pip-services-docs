---
type: docs
title: "FileConfigReader"
linkTitle: "FileConfigReader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
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

- **path**: string - (optional) path to a configuration file.

#### NewEmptyFileConfigReader
Creates a new instance of the config reader.

> NewEmptyFileConfigReader() [*FileConfigReader]()


### Methods

#### Configure
Configures a component by passing its configuration parameters.

> (c [*FileConfigReader]()) Configure(ctx context.Context, config [*cconfig.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **cconfig**: [*cconfig.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Path
Gets the path to a configuration file.

> (c [*FileConfigReader]()) Path() string 

- **returns**: string - path to a configuration file.


#### SetPath
Sets the path to a configuration file.

> (c [*FileConfigReader]()) SetPath(path string)

- **path**: string - new path to a configuration file.


### See also
- #### [IConfigReader](../iconfig_reader)
- #### [ConfigReader](../config_reader)
