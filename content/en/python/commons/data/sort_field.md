---
type: docs
title: "SortField"
linkTitle: "SortField"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Defines a field name and order used to sort query results.
---

See also [SortParams](../sort_params)

**Example:**
```python
filter = FilterParams.fromTuples("type", "Type1")
paging = PagingParams(0, 100)

sorting = SortingParams(SortField("create_time", true))
myDataClient.get_data_by_filter(filter, paging, sorting)

```

### Constructors
Creates a new instance and assigns its values.

> SortField(name: str = None, ascending: bool = True)

- **name**: str - the name of the field to sort by.
- **ascending**: bool - true to sort in ascending order, and false to sort in descending order. 


### Fields

<span class="hide-title-link">

#### name
The field name to sort by
> **name**: str

#### ascending
The flag to define sorting order. True to sort ascending, false to sort descending
> **ascending**: bool

</span>


### See also
- #### [SortParams](../sort_params)