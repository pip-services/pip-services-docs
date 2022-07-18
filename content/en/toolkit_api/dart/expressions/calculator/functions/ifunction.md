---
type: docs
title: "IFunction"
linkTitle: "IFunction"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    An interface for expression functions.
---


### Description

The IFunction is an interface for expression functions.


### Properties

#### name
Function's name.
> `abstract` String name

- **retuns**: string - function's name.

### Instance methods

#### calculate
Function calculation method.

> Future<[Variant](../../../variants/variant)> calculate(List<[Variant](../../../variants/variant)> params, [IVariantOperations](../../../variants/ivariant_operations) variantOperations)

- **params**: [Variant](../../../variants/variant) - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: Future<[Variant](../../../variants/variant)> - returned function's result.
