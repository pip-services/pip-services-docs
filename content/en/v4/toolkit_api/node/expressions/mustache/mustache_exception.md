---
type: docs
title: "MustacheException"
linkTitle: "MustacheException"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-expressions-node"
description: > 
    Exception that can be thrown by a Mustache template.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The MustacheException class defines an exception that can be thrown by a Mustache template.

### Constructors
Creates a new instance of the MustacheException class.

> `public` constructor(context: [IContext](../../../components/context/icontext), code: string, message: string, line: number, column: number)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - code
- **message**: string - human-readable message
- **line**: number - line number
- **column**: number - column number
