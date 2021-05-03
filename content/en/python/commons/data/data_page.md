---
type: docs
title: "DataPage"
linkTitle: "DataPage"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Data transfer object that is used to pass results of paginated queries.
    It contains items of retrieved page and optional total number of items.


    Most often this object type is used to send responses to paginated queries.
    Pagination parameters are defined by [PagingParams](../paging_params) object.
    The *skip* parameter in the PagingParams there means how many items to skip.
    The *takes* parameter sets number of items to return in the page.
    And the optional *total* parameter tells to return total number of items in the query.


    Remember: not all implementations support the *total* parameter
    because its generation may lead to severe performance implications.
---

See also [PagingParams](../paging_params)

**Example:**
```python
my_data_client.get_data_by_filter("123",
        FilterParams.from_tuples("completed", true),
        PagingParams(0, 100, true),
        page
)
for item in page.get_data():
    print (item)


```

### Constructors
Creates a new instance of data page and assigns its values.

> DataPage(data: Sequence[T] = None, total: int = None)

- **data**:  Sequence[T] - a list of items from the retrieved page.
- **total**: int - total amount of items in a request.

### Fields


<span class="hide-title-link">

#### data
The items of the retrieved page.
> **data**: Sequence[T]

#### total
The total amount of items in a request.
> **total**: int

</span>


### See also
- #### [PagingParams](../paging_params)