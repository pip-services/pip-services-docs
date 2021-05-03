---
type: docs
title: "TokenizedPagingParams"
linkTitle: "TokenizedPagingParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Data transfer object to pass tokenized paging parameters for queries.
    It can be used for complex paging scenarios, like paging across multiple databases
    where the previous state is encoded in a token. The token is usually retrieved from
    the previous response. The initial request shall go with token == *None*


    The page is defined by two parameters:

    - the *token* token that defines a starting point for the search.

    - the *take* parameter sets how many items to return in a page.

    - additionally, the optional *total* parameter tells to return total number of items in the query.


    Remember: not all implementations support the *total* parameter
    because its generation may lead to severe performance implications.
---

**Example:**
```python
filter = FilterParams.from_tuples("type", "Type1");
paging = TokenizedPagingParams(None, 100);

result = my_data_client.get_data_by_filter(filter, paging)
```

### Constructors
Creates a new instance and sets its values.

> TokenizedPagingParams(token: str = None, take: int = None, total: bool = None)

- **token**: str - token that defines a starting point for the search.
- **take**: int - the number of items to return. 
- **total**: bool - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### token
The start token
> `public` **token**: str

#### take
The number of items to return.
> `public` **take**: int

#### total
The flag to return the total number of items.
> `public` **total**: boolean

</span>


### Methods

#### get_take
Gets the number of items to return in a page.

> get_take(max_take: int): int

- **max_take**: int - the maximum number of items to return.
- **returns**: int - the number of items to return.

#### from_map
Creates a new TokenizedPagingParams and sets it parameters from the specified map

> `static` from_map(map: [AnyValueMap](../any_value_map)): [TokenizedPagingParams]()

- **map**: [AnyValueMap](../any_value_map) - a AnyValueMap or StringValueMap to initialize this TokenizedPagingParams
- **returns**: [TokenizedPagingParams]() - a newly created PagingParams.


#### from_tuples
Creates a new TokenizedPagingParams from a list of key-value pairs called tuples.

> `static` from_tuples(*tuples: Any): [TokenizedPagingParams]()

- **tuples**: Any - a list of values where odd elements are keys and the following even elements are values
- **returns**: [TokenizedPagingParams]() - a newly created TokenizedPagingParams.


#### from_value
Converts specified value into TokenizedPagingParams.

> `static` from_value(value: Any): [TokenizedPagingParams]()

- **value**: Any - value to be converted
- **returns**: [TokenizedPagingParams]() - a newly created PagingParams.