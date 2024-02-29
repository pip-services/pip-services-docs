---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Interface for components that require the capacity to clear previously defined references to dependent components.
---

### Description

The IUnreferenceable interface can be used for components that require the capacity to clear previously defined references to dependent components.

### Instance methods

#### unsetReferences
Unsets (clears) previously set references to dependent components. 

> void unsetReferences()

### Examples

```java
{
   public class MyController implements IReferenceable, IUnreferenceable {
      public IMyPersistence _persistence;
      ...
      public void setReferences(IReferences references) {
        this._persistence = (IMyPersistence)references.getOneRequired(
          new Descriptor("mygroup", "persistence", "*", "*", "1.0")
        );
      }
 
      public void unsetReferences() {
        this._persistence = null;
      }
      ...
   }
   }
```

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)
