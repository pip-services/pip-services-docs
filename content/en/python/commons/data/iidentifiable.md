---
type: docs
title: "IIdentifiable"
linkTitle: "IIdentifiable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Interface used to create data objects that can be uniquely idendified by an ID.

---

### Description

The IIdentifiable interface is used to create data objects that can be uniquely idendified by an ID.

Important points

- The type specified in the interface defines the type of the ID field.

### Fields

<span class="hide-title-link">

#### id
The unique object identifier of type K.
> **id**: K

### Examples
```python
class MyData(IIdentifiable):
    id = None
```

</span>
