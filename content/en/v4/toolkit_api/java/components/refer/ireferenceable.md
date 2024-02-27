---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Interface with methods used to set references for components that depend on other components. 

    
---

### Description

The IReferenceable interface allows you to set references for components that depend on other components.

Important points

- If a component requires explicit notification to unset references, it must also implement the [IUnreferenceable](../iunreferenceable) interface.

### Instance methods

#### setReferences
Sets references to dependent components.

> void setReferences([IReferences](../ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../ireferences) - references to locate the component's dependencies. 

### Examples

```java
{
   public class MyController implements IReferenceable {
      public IMyPersistence _persistence;
      ...
      public void setReferences(IReferences references) {
        this._persistence = (IMyPersistence)references.getOneRequired(
          new Descriptor("mygroup", "persistence", "*", "*", "1.0")
        );
      }
      ...
   }
   }

```

### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)
