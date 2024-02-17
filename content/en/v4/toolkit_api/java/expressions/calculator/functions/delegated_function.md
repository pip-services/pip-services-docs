---
type: docs
title: "DelegatedFunction"
linkTitle: "DelegatedFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines a delegate to implement a function.
---

**Implements**: [IFunction](../ifunction)

### Description

The DelegatedFunction class allows you to define a delegate to implement a function.

### Constructors
Constructs this function class with the specified parameters.

> `public` DelegatedFunction(String name, FunctionCalculator calculator)

- **name**: string - name of this function.
- **calculator**: FunctionCalculator - function calculator delegate.

### Properties

#### name
Function's name.
> `private final` String _name

### Instance methods

#### getName
Function's calculation method.

> `public` String getName()

- **returns**: String - name.

#### setName
Function's calculation method.

> `public` void setName(String value)

- **value**: String - name.

#### calculate
Function's calculation method.

> `public` [Variant[]](../../../variants/variant) calculate(List<[Variant](../../../variants/variant)> params, [IVariantOperations](../../../variants/ivariant_operations) variantOperations) throws ExpressionException

- **params**: List<[Variant](../../../variants/variant)> - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: [Variant](../../../variants/variant) - returned function's result.
