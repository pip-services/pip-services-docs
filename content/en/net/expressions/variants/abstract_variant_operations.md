---
type: docs
title: "AbstractVariantOperations"
linkTitle: "AbstractVariantOperations"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements an abstract variant operations manager object.
---

**Inherits**: [IVariantOperations](../ivariant_operations)

### Description

The AbstractVariantOperations class allows you to implement abstract variant operations manager objects.


### Instance methods

#### Add
Performs the '+' operation for two variants.

> `public virtual` [Variant](../variant) Add([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### And
Performs the AND operation for two variants.

> `public virtual` [Variant](../variant) And([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### Div
Performs the '/' operation for two variants.

> `public virtual` [Variant](../variant) Div([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Equal
Performs the '=' operation for two variants.

> `public virtual` [Variant](../variant) Equal([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### GetElement
Performs the [] operation for two variants.

> `public virtual` [Variant](../variant) GetElement([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### In
Performs the IN operation for two variants.

> `public virtual` [Variant](../variant) In([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Less
Performs the '<' operation for two variants.

> `public virtual` [Variant](../variant) Less([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### LessEqual
Performs the '<=' operation for two variants.

> `public virtual` [Variant](../variant) LessEqual([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Like
Performs LIKE operation for two variants.
> `public virtual` [Variant](../variant) Like([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### Lsh
Performs the '<<' operation for two variants.

> `public virtual` [Variant](../variant) Lsh([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Mod
Performs the '%' operation for two variants.

> `public virtual` [Variant](../variant) Mod([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### More
Performs the '>' operation for two variants.

> `public virtual` [Variant](../variant) More([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### MoreEqual
Performs the '>=' operation for two variants.

> `public virtual` [Variant](../variant) MoreEqual([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Mul
Performs the '*' operation for two variants.

> `public virtual` [Variant](../variant) Mul([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Negative
Performs the unary '-' operation for a variant.

> `public virtual` [Variant](../variant) Negative([Variant](../variant) value)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Not
Performs the NOT operation for a variant.

> `public virtual` [Variant](../variant) Not([Variant](../variant) value)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### NotEqual
Performs the '<>' operation for two variants.

> `public virtual` [Variant](../variant) NotEqual([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Or
Performs the OR operation for two variants.

> `public virtual` [Variant](../variant) Or([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Pow
Performs the '^' operation for two variants.

> `public virtual` [Variant](../variant) Pow([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Rsh
Performs the '>>' operation for two variants.

> `public virtual` [Variant](../variant) Rsh([Variant](../variant) value1, Varian[Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### Sub
Performs the '-' operation for two variants.

> `public virtual` [Variant](../variant) Sub([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### TypeToString
Converts variant type to string representation.

> `protected` string TypeToString([VariantType](../variant_type) value)

- **value**: [VariantType](../variant_type) - variant type to be converted.
- **returns**: string - string representation of the type.


#### Xor
Performs the XOR operation for two variants.

> `public virtual` [Variant](../variant) Xor([Variant](../variant) value1, [Variant](../variant) value2)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


### Abstract methods

#### Convert
Converts a variant to a specified type.

> `public abstract` [Variant](../variant) Convert([Variant](../variant) value, [VariantType](../variant_type) newType);

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
