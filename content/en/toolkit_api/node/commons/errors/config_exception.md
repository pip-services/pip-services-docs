---
type: docs
title: "ConfigException"
linkTitle: "ConfigException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors related to mistakes in microservice's user-defined configurations.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The ConfigException is used to manage errors related to mistakes in microservice's user-defined configurations. 

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlation_id: string = null, code: string = null, message: string = null)

- **correlation_id**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN".
- **message**: string - (optional) human-readable description of the error.

