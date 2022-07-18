---
type: docs
title: "ReferenceException"
linkTitle: "ReferenceException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceException class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlationId: string, locator: any)

- **correlationId**: string - (optional) unique transaction id used to trace execution through a call chain.
- **locator**: any - locator to find reference to dependent component.

