---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
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
Creates a new instance and sets its values.

> `public` PagingParams(object skip, object take, object total = null)

- **skip**: object - number of items to skip.
- **take**: object - number of items to return. 
- **total**: bool - true to return the total number of items.


### Properties

#### Skip
Number of items to skip.
> `public` long Skip { get; set; }

#### Take
Number of items to return. 
> `public` long Take { get; set; }

#### Total
Flag used to return the total number of items.
> `public` bool Total { get; set; }


### Instance methods

#### GetSkip
Gets the number of items to skip.

> `public` long GetSkip(long minSkip = 0)

- **minSkip**: long - minimum number of items to skip.
- **returns**: long - number of items to skip.


#### GetTake
Gets the number of items to return in a page.

> `public` long GetTake(long maxTake)

- **maxTake**: long - maximum number of items to return.
- **returns**: long - number of items to return.

### Static methods

#### FromMap
Creates a new PagingParams and sets its parameters from the specified map.

> `public static` [PagingParams]() FromMap([AnyValueMap](../any_value_map) map)

- **map**: [AnyValueMap](../any_value_map) - AnyValueMap or StringValueMap used to initialize this PagingParams
- **returns**: [PagingParams]() - newly created PagingParams.


#### FromTuples
Creates a new PagingParams from a list of key-value pairs called tuples.

> `public static` [PagingParams]() FromTuples(params object[] tuples)

- **tuples**: object[] - list of values where odd elements are keys and the following even elements are values.
- **returns**: [PagingParams]() - newly created PagingParams.


#### FromValue
Converts a specified value into PagingParams.

> `public static` [PagingParams]() FromValue(object value)

- **value**: object - value to be converted
- **returns**: [PagingParams]() - newly created PagingParams.

### Examples
```cs
var filter = FilterParams.FromTuples("type", "Type1");
var paging = new PagingParams(0, 100);

myDataClient.GetDataByFilter(filter, paging);

```
