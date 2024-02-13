---
type: docs
title: "Data"
linkTitle: "Data"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-commons-dotnet"
description: >
    This package contains a set of abstract, portable data types. Some examples are anytype, anyvalues, anyarrays, anymaps, and stringmaps. Many serializable classes are based on these data types. For example, the classes configmap, filtermaps and  connection parameters, which extend stringvaluemap. The package also includes several classes for working with data (E.g. data paging, filtering, GUIDs). 
---
---

<div class="module-body"> 

### Interfaces

#### [ICloneable](icloneable)
Interface for data objects that are able to create their full binary copy.

<br>

### Classes

#### [AnyValue](any_value)
Cross-language implementation of a dynamic object that can hold a value of any type.
The stored value can be converted to different types using a variety of accessor methods.


#### [AnyValueArray](any_value_array)
Cross-language implementation of a dynamic object array that can hold values of any type.
The stored values can be converted to different types using a variety of accessor methods.

#### [AnyValueMap](any_value_map)
Cross-language implementation of a dynamic object map (dictionary) that can hold values of any type.
The stored values can be converted to different types using a variety of accessor methods.

#### [StringValueMap](string_value_map)
Cross-language implementation of a map (dictionary) where all keys and values are strings.
The stored values can be converted to different types using a variety of accessor methods.
The string map is highly versatile. It can be converted into many formats, stored and 
sent over the wire.

#### [TokenizedDataPage](tokenized_data_page)
Data transfer object that is used to pass results of paginated queries.
It contains items of a retrieved page and total number of items (optional ).
Most often, this object type is used to send responses to paginated queries.

#### [TokenizedPagingParams](tokenized_paging_params)
Data transfer object used to pass tokenized paging parameters for queries.
It can be used for complex paging scenarios, like paging across multiple databases
where the previous state is encoded in a token. The token is usually retrieved from
the previous response. The initial request shall go with token == *null*.

</div>

