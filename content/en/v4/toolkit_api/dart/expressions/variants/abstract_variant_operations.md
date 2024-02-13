---
type: docs
title: "AbstractVariantOperations"
linkTitle: "AbstractVariantOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: >
    Implements an abstract variant operations manager object.
---

**Implements**: [IVariantOperations](../ivariant_operations)

### Description

The AbstractVariantOperations class allows you to implement abstract variant operations manager objects.


### Instance methods

#### add
Performs the '+' operation for two variants.
`@override`
> [Variant](../variant) add([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### and
Performs the AND operation for two variants.
`@override`
> [Variant](../variant) and([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### convert
Converts variant to specified type.
`@override`
> [Variant](../variant) convert([Variant](../variant) value, [VariantType](../variant_type) newType)

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.

#### div
Performs the '/' operation for two variants.
`@override`
> [Variant](../variant) div([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### equal
Performs the '=' operation for two variants.
`@override`
> [Variant](../variant) equal([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### getElement
Performs the [] operation for two variants.
`@override`
> [Variant](../variant) getElement([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### in_
Performs the IN operation for two variants.
`@override`
> [Variant](../variant) in_([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### less
Performs the '<' operation for two variants.
`@override`
> [Variant](../variant) less([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lessEqual
Performs the '<=' operation for two variants.
`@override`
> [Variant](../variant) lessEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lsh
Performs the '<<' operation for two variants.
`@override`
> [Variant](../variant) lsh([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mod
Performs the '%' operation for two variants.
`@override`
> [Variant](../variant) mod([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### more
Performs the '> [Variant](../variant)' operation for two variants.
`@override`
> [Variant](../variant) more([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### moreEqual
Performs the '> [Variant](../variant)=' operation for two variants.
`@override`
> [Variant](../variant) moreEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mul
Performs the '*' operation for two variants.
`@override`
> [Variant](../variant) mul([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### negative
Performs the unary '-' operation for a variant.
`@override`
> [Variant](../variant) negative(value: [Variant](../variant))

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### not
Performs the NOT operation for a variant.
`@override`
> [Variant](../variant) not(value: [Variant](../variant))

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### notEqual
Performs the '<> [Variant](../variant)' operation for two variants.
`@override`
> [Variant](../variant) notEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### or
Performs the OR operation for two variants.
`@override`
> [Variant](../variant) or([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### pow
Performs the '^' operation for two variants.
`@override`
> [Variant](../variant) pow([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### rsh
Performs the '>>' operation for two variants.
`@override`
> [Variant](../variant) rsh([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### sub
Performs the '-' operation for two variants.
`@override`
> [Variant](../variant) sub([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### typeToString
Converts variant type to string representation.
`@override`
> String typeToString([VariantType](../variant_type) value)

- **value**: [VariantType](../variant_type) - variant type to be converted.
- **returns**: String - string representation of the type.


#### xor
Performs the XOR operation for two variants.
`@override`
> [Variant](../variant) xor([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.
