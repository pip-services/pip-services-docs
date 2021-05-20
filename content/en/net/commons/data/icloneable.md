---
type: docs
title: "ICloneable"
linkTitle: "ICloneable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Interface to create objects with binary clones.
---

### Description

The ICloneable interface allows you to create objects with binary clones. 

### Instance methods

#### Clone
Creates a binary clone of this object.

> object Clone()

- **returns**: object - a clone of this object.

### Examples

```cs
public class MyClass: IMyClass, ICloneable 
{
    MyClass() { };
    public object clone()
    {
        var cloneObj = new Object(this);
        // Copy every attribute from this to cloneObj here.
        ...
        return cloneObj;
    }
}
```
