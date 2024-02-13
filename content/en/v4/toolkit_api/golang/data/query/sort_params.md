---
type: docs
title: "SortParams"
linkTitle: "SortParams"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: > 
    Defines a list of field names used to sort query results.
---

**Implements:** []<[SortField](../sort_field)>

### Description

The SortParams class allows you to define a list of field names used to sort query results. In addition, it allows you to specify the type of order as ascending or descending.

### Constructors

#### NewSortParams
Creates a new instance and initializes it with specified sort fields.

> NewSortParams(fields [][SortField](../sort_field)) [*SortField](../sort_field)

- **fields**: [][SortField](../sort_field) - list of fields to sort by.


### Examples
```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewPagingParams(0, 100);
sorting := NewSortingParams(NewSortField("create_time", true));
 
myDataClient.getDataByFilter(filter, paging, sorting, (err, page) => {...});

```

### See also
- #### [SortField](../sort_field)

