---
type: docs
title: "TypeMatcher"
linkTitle: "TypeMatcher"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to match value types based on equality.
 

---

### Description

The TypeMatcher class allows you to match value types based on equality.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.

### Static methods

#### MatchType
Matches expected type to an actual type.
The types can be specified as types, type names or [TypeCode](../../convert/type_code).

> `public static` bool MatchType(object expectedType, Type actualType)

- **expectedType**: object - an expected type to match.
- **actualType**: Type - an actual type to match.
- **returns**: bool - true if types are matching and false if they don't.


#### MatchTypeByName

> `public static` bool MatchTypeByName(expectedType: string, Type actualType)

- **expectedType**: string - an expected type name to match. 
- **actualType**: Type - an actual type to match defined by type code.
- **returns**: bool - true if types are matching and false if they don't.


#### MatchValue
Matches expected type to a type of a value.
The expected type can be specified by a type, type name or [TypeCode](../../convert/type_code).

> `public static` bool MatchValue(object expectedType, object actualValue)

- **expectedType**: object - an expected type to match.
- **actualValue**: object -  a value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.

#### MatchValueByName
Matches expected type to a type of a value.

> `public static` bool MatchValueByName(string expectedType, object actualValue)

- **expectedType**: string - an expected type name to match.
- **actualValue**: object -  a value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.


### See also
- #### [TypeCode](../../convert/type_code)
