---
type: docs
title: "Data"
linkTitle: "Data"
no_list: true
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    This package contains a set of abstract, portable data types. Some examples are anytype, anyvalues, anyarrays, anymaps, and stringmaps. Many serializable classes are based on these data types. For example, the classes configmap, filtermaps and  connection parameters, which extend stringvaluemap. The package also includes several classes for working with data (E.g. data paging, filtering, GUIDs). 
---
---

<div class="module-body"> 

### Interfaces

#### [ICloneable](icloneable)
Interface for data objects that are able to create their full binary copy.

#### [IMap](imap)
Interface used to create a map data structure.

#### [IEquatable](iequatable)
Interface for those classes that need an equal method.
<br>

### Types

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



</div>

