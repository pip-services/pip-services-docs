---
type: docs
title: "IIdentifiable"
linkTitle: "IIdentifiable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Generic interface for data objects that can be uniquely identified by an id.

    The type specified in the interface defines the type of id field.
---

**Example:**
```python
class MyData(IIdentifiable):
    id = None
```

### Fields

<span class="hide-title-link">

#### id
The unique object identifier of type K.
> **id**: K

</span>