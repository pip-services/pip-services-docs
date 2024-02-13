---
type: docs
title: "ReferenceException"
linkTitle: "ReferenceException"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceException class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors
Creates an error instance and assigns its values.

> ReferenceException(Context: IContext Optional, locator: Any)

- **Context**: [Context](../../icontext - (optional) a unique transaction id to trace execution through call chain.
- **locator**: Any - the locator to find reference to dependent component.

