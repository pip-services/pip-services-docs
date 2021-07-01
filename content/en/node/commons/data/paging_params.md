---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public` constructor(skip: number = null, take: number = null, total: boolean = null)

- **skip**: number - number of items to skip.
- **take**: number - number of items to return. 
- **total**: boolean - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### skip
Number of items to skip.
> `public` **skip**: number

#### take
Number of items to return. 
> `public` **take**: number

#### total
Flag to return the total number of items.
> `public` **total**: boolean

</span>


### Instance methods

#### getSkip
Gets the number of items to skip.

> `public` getSkip(minSkip: number): number

- **minSkip**: number - minimum number of items to skip.
- **returns**: number - number of items to skip.


#### getTake
Gets the number of items to return in a page.

> `public` getTake(maxTake: number): number

- **maxTake**: number - maximum number of items to return.
- **returns**: number - number of items to return.

### Static methods

#### fromMap
Creates a new PagingParams object and sets it parameters from the specified map.

> `public static` fromMap(map: any): [PagingParams]()

- **map**: any - AnyValueMap or StringValueMap used to initialize this PagingParams
- **returns**: [PagingParams]() - newly created PagingParams object.


#### fromTuples
Creates a new PagingParams object from a list of key-value pairs called tuples.

> `public static` fromTuples(...tuples: any[]): [PagingParams]()

- **tuples**: any[] - list of values where odd elements are keys and the following even elements are values
- **returns**: [PagingParams]() - newly created PagingParams object.


#### fromValue
Converts a specified value into PagingParams object.

> `public static` fromValue(value: any): [PagingParams]()

- **value**: any - value to be converted
- **returns**: [PagingParams]() - newly created PagingParams object.

### Examples
```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new PagingParams(0, 100);
    
myDataClient.getDataByFilter(filter, paging, (err, page) => {...});

```
