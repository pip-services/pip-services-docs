---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Data transfer object to pass paging parameters for queries.


    The page is defined by two parameters:

    - the *skip* parameter defines number of items to skip.

    - the *take* parameter sets how many items to return in a page.
    
    - additionally, the optional *total* parameter tells to return total number of items in the query.


    Remember: not all implementations support the *total* parameter
    because its generation may lead to severe performance implications.
---

**Example:**
```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new PagingParams(0, 100);
    
myDataClient.getDataByFilter(filter, paging, (err, page) => {...});

```

### Constructors
Creates a new instance and sets its values.

> `public` constructor(skip: number = null, take: number = null, total: boolean = null): [PagingParams]()

- **skip**: number = null - the number of items to skip.
- **take**: number = null - the number of items to return. 
- **total**: boolean = null - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### skip
The number of items to skip.
> **skip**: number

#### take
The number of items to return. 
> **take**: number

#### total
The flag to return the total number of items.
> **total**: boolean

</span>


### Methods

#### getSkip
Gets the number of items to skip.

> `public` getSkip(minSkip: number): number

- **minSkip**: number - the minimum number of items to skip.
- **returns**: number - the number of items to skip.


#### getTake
Gets the number of items to return in a page.

> `public` getTake(maxTake: number): number

- **maxTake**: number - the maximum number of items to return.
- **returns**: number - the number of items to return.


#### fromMap
Creates a new PagingParams and sets it parameters from the specified map

> `public static` fromMap(map: any): [PagingParams]()

- **map**: any - a AnyValueMap or StringValueMap to initialize this PagingParams
- **returns**: [PagingParams]() - a newly created PagingParams.


#### fromTuples
Creates a new PagingParams from a list of key-value pairs called tuples.

> `public static` fromTuples(...tuples: any[]): [PagingParams]()

- **tuples**: any[] - a list of values where odd elements are keys and the following even elements are values
- **returns**: [PagingParams]() - a newly created PagingParams.


#### fromValue
Converts specified value into PagingParams.

> `public static` fromValue(value: any): [PagingParams]()

- **value**: any - value to be converted
- **returns**: [PagingParams]() - a newly created PagingParams.

