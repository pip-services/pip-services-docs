---
type: docs
title: "IVariantOperations"
linkTitle: "IVariantOperations"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an abstractd variant operations manager object.
---

### Description

TODO: add description


### Instance methods

#### add
Performs '+' operation for two variants.

> add(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.

#### and
Performs AND operation for two variants.

> and(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.

#### convert
Converts variant to specified type

> convert(value: [Variant](../variant), newType: [VariantType](../variant_type)): [Variant](../variant)

- **value**: [Variant](../variant) - A variant value to be converted.
- **newType**: [VariantType](../variant_type) - A type of object to be returned.
- **returns**: [Variant](../variant) - A converted Variant value.

#### div
Performs '/' operation for two variants.

> div(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### equal
Performs '=' operation for two variants.

> equal(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.

#### getElement
Performs [] operation for two variants.

> getElement(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.

#### in
Performs IN operation for two variants.

> in(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### less
Performs '<' operation for two variants.

> less(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### lessEqual
Performs '<=' operation for two variants.

> lessEqual(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### lsh
Performs '<<' operation for two variants.

> lsh(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### mod
Performs '%' operation for two variants.

> mod(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### more
Performs '>' operation for two variants.

> more(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### moreEqual
Performs '>=' operation for two variants.

> moreEqual(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### mul
Performs '*' operation for two variants.

> mul(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### negative
Performs unary '-' operation for a variant.

> negative(value: [Variant](../variant)): [Variant](../variant)

- **value**: [Variant](../variant) - The first operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### not
Performs NOT operation for a variant.

> not(value: [Variant](../variant)): [Variant](../variant)

- **value**: [Variant](../variant) - The first operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### notEqual
Performs '<>' operation for two variants.

> notEqual(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### or
Performs OR operation for two variants.

> or(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### pow
Performs '^' operation for two variants.

> pow(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### rsh
Performs '>>' operation for two variants.

> rsh(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### sub
Performs '-' operation for two variants.

> sub(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.


#### typeToString
Convert variant type to string representation

> `protected` typeToString(value: [VariantType](../variant_type)): string

- **value**: [VariantType](../variant_type) - a variant type to be converted.
- **returns**: string - a string representation of the type.


#### xor
Performs XOR operation for two variants.

> xor(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - The first operand for this operation.
- **value2**: [Variant](../variant) - The second operand for this operation.
- **returns**: [Variant](../variant) - A result variant object.