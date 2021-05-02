---
type: docs
title: "ReferenceException"
linkTitle: "ReferenceException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceException class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors
Creates an error instance and assigns its values.

> ReferenceException(correlation_id: str, locator: Any)

- **correlation_id**: str - (optional) a unique transaction id to trace execution through call chain.
- **locator**: Any - the locator to find reference to dependent component.

