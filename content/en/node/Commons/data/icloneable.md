---
type: docs
title: "ICloneable"
linkTitle: "ICloneable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Interface for data objects that contain their latest change time.
---

**Example:**
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

### Methods

#### clone
Creates a binary clone of this object.

> clone(): any

- **returns**: any - a clone of this object.