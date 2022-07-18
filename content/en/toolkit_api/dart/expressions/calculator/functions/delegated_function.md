---
type: docs
title: "DelegatedFunction"
linkTitle: "DelegatedFunction"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Defines a delegate to implement a function.
---

**Implements**: [IFunction](../ifunction)

### Description

The DelegatedFunction class allows you to define a delegate to implement a function.

### FunctionCalculator
Defines a delegate to implement a function

> typedef FunctionCalculator = Future<[Variant](../../../variants/variant)> Function(List<[Variant](../../../variants/variant)> params, [IVariantOperations](../../../variants/ivariant_operations) variantOperations)

### Constructors
Constructs this function class with the specified parameters.

> DelegatedFunction(String name, [FunctionCalculator](#functioncalculator) calculator)

- **name**: string - name of this function.
- **calculator**: [FunctionCalculator](#functioncalculator) - function calculator delegate.

### Properties

#### name
Function's name.
`@override`
> set name(String value)

- **retuns**: String - function's name.

### Instance methods

#### calculate
Function's calculation method.

`@override`
> Future<[Variant](../../../variants/variant)> calculate(List<[Variant](../../../variants/variant)> params, [IVariantOperations](../../../variants/ivariant_operations) variantOperations)

- **params**: List<[Variant](../../../variants/variant)> - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: Future<[Variant](../../../variants/variant)> - returned function's result.
