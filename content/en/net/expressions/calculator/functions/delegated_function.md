---
type: docs
title: "DelegatedFunction"
linkTitle: "DelegatedFunction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines a delegate to implement a function.
---

**Inherits**: [IFunction](../ifunction)

### Description

The DelegatedFunction class allows you to define a delegate to implement a function.

### Constructors
Constructs this function class with the specified parameters.

> `public` DelegatedFunction(string name, [FunctionCalculator](#function_calculator) calculator)

- **name**: string - name of this function.
- **calculator**: [FunctionCalculator](#function_calculator) - The function calculator delegate.

### Delegate

#### FunctionCalculator
Defines a delegate to implement a function
> `public delegate` Task<[Variant](../../../variants/variant)> FunctionCalculator(IList<[Variant](../../../variants/variant)> parameters, [IVariantOperations](../../../variants/ivariant_operations) variantOperations)

- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - A list with function parameters
- **parameters**: IList<[Variant](../../../variants/variant)> - A manager for variant operations.
- **returns**: Task<[Variant](../../../variants/variant)> - A calculated function value.

### Properties

#### Name
Function's name.
> `public` string Name { get; }

- **retuns**: string - function's name.

### Instance methods

#### Calculate
Function's calculation method.

> `public` Task<[Variant](../../../variants/variant)> CalculateAsync(IList<[Variant](../../../variants/variant)> parameters, [IVariantOperations](../../../variants/ivariant_operations) variantOperations)

- **params**: IList<[Variant](../../../variants/variant)> - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: Task<[Variant](../../../variants/variant)> - returned function's result.
