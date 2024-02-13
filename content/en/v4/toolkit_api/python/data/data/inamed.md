---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-data-python"
description: > 
   Interface for data objects that have human-readable names.

---

### Description

The INamed interface is used to define data objects containing a human-readable name.

### Fields

<span class="hide-title-link">

#### name
The object's humand-readable name.
> **name**: str

</span>

### Examples
```python
class MyData(IIdentifiable, INamed):
    id = None
    name = None
```


