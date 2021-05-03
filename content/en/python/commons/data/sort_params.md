---
type: docs
title: "SortParams"
linkTitle: "SortParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Defines a field name and order used to sort query results.
---

**Implements:** list

See also [SortField](../sort_field)

**Example:**
```python
filter = FilterParams.fromTuples("type", "Type1")
paging = PagingParams(0, 100)
sorting = SortingParams(SortField("create_time", true))

myDataClient.get_data_by_filter(filter, paging, sorting)

```

### Constructors
Creates a new instance and initializes it with specified sort fields.

> SortParams(*fields: [SortField](../sort_field))

- **fields**: [SortField](../sort_field) - a list of fields to sort by.


### See also
- #### [SortField](../sort_field)