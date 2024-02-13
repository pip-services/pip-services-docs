---
type: docs
title: "TypeSafeVariantOperations"
linkTitle: "TypeSafeVariantOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a strongly typed (type safe) variant operations manager object.
---

**Implements**: [AbstractVariantOperations](../abstract_variant_operations)

### Description

The TypeSafeVariantOperations class allows you to implement a strongly typed (type safe) variant manager object.

### Constructors

#### NewTypeSafeVariantOperations
Creates a new instance of the component
> NewTypeSafeVariantOperations() [*TypeSafeVariantOperations]()

### Methods

#### Convert
Converts a variant to a specified type.

> (c [*TypeSafeVariantOperations]()) Convert(value [*Variant](../variant), newType int) ([*Variant](../variant), error)

- **value**: [*Variant](../variant) - variant value to be converted.
- **newType**: int - type of object to be returned ([VariantType](../variant_type)).
- **returns**: [*Variant](../variant) - converted Variant value.

