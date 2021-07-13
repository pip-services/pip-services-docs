---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

> void setReferences([IReferences](../ireferences) references)

- **references**: [IReferences](../ireferences) - references to locate the component's dependencies. 

### Examples

```dart
class MyController implements IReferenceable {
    IMyPersistence persistence ;
    ...
    void setReferences(IReferences references ) {
        persistence = references.getOneRequired<IMyPersistence>(
             Descriptor('mygroup', 'persistence', '*', '*', '1.0')
        );
    }
    ...
}

```

### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)
