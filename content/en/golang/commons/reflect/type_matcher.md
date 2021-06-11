---
type: docs
title: "TypeMatcher"
linkTitle: "TypeMatcher"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class that allows you to match value types based on equality.
 

---

### Description

The TypeMatcher class allows you to match value types based on equality.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.

### Methods

#### MatchType
Matches expected type to an actual type.
The types can be specified as types, type names or [TypeCode](../../convert/type_code).

> (c *TTypeMatcher) MatchType(expectedType interface{}, actualType refl.Type) bool

- **expectedType**: interface{} - an expected type to match.
- **actualType**: refl.Type - an actual type to match defined by type code.
- **returns**: bool - true if types are matching and false if they don't.


#### MatchTypeByName

> (c *TTypeMatcher) MatchTypeByName(expectedType string, actualType refl.Type) bool

- **expectedType**: string - an expected type name to match. 
- **actualType**: refl.Type - an actual type to match defined by type code.
- **returns**: bool - true if types are matching and false if they don't.


#### MatchValueType!
**TODO: this is not implemented for this language yet**

Matches expected type to a type of a value.
The expected type can be specified by a type, type name or [TypeCode](../../convert/type_code).

> `public static` matchValueType(expectedType: any, actualValue: any): boolean

- **expectedType**: any - an expected type to match.
- **actualValue**: any -  a value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


#### MatchValueTypeByName!
**TODO: this is not implemented for this language yet**

Matches expected type to a type of a value.

> `public static` matchValueTypeByName(expectedType: string, actualValue: any): boolean

- **expectedType**: any - an expected type name to match.
- **actualValue**: any -  a value to match its type to the expected one.
- **returns**: boolean - true if types are matching and false if they don't.


### See also
- #### [TypeCode](../../convert/type_code)
