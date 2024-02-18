---
type: docs
title: "IFunction"
linkTitle: "IFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    An interface for expression functions.
---


### Description

The IFunction is an interface for expression functions.


### Instance methods

#### setName
Function's name.
> void setName(String value)

- **value**: String - function's name.

#### getName
Function's name.
> String getName()

- **value**: String - function's name.

#### calculate
Function calculation method.

> Variant](../../../variants/variant) calculate(List<[Variant[]](../../../variants/variant)> params,  [IVariantOperations](../../../variants/ivariant_operations) variantOperations) throws ExpressionException

- **params**: [Variant[]](../../../variants/variant) - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: [Variant](../../../variants/variant) - returned function's result.
