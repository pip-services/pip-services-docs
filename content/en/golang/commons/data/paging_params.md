---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Defines a data transfer object used to pass paging parameters for queries.

---

### Description

The PagingParams class allows you to create data transfer objects used to pass paging parameters for queries.

Important points

- A page is defined by two parameters:
    - *skip*: number of items to skip.
    - *take*: number of items to return in a page.
 - Additionally, the optional *total* parameter defines whether to return the total number of items or not.
 - However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.

### Constructors

#### NewPagingParams
Creates a new instance and sets its values.

> NewPagingParams(skip, take, total interface{}) [*PagingParams]()

- **skip**: interface{} - the number of items to skip.
- **take**: interface{} - the number of items to return. 
- **total**: interface{} - true to return the total number of items.


#### NewPagingParamsFromMap
Creates a new PagingParams and sets it parameters from the specified map

> NewPagingParamsFromMap(value [*AnyValueMap](../../any_value_map)) [*PagingParams]()

- **map**: [*AnyValueMap](../../any_value_map) - a AnyValueMap or StringValueMap to initialize this PagingParams
- **returns**: [*PagingParams]() - a newly created PagingParams.


#### NewPagingParamsFromTuples
Creates a new PagingParams from a list of key-value pairs called tuples.

> NewPagingParamsFromTuples(tuples ...interface{}) [*PagingParams]()

- **tuples**: ...interface{} - a list of values where odd elements are keys and the following even elements are values
- **returns**: [*PagingParams]() - a newly created PagingParams.


#### NewPagingParamsFromValue
Converts specified value into PagingParams.

> NewPagingParamsFromValue(value interface{}) [*PagingParams]()

- **value**: interface{} - value to be converted
- **returns**: [*PagingParams]() - a newly created PagingParams.


#### NewEmptyPagingParams
Creates a new instance.

> NewEmptyPagingParams() [*PagingParams]()


### Fields

<span class="hide-title-link">

#### Skip
The number of items to skip.
> **Skip**: *int64

#### take
The number of items to return. 
> **take**: *int64

#### Total
The flag to return the total number of items.
> **Total**: bool

</span>


### Methods

#### GetSkip
Gets the number of items to skip.

> (c *PagingParams) GetSkip(minSkip int64) int64

- **minSkip**: int64 - the minimum number of items to skip.
- **returns**: int64 - the number of items to skip.


#### GetTake
Gets the number of items to return in a page.

> (c *PagingParams) GetTake(maxTake int64) int64

- **maxTake**: int64 - the maximum number of items to return.
- **returns**: int64 - the number of items to return.



### Examples
```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewPagingParams(0, 100);
 
err, page = myDataClient.getDataByFilter(filter, paging);

```
