---
type: docs
title: "InvalidStateException"
linkTitle: "InvalidStateException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors related to calling operations, which require the component to be in a specific state.
    For instance: business calls when the component is not ready.
---


### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlation_id: string = null, code: string = null, message: string = null): [BadRequestException]()

- **correlation_id**: string = null - (optional) a unique transaction id to trace execution through call chain.
- **code**: string = null - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string = null - (optional) a human-readable description of the error.

