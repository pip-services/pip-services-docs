---
type: docs
title: "TypeUnsafeVariantOperations"
linkTitle: "TypeUnsafeVariantOperations"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a type unsafe variant operations manager object.
---

**Inherits**: [AbstractVariantOperations](../abstract_variant_operations)

### Description

The TypeUnsafeVariantOperations class allows you to implement a type unsafe variant operations manager object.


### Instance methods

#### Convert
Converts a variant to a specified type.

> `public override` [Variant](../variant) Convert([Variant](../variant) value, [VariantType](../variant_type) newType)

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
