---
type: docs
title: "TypeSafeVariantOperations"
linkTitle: "TypeSafeVariantOperations"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a strongly typed (type safe) variant operations manager object.
---

**Inherits**: [AbstractVariantOperations](../abstract_variant_operations)

### Description

The TypeSafeVariantOperations class allows you to implement a strongly typed (type safe) variant manager object.


### Instance methods

#### Convert
Converts a variant to a specified type.

> `public override` [Variant](../variant) Convert([Variant](../variant) value, [VariantType](../variant_type) newType)

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
