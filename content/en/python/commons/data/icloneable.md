---
type: docs
title: "ICloneable"
linkTitle: "ICloneable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Interface to create objects with binary clones.
---

### Description

The ICloneable interface allows you to create objects with binary clones. 

### Instance methods

#### clone
Creates a binary clone of this object.

> clone(): Any

- **returns**: Any - a clone of this object.

### Examples

```python
class MyClass(IMyClass, ICloneable):
    def __init__():
        ...
        pass

    def clone(self):
        clone_obj = self.__init__()
        
        return clone_obj
```
