---
type: docs
title: "ConfigException"
linkTitle: "ConfigException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Errors related to mistakes in the microservice's user-defined configurations.
---

**Implements:** [ApplicationException](../application_exception)


### Constructors
Creates an error instance and assigns its values.

> ConfigException(correlation_id: Optional[str] = None, code: str = None, message: str = None)

- **correlation_id**: Optional[str] - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

