---
type: docs
title: "AbstractVariantOperations"
linkTitle: "AbstractVariantOperations"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an abstract variant operations manager object.
---

**Implements**: [IVariantOperations](../ivariant_operations)

### Description

The AbstractVariantOperations class allows you to implement abstract variant operations manager objects.


### Instance methods

#### add
Performs the '+' operation for two variants.

> `public` add(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### and
Performs the AND operation for two variants.

> `public` and(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### div
Performs the '/' operation for two variants.

> `public` div(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### equal
Performs the '=' operation for two variants.

> `public` equal(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### getElement
Performs the [] operation for two variants.

> `public` getElement(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### in
Performs the IN operation for two variants.

> `public` in(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### less
Performs the '<' operation for two variants.

> `public` less(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lessEqual
Performs the '<=' operation for two variants.

> `public` lessEqual(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lsh
Performs the '<<' operation for two variants.

> `public` lsh(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mod
Performs the '%' operation for two variants.

> `public` mod(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### more
Performs the '>' operation for two variants.

> `public` more(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### moreEqual
Performs the '>=' operation for two variants.

> `public` moreEqual(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mul
Performs the '*' operation for two variants.

> `public` mul(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### negative
Performs the unary '-' operation for a variant.

> `public` negative(value: [Variant](../variant)): [Variant](../variant)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### not
Performs the NOT operation for a variant.

> `public` not(value: [Variant](../variant)): [Variant](../variant)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### notEqual
Performs the '<>' operation for two variants.

> `public` notEqual(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### or
Performs the OR operation for two variants.

> `public` or(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### pow
Performs the '^' operation for two variants.

> `public` pow(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### rsh
Performs the '>>' operation for two variants.

> `public` rsh(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### sub
Performs the '-' operation for two variants.

> `public` sub(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### typeToString
Converts variant type to string representation.

> `protected` typeToString(value: [VariantType](../variant_type)): string

- **value**: [VariantType](../variant_type) - variant type to be converted.
- **returns**: string - string representation of the type.


#### xor
Performs the XOR operation for two variants.

> `public` xor(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


### Abstract methods

#### convert
Converts variant to specified type.

> `public abstract` convert(value: [Variant](../variant), newType: [VariantType](../variant_type)): [Variant](../variant)

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
