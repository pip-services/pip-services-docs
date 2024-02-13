---
type: docs
title: "TypeUnsafeVariantOperations"
linkTitle: "TypeUnsafeVariantOperations"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a type unsafe variant operations manager object.
---

**Implements**: [AbstractVariantOperations](../abstract_variant_operations)

### Description

The TypeUnsafeVariantOperations class allows you to implement a type unsafe variant operations manager object.


### Instance methods

#### convert
Converts a variant to a specified type.

> convert(value: [Variant](../variant), new_type: [VariantType](../variant_type)): [Variant](../variant)

- **value**: [Variant](../variant) - variant value to be converted.
- **new_type**: [VariantType](../variant_type) - type of object to be returned.
- **returns**: [Variant](../variant) - converted Variant value.
