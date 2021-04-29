---
type: docs
title: "ConnectionException"
linkTitle: "ConnectionException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Errors that occur during connections to remote services.
    They can be related to misconfiguration, network issues, or the remote service itself.
---

**Implements:** [ApplicationException](../application_exception)


### Constructors
Creates an error instance and assigns its values.

> ConnectionException(correlation_id: str = None, code: str = None, message: str = None)

- **correlation_id**: str - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

