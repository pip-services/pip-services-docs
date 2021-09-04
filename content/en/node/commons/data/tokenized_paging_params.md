---
type: docs
title: "TokenizedPagingParams"
linkTitle: "TokenizedPagingParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Data transfer object used to pass tokenized paging parameters for queries. 
---

### Description

The TokenizedPagingParams allows you to create data transfer objects used to pass tokenized parameters for queries.

Important points

- The page is defined by two parameters:
    - the *token* token that defines a starting point for the search.
    - the *take* parameter sets how many items to return in a page.
- Additionally, the optional *total* parameter tells to return the total number of items in the query.
- However, not all implementations support the *total* parameter because its generation may lead to severe performance implications.
- In general, this class can be used for complex paging scenarios, like paging across multiple databases where the previous state is encoded in a token. The token is usually retrieved from the previous response. The initial request shall go with token == *null*

### Constructors
Creates a new instance and sets its values.

> `public` constructor(token: string = null, take: number = null, total: boolean = null)
- **token**: string - token that defines a starting point for the search.
- **take**: number - the number of items to return. 
- **total**: boolean - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### token
Start token
> `public` **token**: string

#### take
Number of items to return.
> `public` **take**: number

#### total
Flag used to define whether the total number of items must be returned or not.
> `public` **total**: boolean

</span>


### Instance methods

#### getTake
Gets the number of items to return in a page.

> `public` getTake(maxTake: number): number

- **maxTake**: number - maximum number of items to return.
- **returns**: number - number of items to return.

### Static methods

#### fromMap
Creates a new TokenizedPagingParams object and sets its parameters from the specified map.

> `public static` fromMap(map: [AnyValueMap](../any_value_map)): [TokenizedPagingParams]()

- **map**: [AnyValueMap](../any_value_map) - AnyValueMap or StringValueMap object used to initialize this TokenizedPagingParams object.
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### fromTuples
Creates a new TokenizedPagingParams object from a list of key-value pairs called tuples.

> `public static` fromTuples(...tuples: any[]): [TokenizedPagingParams]()

- **tuples**: any[] - list of values where odd elements are keys and the following even elements are values
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### fromValue
Converts a specified value into a TokenizedPagingParams object.

> `public static` fromValue(value: any): [TokenizedPagingParams]()

- **value**: any - value to be converted
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.

### Examples

```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new TokenizedPagingParams(null, 100);
     
let page = await myDataClient.getDataByFilter(filter, paging);
```
