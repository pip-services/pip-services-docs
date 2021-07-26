---
type: docs
title: "DelegatedFunction"
linkTitle: "DelegatedFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines a delegate to implement a function.
---

**Implements**: [IFunction](../ifunction)

### Description

The DelegatedFunction class allows you to define a delegate to implement a function.

### Constructors
Constructs this function class with the specified parameters.

> DelegatedFunction(name: str, calculator: Callable[[List[[Variant](../../../variants/variant)], [IVariantOperations](../../../variants/ivariant_operations)], [Variant](../../../variants/variant)], context: Optional[Any] = None)

- **name**: str - name of this function.
- **calculator**: Callable[[List[[Variant](../../../variants/variant)], [IVariantOperations](../../../variants/ivariant_operations)] - function calculator delegate.
- **context**: Optional[Any] - context

### Properties

#### name
Function's name.
> name(): str

- **retuns**: str - function's name.

### Instance methods

#### calculate
Function's calculation method.

> calculate(params: List[[Variant](../../../variants/variant)], variant_operations: [IVariantOperations](../../../variants/ivariant_operations)): [Variant](../../../variants/variant)

- **params**: List[[Variant](../../../variants/variant)]  - array with function parameters.
- **variant_operations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: [Variant](../../../variants/variant) - returned function's result.
