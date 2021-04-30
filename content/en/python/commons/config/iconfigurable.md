---
type: docs
title: "IConfigurable"
linkTitle: "IConfigurable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface used to set configuration parameters to an object. 


    
---
See also [ConfigParams](../config_params)

### Description

IConfigurable is an interface used to set configuration parameters. It can be implemented by any class that needs to define configuration parameters, such as access control credentials. 

Important points:   

- A class that implements this interface needs to implement a single **configure()** method.  
- If you need to emphasize the fact that **configure()** method can be called multiple times
    to change object configuration in runtime, use [IReconfigurable](../ireconfigurable) interface instead.  

### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../config_params))

- **config**: [ConfigParams](../config_params) - configuration parameters to be set.

### Examples

```python
class MyClass(IConfigurable):
   _myParam = "default args"
   
   def configure(self, config):
       self._myParam = config.get_as_string_with_default("options.param", myParam)

```
### See also
- #### [ConfigParams](../config_params)
