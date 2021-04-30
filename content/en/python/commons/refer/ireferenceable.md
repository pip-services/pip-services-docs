---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface for components that depends on other components. 

    If component requires explicit notification to unset references
    it shall additionally implement [IUnreferenceable](../iunreferenceable) interface.
---

See also [IReferences](../ireferences), [IUnreferenceable](../iunreferenceable), [Referencer](../referencer)

**Example:**

```python
class MyController(IReferenceable):
    _persistence = None
    def set_references(self, references):
        self._persistence = references.get_one_required(Descriptor("mygroup", "persistence", "*", "*", "1.0"))

```

### Methods

#### set_references
Sets references to dependent components.

> setReferences(references: [IReferences](../ireferences)): void

- **references**: [IReferences](../ireferences) - references to locate the component dependencies. 



### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)