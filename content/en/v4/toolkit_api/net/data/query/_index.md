---
type: docs
title: "Data"
linkTitle: "Data"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-data-dotnet"
description: >
    This package contains a set of abstract, portable data types. Some examples are anytype, anyvalues, anyarrays, anymaps, and stringmaps. Many serializable classes are based on these data types. For example, the classes configmap, filtermaps and  connection parameters, which extend stringvaluemap. The package also includes several classes for working with data (E.g. data paging, filtering, GUIDs). 
---
---

<div class="module-body"> 

<br>

### Classes

#### [DataPage](data_page)
Data transfer object that is used to pass results of paginated queries.
It contains items of retrieved page and optional total number of items.
Most often this object type is used to send responses to paginated queries.
Pagination parameters are defined by a [PagingParams](paging_params) object.
The *skip* parameter in the PagingParams indicates how many items to skip.
The *takes* parameter sets number of items to return in the page.
And the optional *total* parameter tells to return the total number of items in the query.

#### [FilterParams](filter_params)
Data transfer object used to pass filter parameters as simple key-value pairs.

#### [PagingParams](paging_params)
Data transfer object to pass paging parameters for queries.
The page is defined by two parameters:
- the *skip* parameter defines the number of items to skip.
- the *take* parameter sets how many items to return in a page.
- additionally, the optional *total* parameter tells to return total number of items in the query.


#### [ProjectionParams](projection_params)
Defines projection parameters with a list of fields to include into query results.
The parameters support two formats: dot format and nested format.
The dot format is the standard way to define included fields and subfields using
dot object notation: *"field1,field2.field21,field2.field22.field221"*


#### [SortField](sort_field)
Defines a field name and order used to sort query results.


#### [SortParams](sort_params)
Defines a list of field names used to sort query results.

</div>

