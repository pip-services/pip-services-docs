---
type: docs
title: "IConfigurable"
linkTitle: "IConfigurable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface to set configuration parameters to an object. 


    It can be added to any existing class by implementing a single **configure()** method.


    If you need to emphasis the fact that **configure()** method can be called multiple times
    to change object configuration in runtime, use [IReconfigurable](../ireconfigurable) interface instead.
---
See also [ConfigParams](../config_params)



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
