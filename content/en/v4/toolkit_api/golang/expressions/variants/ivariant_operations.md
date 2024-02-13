---
type: docs
title: "IVariantOperations"
linkTitle: "IVariantOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements an abstractd variant operations manager object.
---

### Description

The IVariantOperations class allows you to implement an abstract variant operations manager object.


### Methods

#### Add
Performs the '+' operation for two variants.

> (c *AbstractVariantOperations) Add(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.

#### And
Performs the AND operation for two variants.

> And(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.

#### Convert
Converts variant to specified type.

> Convert(value [*Variant](../variant), newType int) ([*Variant](../variant), error)

- **value**: [*Variant](../variant) - variant value to be converted.
- **newType**: int - type of object to be returned ([VariantType](../variant_type)).
- **returns**: ([*Variant](../variant), error) - converted Variant value.

#### Div
Performs the '/' operation for two variants.

> Div(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Equal
Performs the '=' operation for two variants.

> Equal(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.

#### GetElement
Performs the [] operation for two variants.

> GetElement(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.

#### In
Performs the IN operation for two variants.

> In(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Less
Performs the '<' operation for two variants.

> Less(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### LessEqual
Performs the '<=' operation for two variants.

> LessEqual(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Lsh
Performs the '<<' operation for two variants.

> Lsh(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Mod
Performs the '%' operation for two variants.

> Mod(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### More
Performs the '>' operation for two variants.

> More(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### MoreEqual
Performs the '>=' operation for two variants.

> MoreEqual(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Mul
Performs the '*' operation for two variants.

> mMul(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Negative
Performs the unary '-' operation for a variant.

> Negative(value [*Variant](../variant)) ([*Variant](../variant), error)

- **value**: [*Variant](../variant) - first operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Not
Performs the NOT operation for a variant.

> Not(value [*Variant](../variant)) ([*Variant](../variant), error)

- **value**: [*Variant](../variant) - first operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### NotEqual
Performs the '<>' operation for two variants.

> NotEqual(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Or
Performs the OR operation for two variants.

> Or(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Pow
Performs the '^' operation for two variants.

> Pow(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Rsh
Performs the '>>' operation for two variants.

> Rsh(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### Sub
Performs the '-' operation for two variants.

> Sub(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.


#### typeToString
Converts variant type to string representation.

> typeToString(value int) string

- **value**: string - variant type to be converted ([VariantType](../variant_type)).
- **returns**: string - string representation of the type.


#### Xor
Performs the XOR operation for two variants.

> Xor(value1 [*Variant](../variant), value2 [*Variant](../variant)) ([*Variant](../variant), error)

- **value1**: [*Variant](../variant) - first operand for this operation.
- **value2**: [*Variant](../variant) - second operand for this operation.
- **returns**: ([*Variant](../variant), error) - result variant object.
