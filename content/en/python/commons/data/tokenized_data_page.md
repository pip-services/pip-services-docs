---
type: docs
title: "TokenizedDataPage"
linkTitle: "TokenizedDataPage"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Data transfer object that is used to pass the results of paginated queries.
           
---

### Description

The TokenizedDataPageData allows you to create a transfer object that is used to pass the results of paginated queries. 

Important points

- This object contains the items of the retrieved page and the total number of items (optional).
- Additionally, the data page returns a token that has to be passed to the next search as a starting point.
- Most often, this object type is used to send responses to paginated queries.
- Pagination parameters are defined by a [TokenizedPagingParams](../tokenized_paging_params) object.
     - The *token* parameter in the TokenizedPagingParams defines where to start the search.
     - The *takes* parameter sets number of items to be returned in the page.
- The optional *total* parameter tells to return the total number of items in the query.
- However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.


### Constructors
Creates a new instance of data page and assigns its values.

> TokenizedDataPage(data: List[T], token: str = None, total: int = None)

- **data**: List[T] - a list of items from the retrieved page.
- **token**: str - (optional) a token to define astarting point for the next search.
- **total**: int - (optional) a total number of objects in the result.


### Fields

<span class="hide-title-link">

#### data
The items of the retrieved page.
> **data**: List[T]

#### token
The starting point for the next search.
> **token**: str

#### total
The total amount of items in a request.
> **total**: int

</span>

### Examples
```python
page = my_data_client.get_data_by_filter(
    "123",
    FilterParams.from_tuples("completed", True),
    TokenizedPagingParams(None, 100, True)
)
```

### See also
- #### [PagingParams](../paging_params)
