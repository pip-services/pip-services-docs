---
type: docs
title: "DelegatedFunction"
linkTitle: "DelegatedFunction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines a delegate to implement a function.
---

**Implements**: [IFunction](../ifunction)

### Description

TODO: add description

### Constructors
Constructs this function class with specified parameters.

> `public` constructor(name: string, calculator: (params: [Variant[]](../../../variants/variant), variantOperations: [IVariantOperations](../../../variants/ivariant_operations)) => Promise<[Variant](../../../variants/variant)>, context?: any)

- **params**: [Variant[]](../../../variants/variant) - The name of this function.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations)) => Promise<[Variant](../../../variants/variant)> - The function calculator delegate.
- **context**: any - TODO: add description

### Properties

#### name
The function name.
> `public` name(): string

- **retuns**: string - function name.

### Instance methods

#### calculate
The function calculation method.

> `public` calculate(params: [Variant[]](../../../variants/variant), variantOperations: [IVariantOperations](../../../variants/ivariant_operations)): Promise<[Variant](../../../variants/variant)>

- **params**: [Variant[]](../../../variants/variant) - an array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - Variants operations manager.
- **returns**: Promise<[Variant](../../../variants/variant)> - return function result.
