---
type: docs
title: "FileConfigReader"
linkTitle: "FileConfigReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Config reader that reads a configuration from a file.
    
---

**Inherits**: [ConfigReader](../config_reader)

### Description

The FileConfigReader class allows you to create a config reader that reads a configuration from a file.

#### Configuration parameters

- **path**: path to configuration file
- **parameters**: this entire section is used as template parameters
- ...

### Constructors
Creates a new instance of the config reader.

> `public` FileConfigReader(string path = null)

- **path**: string - (optional) a path to configuration file.


### Properties

#### Path
Gets and sets the path to configuration file.

> `public` string Path { get; set; }


### Instance methods

#### Configure
Configures component by passing configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


### See also
- #### [IConfigReader](../iconfig_reader)
- #### [ConfigReader](../config_reader)
