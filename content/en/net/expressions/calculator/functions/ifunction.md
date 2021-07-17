---
type: docs
title: "IFunction"
linkTitle: "IFunction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    An interface for expression functions.
---


### Description

The IFunction is an interface for expression functions.


### Properties

#### Name
Function's name.
> string Name { get; }

### Instance methods

#### CalculateAsync
Function calculation method.

> Task<[Variant](../../../variants/variant)> CalculateAsync(IList<[Variant](../../../variants/variant)> parameters, IVariantOperations variantOperations)

- **params**: IList<[Variant](../../../variants/variant)> - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: Task<[Variant](../../../variants/variant)> - returned function's result.
