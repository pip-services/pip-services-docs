---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface for components that require explicit clearing of references to dependent components.
---

See also [IReferences](../ireferences), [IReferenceable](../ireferenceable)

**Example:**

```python

class MyController(IReferenceable):
    _persistence = None

    def set_references(self, references):
        self._persistence = references.getOneRequired(Descriptor("mygroup", "persistence", "*", "*", "1.0"))

    def unset_references(self):
        self._persistence = None

```

### Methods

#### unset_references
Unsets (clears) previously set references to dependent components. 

> unset_references()

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)