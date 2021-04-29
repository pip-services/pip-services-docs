---
type: docs
title: "TypeMatcher"
linkTitle: "TypeMatcher"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class matches value types for equality.
 
    This class has symmetric implementation across all languages supported
    by Pip.Services toolkit and used to support dynamic data processing.
---

See also [TypeCode](../../convert/type_code)

### Methods

#### matchType
Matches expected type to an actual type.
The types can be specified as types, type names or [TypeCode](../../convert/type_code).

> `public static` matchType(expectedType: any, actualType: [TypeCode](../../convert/type_code), actualValue: any = null): boolean

- **expectedType**: any - an expected type to match.
- **actualType**: [TypeCode](../../convert/type_code) - an actual type to match.
- **actualValue**: any = null - an optional value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


#### matchTypeByName

> `public static` matchTypeByName(expectedType: string, actualType: [TypeCode](../../convert/type_code), actualValue: any = null): boolean

- **expectedType**: string - an expected type name to match. 
- **actualType**: [TypeCode](../../convert/type_code) - an actual type to match defined by type code.
- **actualValue**: any = null - an optional value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


#### matchValueType
Matches expected type to a type of a value.
The expected type can be specified by a type, type name or [TypeCode](../../convert/type_code).

> `public static` matchValueType(expectedType: any, actualValue: any): boolean

- **expectedType**: any - an expected type to match.
- **actualValue**: any -  a value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.

#### matchValueTypeByName
Matches expected type to a type of a value.

> `public static` matchValueTypeByName(expectedType: string, actualValue: any): boolean

- **expectedType**: any - an expected type name to match.
- **actualValue**: any -  a value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


### See also
- #### [TypeCode](../../convert/type_code)