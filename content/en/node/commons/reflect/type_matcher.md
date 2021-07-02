---
type: docs
title: "TypeMatcher"
linkTitle: "TypeMatcher"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` matchType(expectedType: any, actualType: [TypeCode](../../convert/type_code), actualValue: any = null): boolean

- **expectedType**: any - expected type to match.
- **actualType**: [TypeCode](../../convert/type_code) - actual type to match.
- **actualValue**: any - optional value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


#### matchTypeByName
Matches the expected type to an actual type.

> `public static` matchTypeByName(expectedType: string, actualType: [TypeCode](../../convert/type_code), actualValue: any = null): boolean

- **expectedType**: string - expected type name to match. 
- **actualType**: [TypeCode](../../convert/type_code) - actual type to match defined by the type code.
- **actualValue**: any - optional value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


#### matchValueType
Matches expected type to a type of a value.
The expected type can be specified by a type, type name or [TypeCode](../../convert/type_code).

> `public static` matchValueType(expectedType: any, actualValue: any): boolean

- **expectedType**: any - expected type to match.
- **actualValue**: any -  value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.

#### matchValueTypeByName
Matches an expected type to a type of a value.

> `public static` matchValueTypeByName(expectedType: string, actualValue: any): boolean

- **expectedType**: any - expected type name to match.
- **actualValue**: any - value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


### See also
- #### [TypeCode](../../convert/type_code)
