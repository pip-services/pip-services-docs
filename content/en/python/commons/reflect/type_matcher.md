---
type: docs
title: "TypeMatcher"
linkTitle: "TypeMatcher"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that allows you to match value types based on equality.
 

---

### Description

the TypeMatcher class allows you to match value types based on equality.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and used to support dynamic data processing.

### Static methods

#### match_type
Matches expected type to an actual type.
The types can be specified as types, type names or [TypeCode](../../convert/type_code).

> `static` match_type(expected_type: Any, actual_type: [TypeCode](../../convert/type_code), actual_value: Any = None): bool

- **expected_type**: Any - an expected type to match.
- **actual_type**: [TypeCode](../../convert/type_code) - an actual type to match.
- **actual_value**: Any - an optional value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.


#### match_type_by_name

> `static` match_type_by_name(expected_type: str, actual_type: [TypeCode](../../convert/type_code), actual_value: Any = None): bool

- **expected_type**: str - an expected type name to match. 
- **actual_type**: [TypeCode](../../convert/type_code) - an actual type to match defined by type code.
- **actual_value**: Any - an optional value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.


#### match_value_type
Matches expected type to a type of a value.
The expected type can be specified by a type, type name or [TypeCode](../../convert/type_code).

> `static` match_value_type(expected_type: Any, actual_value: Any): bool

- **expected_type**: Any - an expected type to match.
- **actual_value**: Any -  a value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.

#### match_value_type_by_name
Matches expected type to a type of a value.

> `static` match_value_type_by_name(expected_type: str, actual_value: Any): bool

- **expected_type**: Any - an expected type name to match.
- **actual_value**: Any -  a value to match its type to the expected one.
- **returns**: bool - true if types are matching and false if they don't.


### See also
- #### [TypeCode](../../convert/type_code)
