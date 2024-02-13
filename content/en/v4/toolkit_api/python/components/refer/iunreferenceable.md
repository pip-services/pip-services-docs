---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Interface for components that require the capacity to clear previously defined references to dependent components.
---

### Description

The IUnreferenceable interface can be used for components that require the capacity to clear previously defined references to dependent components.

### Instance methods

#### unset_references
Unsets (clears) previously set references to dependent components. 

> unset_references()

### Examples

```python

class MyController(IReferenceable):
    _persistence = None

    def set_references(self, references):
        self._persistence = references.getOneRequired(Descriptor("mygroup", "persistence", "*", "*", "1.0"))

    def unset_references(self):
        self._persistence = None

```

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)
