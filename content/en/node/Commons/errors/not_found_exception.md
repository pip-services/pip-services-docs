---
type: docs
title: "NotFoundException"
linkTitle: "NotFoundException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors caused by attempts to access missing objects.
---


### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlation_id: string = null, code: string = null, message: string = null): [BadRequestException]()

- **correlation_id**: string = null - (optional) a unique transaction id to trace execution through call chain.
- **code**: string = null - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string = null - (optional) a human-readable description of the error.

