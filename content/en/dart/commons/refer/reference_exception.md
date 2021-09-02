---
type: docs
title: "ReferenceException"
linkTitle: "ReferenceException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceException class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors
Creates an error instance and assigns its values.

> ReferenceException(String correlationId, locator)

- **correlationId**: String - (optional) unique transaction id used to trace execution through a call chain.
- **locator**: dynamic - locator used to find a reference to a dependent component.

