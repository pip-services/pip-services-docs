---
type: docs
title: "SortField"
linkTitle: "SortField"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Defines a field name and the order type used to sort query results.
---

### Description

The SortField class allows you to define a field used to sort query results. In addition, it allows you to specify the order type as ascending or descending.

### Constructors
Creates a new instance and assigns its values.

> SortField([String name, bool ascending = true])

- **name**: String - name of the field to sort by.
- **ascending**: bool - true to sort in ascending order, and false to sort in descending order. 


### Fields

<span class="hide-title-link">

#### name
Field name to sort by.
> **name**: String

#### ascending
Flag used to define the sorting order. True to sort ascending, false to sort descending
> **ascending**: bool

</span>

### Examples
```dart
var filter = FilterParams.fromTuples(['type', 'Type1']);
var paging =  PagingParams(0, 100);
var sorting =  SortingParams( SortField('create_time', true));

myDataClient.getDataByFilter(filter, paging, sorting, (err, page) {...});
```

### See also
- #### [SortParams](../sort_params)
