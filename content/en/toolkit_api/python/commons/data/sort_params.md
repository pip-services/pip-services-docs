---
type: docs
title: "SortParams"
linkTitle: "SortParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Defines a list of field names used to sort query results.
---

**Implements:** list

### Description

The SortParams class allows you to define a list of field names used to sort query results. In addition, it allows you to specify the type of order as ascending or descending.

### Constructors
Creates a new instance and initializes it with specified sort fields.

> SortParams(*fields: [SortField](../sort_field))

- **fields**: [SortField](../sort_field) - a list of fields to sort by.

### Examples
```python
filter = FilterParams.fromTuples("type", "Type1")
paging = PagingParams(0, 100)
sorting = SortingParams(SortField("create_time", true))

myDataClient.get_data_by_filter(filter, paging, sorting)
```

### See also
- #### [SortField](../sort_field)
