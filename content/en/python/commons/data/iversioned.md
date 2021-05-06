---
type: docs
title: "IVersioned"
linkTitle: "IVersioned"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Interface for data objects that can be versioned.

---

### Description

The IVersioned interface allows you to define data objects that can be versioned.

Important points

- Versioning is often used as optimistic concurrency mechanism.
- The version doesn't have to be a number, but it is recommended to use sequential values to determine if one object has a newer or older version than another one.
- It is common to use the time of change as the object version.

### Fields

<span class="hide-title-link">

#### version
The object's version.
> **version**: str

### Examples
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

</span>
