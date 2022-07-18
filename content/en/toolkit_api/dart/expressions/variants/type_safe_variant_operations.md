---
type: docs
title: "TypeSafeVariantOperations"
linkTitle: "TypeSafeVariantOperations"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a strongly typed (type safe) variant operations manager object.
---

**Extends**: [AbstractVariantOperations](../abstract_variant_operations)

### Description

The TypeSafeVariantOperations class allows you to implement a strongly typed (type safe) variant manager object.


### Instance methods

#### convert
Converts a variant to a specified type.

`@override`
> [Variant](../variant) convert([Variant](../variant) variant, [VariantType](../variant_type) newType)

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
