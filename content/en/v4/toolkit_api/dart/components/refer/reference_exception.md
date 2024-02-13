---
type: docs
title: "ReferenceException"
linkTitle: "ReferenceException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceException class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors
Creates an error instance and assigns its values.

> ReferenceException(IContext? context, locator)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **locator**: dynamic - locator used to find a reference to a dependent component.

