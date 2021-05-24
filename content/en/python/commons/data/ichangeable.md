---
type: docs
title: "IChangeable"
linkTitle: "IChangeable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Interface for data objects that need to store the last modified date and time.
---

### Description

The IChangeable interface allows you to store the last modified date and time in the "change_time" parameter of a data object.

### Fields

<span class="hide-title-link">

#### change_time
The UTC time at which the object was last changed (created or updated).
> **change_time**: datetime

### Examples
```python
class MyData(IStringIdentifiable, IChangeable):
    id: str = '1234567'
    field1: str = 'field1'
    field2: int = 123
    change_time: datetime = datetime.now()
```
</span>
