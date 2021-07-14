---
type: docs
title: "DataPage<T>"
linkTitle: "DataPage"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Data transfer object that is used to pass the results of a paginated query.
    This object contains items of the retrieved page.
---

### Description

The DataPage class allows you to create a data transfer object that can be used to pass the results of a paginated query. This object contains items of the retrieved page.

Important points

- Most often, this object type is used to send responses to paginated queries.
- Pagination parameters are defined by a [PagingParams](../paging_params) object.
- The *skip* parameter in the PagingParams indicates how many items to skip.
- The *takes* parameter sets number of items to return in the page.
- An optional *total* paramter allows you to specify the total number of items returned from a request. However, not all implementations support the *total* parameter because its generation may lead to severe performance implications.   

### Constructors
Creates a new instance of DataPage and assigns its values.

> DataPage(List\<T\> data, int total)

- **data**: List\<T\> - list of items from the retrieved page.
- **total**: int - total amount of items in a request.

### Fields


<span class="hide-title-link">

#### data
Items of the retrieved page.
> **data**: List\<T\>

#### total
Total amount of items in a request.
> **total**: int

</span>


### Examples

```dart
page = myDataClient.getDataByFilter(
  '123',
  FilterParams.fromTuples('completed': true),
  NewPagingParams(0, 100, true)
);
for (item in page.Data) {
      print(item);
 }
```

### See also
- #### [PagingParams](../paging_params)
