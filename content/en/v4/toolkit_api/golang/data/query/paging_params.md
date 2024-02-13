---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-data-node"
description: > 
    Defines a data transfer object used to pass paging parameters for queries.

---
TO DO: Describe methods and fields.
### Description

The PagingParams class allows you to create data transfer objects used to pass paging parameters for queries.

Important points

- A page is defined by two parameters:
    - *skip*: number of items to skip.
    - *take*: number of items to return in a page.
 - Additionally, the optional *total* parameter defines whether to return the total number of items or not.
 - However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.


### Examples
```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewPagingParams(0, 100);

```

