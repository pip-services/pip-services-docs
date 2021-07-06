---
type: docs
title: "TypeSafeVariantOperations"
linkTitle: "TypeSafeVariantOperations"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a strongly typed (type safe) variant operations manager object.
---

**Extends**: [AbstractVariantOperations](../abstract_variant_operations)

### Description

The TypeSafeVariantOperations class allows you to implement a strongly typed (type safe) variant manager object.


### Instance methods

#### convert
Converts a variant to a specified type.

> `public` convert(value: [Variant](../variant), newType: [VariantType](../variant_type)): [Variant](../variant)

- **value**: [Variant](../variant) - variant value to be converted.
- **newType**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
