---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Interface for data objects that can track their changes, including logical deletion.
---

**Implements:** [IChangeable](../ichangeable)

### Description

The ITrackagle interface allows you to define data objects that can track their changes, including logical deletion.

### Fields

<span class="hide-title-link">

#### create_time
The UTC time at which the object was created.
> **create_time**: datetime

#### change_time
The UTC time at which the object was last changed (created, updated, or deleted).
> **change_time**: datetime

#### deleted
The logical deletion flag. True when object is deleted and None or false otherwise
> **deleted**: datetime

</span>

### Examples

```python
class MyData(IStringIdentifiable, ITrackable):
    id = None
    ...
    change_time = None
    create_time = None
    deleted = None
```

### See also
- #### [IChangeable](../ichangeable)
