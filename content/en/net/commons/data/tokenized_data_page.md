---
type: docs
title: "TokenizedDataPage<T>"
linkTitle: "TokenizedDataPage"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
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

> public TokenizedDataPage(List\<T\> data = null, string token=null, int total = default(int))

- **data**: List\<T\> - list of items from the retrieved page.
- **token**: string - (optional) token used to define a starting point for the next search.
- **total**: int - (optional) total number of objects in the result.


### Properties

#### Data
Items of the retrieved page.
> `public` List\<T\> Data { get; set; }

#### Token
starting point for the next search.
> `public` string Token { get; set; }

#### Total
Total amount of items in a request.
> `public` int Total { get; set; }


### Examples
```cs
var page = await myDataClient.GetDataByFilterAsync(
    "123",
    FilterParams.FromTuples("completed": true),
    new TokenizedPagingParams(null, 100, true)
);
```

### See also
- #### [PagingParams](../paging_params)
