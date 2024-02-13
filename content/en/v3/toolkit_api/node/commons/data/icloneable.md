---
type: docs
title: "ICloneable"
linkTitle: "ICloneable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Interface to create objects with binary clones.
---

### Description

The ICloneable interface allows you to create objects with binary clones. 

### Instance methods

#### clone
Creates a binary clone of this object.

> clone(): any

- **returns**: any - clone of this object.

### Examples

```typescript
export class MyClass implements IMyClass, ICloneable {
  constructor() { };
 
  public clone(): any {
      var cloneObj = new (<any>this.constructor());
             
      // Copy every attribute from this to cloneObj here.
      ...
             
      return cloneObj;
  }
}
```
