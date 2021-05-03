---
type: docs
title: "ICloneable"
linkTitle: "ICloneable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Interface for data objects that contain their latest change time.
---

**Example:**
```python
class MyClass(IMyClass, ICloneable):
    def __init__():
        ...
        pass

    def clone(self):
        clone_obj = self.__init__()
        
        return clone_obj
```

### Methods

#### clone
Creates a binary clone of this object.

> clone(): Any

- **returns**: Any - a clone of this object.