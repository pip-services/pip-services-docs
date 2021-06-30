---
type: docs
title: "IFunction"
linkTitle: "IFunction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a functions list.
---


### Description

TODO: add description


### Properties

#### name
The function name.
> name(): string

- **retuns**: string - function name.

### Instance methods

#### calculate
The function calculation method.

> `public` calculate(params: [Variant[]](../../../variants/variant), variantOperations: [IVariantOperations](../../../variants/ivariant_operations)): Promise<[Variant](../../../variants/variant)>

- **params**: [Variant[]](../../../variants/variant) - an array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - Variants operations manager.
- **returns**: Promise<[Variant](../../../variants/variant)> - return function result.