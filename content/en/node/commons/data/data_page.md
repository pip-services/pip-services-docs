---
type: docs
title: "DataPage"
linkTitle: "DataPage"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
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
Creates a new instance of data page and assigns its values.

> DataPage(data: Sequence[Any] = None, total: int = None)

- **data**:  Sequence[Any] - a list of items from the retrieved page.
- **total**: int - total amount of items in a request.

### Fields


<span class="hide-title-link">

#### data
The items of the retrieved page.
> **data**: Sequence[Any]

#### total
The total amount of items in a request.
> **total**: int

</span>

### Examples

```python
my_data_client.get_data_by_filter("123",
        FilterParams.from_tuples("completed", true),
        PagingParams(0, 100, true),
        page
)
for item in page.get_data():
    print (item)


```

### See also
- #### [PagingParams](../paging_params)
