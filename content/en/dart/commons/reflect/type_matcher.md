---
type: docs
title: "TypeMatcher"
linkTitle: "TypeMatcher"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that allows you to match value types based on equality.
 

---

### Description

The TypeMatcher class allows you to match value types based on equality.

**Important points**

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.

### Static methods

#### matchType
Matches the expected type to an actual type.
The types can be specified as types, type names or [TypeCode](../../convert/type_code).

> `static` bool matchType(expectedType, [TypeCode](../../convert/type_code) actualType, [actualValue])

- **expectedType**: dynamic - expected type to match.
- **actualType**: [TypeCode](../../convert/type_code) - actual type to match.
- **actualValue**: dynamic - optional value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.


#### matchTypeByName
Matches the expected type to an actual type.

> `static` bool matchTypeByName(String expectedType, [TypeCode](../../convert/type_code) actualType, [actualValue])

- **expectedType**: String - expected type name to match. 
- **actualType**: [TypeCode](../../convert/type_code) - actual type to match defined by the type code.
- **actualValue**: dynamic - optional value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.


#### matchValueType
Matches expected type to a type of a value.
The expected type can be specified by a type, type name or [TypeCode](../../convert/type_code).

> `static` bool matchValueType(expectedType, actualValue)

- **expectedType**: dynamic - expected type to match.
- **actualValue**: dynamic - value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.

#### matchValueTypeByName
Matches an expected type to a type of a value.

> `static` bool matchValueTypeByName(String expectedType, actualValue) 

- **expectedType**: String - expected type name to match.
- **actualValue**: dynamic - value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.


### See also
- #### [TypeCode](../../convert/type_code)
