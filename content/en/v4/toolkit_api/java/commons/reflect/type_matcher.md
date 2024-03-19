---
type: docs
title: "TypeMatcher"
linkTitle: "TypeMatcher"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    Helper class that allows you to match value types based on equality.
 

---

### Description

The TypeMatcher class allows you to match value types based on equality.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.

### Static methods

#### matchType
Matches the expected type to an actual type.
The types can be specified as types, type names or [TypeCode](../../convert/type_code).

> `public static` boolean matchType(Object expectedType, [TypeCode](../../convert/type_code) actualType, Object actualValue)

- **expectedType**: Object - expected type to match.
- **actualType**: [TypeCode](../../convert/type_code) - actual type to match.
- **actualValue**: Object - optional value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


#### matchTypeByName
Matches the expected type to an actual type.

> `public static` boolean matchTypeByName(String expectedType, [TypeCode](../../convert/type_code) actualType, Object actualValue)

- **expectedType**: String - expected type name to match. 
- **actualType**: [TypeCode](../../convert/type_code) - actual type to match defined by the type code.
- **actualValue**: Object - optional value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


#### matchValueType
Matches expected type to a type of a value.
The expected type can be specified by a type, type name or [TypeCode](../../convert/type_code).

> `public static` boolean matchValueType(Object expectedType, Object actualValue)

- **expectedType**: Object - expected type to match.
- **actualValue**: Object -  value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.

#### matchValueTypeByName
Matches an expected type to a type of a value.

> `public static` boolean matchValueTypeByName(String expectedType, Object actualValue)

- **expectedType**: String - expected type name to match.
- **actualValue**: Object - value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


### See also
- #### [TypeCode](../../convert/type_code)
