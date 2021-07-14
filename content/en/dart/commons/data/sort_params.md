---
type: docs
title: "SortParams"
linkTitle: "SortParams"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Defines a list of field names used to sort query results.
---

**Extends:** ListBase<[SortField](../sort_field)>

### Description

The SortParams class allows you to define a list of field names used to sort query results. In addition, it allows you to specify the type of order as ascending or descending.

### Constructors
Creates a new instance and initializes it with specified sort fields.

> SortParams(List<[SortField](../sort_field)> fields)

- **fields**: List<[SortField](../sort_field)> - list of fields to sort by.


### Examples
```dart
var filter = FilterParams.fromTuples(['type', 'Type1']);
var paging =  PagingParams(0, 100);
var sorting =  SortingParams( SortField('create_time', true));

myDataClient.getDataByFilter(filter, paging, sorting, (err, page) {...});

```

### See also
- #### [SortField](../sort_field)
