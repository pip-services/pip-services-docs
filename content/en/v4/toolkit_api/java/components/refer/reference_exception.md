---
type: docs
title: "ReferenceError"
linkTitle: "ReferenceError"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceException class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors
Creates an error instance and assigns its values.

> `public` ReferenceException([IContext](../../context/context) context, Object locator)

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **locator**: Object - locator to find reference to dependent component.

