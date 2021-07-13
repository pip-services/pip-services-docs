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

The DelegatedFunction class allows you to define a delegate to implement a function.

### Constructors
Constructs this function class with the specified parameters.

> `public` constructor(name: string, calculator: (params: [Variant[]](../../../variants/variant), variantOperations: [IVariantOperations](../../../variants/ivariant_operations)) => Promise<[Variant](../../../variants/variant)>, context?: any)

- **params**: [Variant[]](../../../variants/variant) - name of this function.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations)) => Promise<[Variant](../../../variants/variant)> - function calculator delegate.
- **context**: any - context

### Properties

#### name
Function's name.
> `public` name(): string

- **retuns**: string - function's name.

### Instance methods

#### calculate
Function's calculation method.

> `public` calculate(params: [Variant[]](../../../variants/variant), variantOperations: [IVariantOperations](../../../variants/ivariant_operations)): Promise<[Variant](../../../variants/variant)>

- **params**: [Variant[]](../../../variants/variant) - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: Promise<[Variant](../../../variants/variant)> - returned function's result.
