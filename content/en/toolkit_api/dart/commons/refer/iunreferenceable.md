---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

```dart
class MyController implements IReferenceable, IUnreferenceable {
   IMyPersistence persistence;
   ...
   void  setReferences(IReferences references) {
       persistence = references.getOneRequired<IMyPersistence>(
            Descriptor('mygroup', 'persistence', '*', '*', '1.0')
       );
   }
   void unsetReferences() {
       persistence = null;
   }
   ...
}
```

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)
