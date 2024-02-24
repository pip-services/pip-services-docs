---
type: docs
title: "AbstractVariantOperations"
linkTitle: "AbstractVariantOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements an abstract variant operations manager object.
---

**Implements**: [IVariantOperations](../ivariant_operations)

### Description

The AbstractVariantOperations class allows you to implement abstract variant operations manager objects.


### Instance methods

#### add
Performs the '+' operation for two variants.

> `public` Variant add([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### and
Performs the AND operation for two variants.

> `public` Variant and([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### div
Performs the '/' operation for two variants.

> `public` [Variant](../variant) div([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### equal
Performs the '=' operation for two variants.

> `public` Variant equal([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### getElement
Performs the [] operation for two variants.

> `public` [Variant](../variant) getElement([Variant](../variant) value1, [Variant](../variant) value2) throws Exception

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### in
Performs the IN operation for two variants.

> `public` [Variant](../variant) in([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### less
Performs the '<' operation for two variants.

> `public` [Variant](../variant) less([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lessEqual
Performs the '<=' operation for two variants.

> `public` [Variant](../variant) lessEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lsh
Performs the '<<' operation for two variants.

> `public` Variant lsh([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mod
Performs the '%' operation for two variants.

> `public`  [Variant](../variant) mod([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### more
Performs the '>' operation for two variants.

> `public` [Variant](../variant) more([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### moreEqual
Performs the '>=' operation for two variants.

> `public` [Variant](../variant) moreEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mul
Performs the '*' operation for two variants.

> `public` [Variant](../variant) mul([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### negative
Performs the unary '-' operation for a variant.

> `public` [Variant](../variant) negative([Variant](../variant) value)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### not
Performs the NOT operation for a variant.

> `public` [Variant](../variant) not([Variant](../variant) value)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### notEqual
Performs the '<>' operation for two variants.

> `public` [Variant](../variant) notEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### or
Performs the OR operation for two variants.

> `public` [Variant](../variant) or([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### pow
Performs the '^' operation for two variants.

> `public` [Variant](../variant) pow([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### rsh
Performs the '>>' operation for two variants.

> `public` [Variant](../variant) rsh([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### sub
Performs the '-' operation for two variants.

> `public` [Variant](../variant) sub([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### typeToString
Converts variant type to string representation.

> `protected` String typeToString([VariantType](../variant_type) value)

- **value**: [VariantType](../variant_type) - variant type to be converted.
- **returns**: String - string representation of the type.


#### xor
Performs the XOR operation for two variants.

> `public` [Variant](../variant) xor([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


### Abstract methods

#### convert
Converts variant to specified type.

> `public abstract` [Variant](../variant) convert([Variant](../variant) value, [VariantType](../variant_type) newType)

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
