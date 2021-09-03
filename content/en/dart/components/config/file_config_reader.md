---
type: docs
title: "FileConfigReader"
linkTitle: "FileConfigReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Config reader that reads a configuration from a file.
    
---

**Extends**: [ConfigReader](../config_reader)

### Description

The FileConfigReader class allows you to create a config reader that reads a configuration from a file.

#### Configuration parameters

- **path**: path to a configuration file
- **parameters**: this entire section is used as template parameters
- ...

### Constructors
Creates a new instance of the config reader.

> FileConfigReader([String path])

- **path**: String - (optional) path to a configuration file.


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getPath
Gets the path to a configuration file.

> String getPath()

- **returns**: String - path to the configuration file.


#### setPath
Sets the path to a configuration file.

> void setPath(String path)

- **path**: String - new path to the configuration file.


### See also
- #### [IConfigReader](../iconfig_reader)
- #### [ConfigReader](../config_reader)
