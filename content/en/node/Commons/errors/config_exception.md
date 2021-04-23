---
type: docs
title: "ConfigException"
linkTitle: "ConfigException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors related to mistakes in the microservice's user-defined configurations.
---

**Extends:** [ApplicationException](../application_exception)


### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlation_id: string = null, code: string = null, message: string = null): [BadRequestException]()

- **correlation_id**: string = null - (optional) a unique transaction id to trace execution through call chain.
- **code**: string = null - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string = null - (optional) a human-readable description of the error.

