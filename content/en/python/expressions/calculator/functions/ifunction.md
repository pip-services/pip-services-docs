---
type: docs
title: "IFunction"
linkTitle: "IFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    An interface for expression functions.
---


### Description

The IFunction is an interface for expression functions.


### Properties

#### name
Function's name.
> name(): str

- **retuns**: str - function's name.

### Instance methods

#### calculate
Function calculation method.

> calculate(params: List[[Variant](../../../variants/variant)], variant_operations: [IVariantOperations](../../../variants/ivariant_operations)): [Variant](../../../variants/variant)

- **params**: List[[Variant](../../../variants/variant)] - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: [Variant](../../../variants/variant) - returned function's result.
