---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface with methods to set refernces to other components. 

    
---

See also [IReferences](../ireferences), [IUnreferenceable](../iunreferenceable), [Referencer](../referencer)

### Description

The IReferenceable interface allows you to set references for components that depend on other components.

Important points

- If component requires explicit notification to unset references it must also implement the [IUnreferenceable](../iunreferenceable) interface.

### Instance methods

#### set_references
Sets references to dependent components.

> setReferences(references: [IReferences](../ireferences)): void

- **references**: [IReferences](../ireferences) - references to locate the component dependencies. 

### Examples

```python
class MyController(IReferenceable):
    _persistence = None
    def set_references(self, references):
        self._persistence = references.get_one_required(Descriptor("mygroup", "persistence", "*", "*", "1.0"))
```

### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)
