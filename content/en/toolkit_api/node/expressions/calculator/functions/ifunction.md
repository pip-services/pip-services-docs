---
type: docs
title: "IFunction"
linkTitle: "IFunction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    An interface for expression functions.
---


### Description

The IFunction is an interface for expression functions.


### Properties

#### name
Function's name.
> name(): string

- **retuns**: string - function's name.

### Instance methods

#### calculate
Function calculation method.

> calculate(params: [Variant[]](../../../variants/variant), variantOperations: [IVariantOperations](../../../variants/ivariant_operations)): Promise<[Variant](../../../variants/variant)>

- **params**: [Variant[]](../../../variants/variant) - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: Promise<[Variant](../../../variants/variant)> - returned function's result.
