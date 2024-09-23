---
type: docs
title: "IVariantOperations"
linkTitle: "IVariantOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements an abstractd variant operations manager object.
---

### Description

The IVariantOperations class allows you to implement an abstract variant operations manager object.


### Instance methods

#### add
Performs the '+' operation for two variants.

> [Variant](../variant) add([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### and
Performs the AND operation for two variants.

> [Variant](../variant) and([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### convert
Converts the variant to a specified type.

> [Variant](../variant) convert([Variant](../variant) value, [VariantType](../variant_type) newType)

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.

#### div
Performs the '/' operation for two variants.

> [Variant](../variant) div([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### equal
Performs the '=' operation for two variants.

> [Variant](../variant) equal([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### getElement
Performs the [] operation for two variants.

> [Variant](../variant) getElement([Variant](../variant) value1, [Variant](../variant) value2) throws Exception

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### in
Performs the IN operation for two variants.

> [Variant](../variant) in([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### less
Performs the '<' operation for two variants.

> [Variant](../variant) less([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lessEqual
Performs the '<=' operation for two variants.

>  [Variant](../variant) lessEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lsh
Performs the '<<' operation for two variants.

> [Variant](../variant) lsh([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mod
Performs the '%' operation for two variants.

>[Variant](../variant) mod(value1: [Variant](../variant), value2: [Variant](../variant))

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### more
Performs the '>' operation for two variants.

> [Variant](../variant) more([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### moreEqual
Performs the '>=' operation for two variants.

> [Variant](../variant) moreEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mul
Performs the '*' operation for two variants.

> [Variant](../variant) mul([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### negative
Performs the unary '-' operation for a variant.

> [Variant](../variant) negative([Variant](../variant) value)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### not
Performs the NOT operation for a variant.

> [Variant](../variant) not([Variant](../variant) value)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### notEqual
Performs the '<>' operation for two variants.

> [Variant](../variant) notEqual([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### or
Performs the OR operation for two variants.

> [Variant](../variant) or([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### pow
Performs the '^' operation for two variants.

> Variant pow([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### rsh
Performs the '>>' operation for two variants.

> Variant rsh([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### sub
Performs the '-' operation for two variants.

> [Variant](../variant) sub([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### xor
Performs the XOR operation for two variants.

> [Variant](../variant) xor([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.
