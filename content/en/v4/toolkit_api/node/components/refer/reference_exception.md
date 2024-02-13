---
type: docs
title: "ReferenceError"
linkTitle: "ReferenceError"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceException class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(context: [IContext](../../context/context), locator: any)

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **locator**: any - locator to find reference to dependent component.

