---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Interface for data objects that can be versioned.

    Versioning is often used as optimistic concurrency mechanism. 


    The version doesn't have to be a number, but it is recommended to use sequential
    values to determine if one object has newer or older version than another one.


    It is a common pattern to use the time of change as the object version.
---

**Example:**
```python
class MyData(IStringIdentifiable, IVersioned):
    id = None
    version = None
    # do something
    def update_data(item):
        # do something
        if item.version < old_item.version:
            raise ConcurrencyException(None, "VERSION_CONFLICT", "The change has older version stored args")
    
    # do something
```

### Fields

<span class="hide-title-link">

#### version
The object's version.
> **version**: str

</span>