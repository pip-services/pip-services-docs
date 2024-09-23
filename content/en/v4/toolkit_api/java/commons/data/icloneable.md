---
type: docs
title: "ICloneable"
linkTitle: "ICloneable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    Interface to create objects with binary clones.
---

### Description

The ICloneable interface allows you to create objects with binary clones. 

### Instance methods

#### clone
Creates a binary clone of this object.

> Object clone()

- **returns**: Object - clone of this object.

### Examples

```java
{
   public class MyClass implements IMyClass, ICloneable {
     MyClass() { };
 
     public Object clone() {
       Object cloneObj = new Object (this);
 
       // Copy every attribute from this to cloneObj here.
       ...
 
       return cloneObj;
     }
   }
   }
```
