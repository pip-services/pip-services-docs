---
type: docs
title: "Config"
linkTitle: "Config"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    
    This package contains interfaces and classes used to create configuration readers from different sources, such as YAML and JSON files. 
    
    
---
---

<div class="module-body"> 

### Interfaces

#### [IConfigReader](iconfig_reader)
Interface for configuration readers that retrieve configuration from various sources
and make it available for other components.

Some IConfigReader implementations may support configuration parameterization.
The parameterization allows to use configuration as a template and inject there dynamic values.
The values may come from application command like arguments or environment variables.

<br>

### Classes

#### [ConfigReader](config_reader)
Data object to store cached values with their keys used by [MemoryCache](../memory_cache)

#### [DefaultConfigReaderFactory](default_config_reader_factory)
Creates [IConfigReader](iconfig_reader) components by their descriptors.

#### [FileConfigReader](file_config_reader)
Abstract config reader that reads configuration from a file.
Child classes add support for config files in their specific format
like JSON, YAML or property files.

#### [JsonConfigReader](json_config_reader)
Config reader that reads configuration from JSON file.

The reader supports parameterization using Handlebar template engine.


#### [MemoryConfigReader](memory_config_reader)
Config reader that stores configuration in memory.

#### [YamlConfigReader](yaml_config_reader)
Config reader that reads configuration from YAML file.


</div>
