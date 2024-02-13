---
type: docs
title: "DelegatedFunction"
linkTitle: "DelegatedFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Defines a delegate to implement a function.
---

### Description

The DelegatedFunction class allows you to define a delegate to implement a function.

### Constructors

#### NewDelegatedFunction
Constructs this function class with the specified parameters.

> NewDelegatedFunction(name string, calculator FunctionCalculator) [*DelegatedFunction]()

- **name**: string - name of this function.
- **calculator**: FunctionCalculator - function calculator delegate.

### Fields

<span class="hide-title-link">

#### name
Function's name.
> **name**: string

- **retuns**: string - function's name.

</span>

### Methods

#### Calculate
Function's calculation method.

> (c [*DelegatedFunction]()) Calculate(parameters [[]*Variant](../../../variants/variant), variantOperations [IVariantOperations](../../../variants/ivariant_operations)) ([*Variant](../../../variants/variant), error)

- **params**: [[]*Variant](../../../variants/variant) - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: ([*Variant](../../../variants/variant), error) - returned function's result.

