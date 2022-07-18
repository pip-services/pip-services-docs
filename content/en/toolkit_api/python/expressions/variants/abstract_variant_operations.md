---
type: docs
title: "AbstractVariantOperations"
linkTitle: "AbstractVariantOperations"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements an abstract variant operations manager object.
---

**Implements**: [IVariantOperations](../ivariant_operations)

### Description

The AbstractVariantOperations class allows you to implement abstract variant operations manager objects.


### Instance methods

#### add
Performs the '+' operation for two variants.

> add(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### and
Performs the AND operation for two variants.

> and(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### div
Performs the '/' operation for two variants.

> div(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### equal
Performs the '=' operation for two variants.

> equal(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### get_element
Performs the [] operation for two variants.

> get_element(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.

#### in
Performs the IN operation for two variants.

> in(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### less
Performs the '<' operation for two variants.

> less(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### less_equal
Performs the '<=' operation for two variants.

> less_equal(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### lsh
Performs the '<<' operation for two variants.

> lsh(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mod
Performs the '%' operation for two variants.

> mod(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### more
Performs the '>' operation for two variants.

> more(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### more_equal
Performs the '>=' operation for two variants.

> more_equal(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### mul
Performs the '*' operation for two variants.

> mul(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### negative
Performs the unary '-' operation for a variant.

> negative(value: [Variant](../variant)): [Variant](../variant)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### not
Performs the NOT operation for a variant.

> not(value: [Variant](../variant)): [Variant](../variant)

- **value**: [Variant](../variant) - first operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### not_equal
Performs the '<>' operation for two variants.

> not_equal(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### or
Performs the OR operation for two variants.

> or(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### pow
Performs the '^' operation for two variants.

> pow(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### rsh
Performs the '>>' operation for two variants.

> rsh(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### sub
Performs the '-' operation for two variants.

> sub(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


#### _type_to_string
Converts variant type to string representation.

> _type_to_string(value: [VariantType](../variant_type)): str

- **value**: [VariantType](../variant_type) - variant type to be converted.
- **returns**: str - string representation of the type.


#### xor
Performs the XOR operation for two variants.

> xor(value1: [Variant](../variant), value2: [Variant](../variant)): [Variant](../variant)

- **value1**: [Variant](../variant) - first operand for this operation.
- **value2**: [Variant](../variant) - second operand for this operation.
- **returns**: [Variant](../variant) - result variant object.


### Abstract methods

#### convert
Converts variant to specified type.

> `static` convert(value: [Variant](../variant), new_type: [VariantType](../variant_type)): [Variant](../variant)

- **value**: [Variant](../variant) - variant value to be converted.
- **new_type**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
