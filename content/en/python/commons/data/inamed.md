---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Generic interface for data objects that can be uniquely identified by an id.

    The type specified in the interface defines the type of id field.
---

**Example:**
```python
class MyData(IIdentifiable, INamed):
    id = None
    name = None
```

### Fields

<span class="hide-title-link">

#### name
The object's humand-readable name.
> **name**: str

</span>