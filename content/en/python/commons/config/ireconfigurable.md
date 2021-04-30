---
type: docs
title: "IReconfigurable"
linkTitle: "IReconfigurable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface to set configuration parameters to an object.  


    
---

### Description
The IReconfigurable interface is used to set configuration parameters to an object.

Important points:

- It is similar to [IConfigurable](../iconfigurable) interface, but emphasises the fact that **configure()** method can be called more than once to change object configuration in runtime.  

**Implements:** [IConfigurable](../iconfigurable)

See also [IConfigurable](../iconfigurable)

### Examples

```python
class MyClass(IReconfigurable):
   _myParam = "default args"

 # Implement configure
   def configure(self, config):
       self._myParam = config.get_as_string_with_default("options.param", myParam)

```


### See also
- #### [IConfigurable](../iconfigurable)

