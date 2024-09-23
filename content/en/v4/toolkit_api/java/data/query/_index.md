---
type: docs
title: "Query"
linkTitle: "Query"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Todo: Rewrite this description
---
---

<div class="module-body"> 

### Classes

#### [DataPage](data_page)
Data transfer object that is used to pass results of paginated queries.
It contains the items of a retrieved page and (optional) the total number of items.
Most often this object type is used to send responses to paginated queries.
Pagination parameters are defined by the [PagingParams](paging_params) object.
The *skip* parameter in the PagingParams indicates how many items to skip.
The *takes* parameter sets the number of items to return in the page.
And the optional *total* parameter tells to return the total number of items in the query.

#### [FilterParams](filter_params)
Data transfer object used to pass filter parameters as simple key-value pairs.

#### [PagingParams](paging_params)
Data transfer object used to pass paging parameters for queries.
The page is defined by two parameters:
- the *skip* parameter defines number of items to skip.
- the *take* parameter sets how many items to return in a page.
- additionally, the optional *total* parameter tells to return the total number of items in the query.


#### [ProjectionParams](projection_params)
Defines projection parameters with a list if fields to include into query results.
The parameters support two formats: dot format and nested format.
The dot format is the standard way to define included fields and subfields using
dot object notation: *"field1,field2.field21,field2.field22.field221"*


#### [SortField](sort_field)
Defines a field name and order used to sort query results.


#### [SortParams](sort_params)
Defines a list of field names used to sort query results.


#### [TokenizedDataPage](tokenized_data_page)
Data transfer object used to pass results of paginated queries.
It contains items of a retrieved page and (optional) the total number of items.
Most often this object type is used to send responses to paginated queries.

#### [TokenizedPagingParams](tokenized_paging_params)
Data transfer object used to pass tokenized paging parameters for queries.
It can be used for complex paging scenarios, like paging across multiple databases
where the previous state is encoded in a token. The token is usually retrieved from
the previous response. The initial request shall go with token == *null*

</div>

