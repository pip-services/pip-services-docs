---
type: docs
title: "TypeUnsafeVariantOperations"
linkTitle: "TypeUnsafeVariantOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a type unsafe variant operations manager object.
---

**Implements**: [AbstractVariantOperations](../abstract_variant_operations)

### Description

The TypeUnsafeVariantOperations class allows you to implement a type unsafe variant operations manager object.

### Constructors

#### NewTypeUnsafeVariantOperations
Creates a new instance of the component
> NewTypeUnsafeVariantOperations() [*TypeUnsafeVariantOperations]()

### Methods

#### Convert
Converts a variant to a specified type.

> (c [*TypeUnsafeVariantOperations]()) Convert(value [*Variant](../variant), newType int) ([*Variant](../variant), error)

- **value**: [*Variant](../variant) - variant value to be converted.
- **newType**: int - type of object to be returned ([VariantType](../variant_type)).
- **returns**: [*Variant](../variant) - converted Variant value.

