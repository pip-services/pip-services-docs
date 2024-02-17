---
type: docs
title: "TokenizedDataPage<T>"
linkTitle: "TokenizedDataPage"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
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
     - The *takes* parameter sets the number of items to be returned in the page.
- The optional *total* parameter tells to return the total number of items in the query.
- However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.


### Constructors
Creates a new instance of data page and assigns its values.

> `public` TokenizedDataPage(List<T> data, String token, int total)

- **data**: List<T> - list of items from the retrieved page.
- **token**: String - (optional) token used to define a starting point for the next search.
- **total**: int - (optional) total number of objects in the result.


### Fields

<span class="hide-title-link">

#### data
Items of the retrieved page.
> `public` List<T> **data**

#### token
starting point for the next search.
> `public` String **token**

#### total
Total amount of items in a request.
> `public` Integer **total**

</span>

### Examples
```java
{
  DataPage<MyData> page = myDataClient.getDataByFilter(
   "123",
   FilterParams.fromTuples("completed": true),
   new TokenizedPagingParams(null, 100, true)
  );
 
  value1.getAsInteger();   // Result: 123
  value1.getAsString();    // Result: "123.456"
  value1.getAsFloat();     // Result: 123.456
  }
```

### See also
- #### [PagingParams](../paging_params)
