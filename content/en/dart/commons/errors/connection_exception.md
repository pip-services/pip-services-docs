---
type: docs
title: "ConnectionException"
linkTitle: "ConnectionException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Errors that occur during connections to remote services.
    
---

**Extends:** [ApplicationException](../application_exception)

### Description

The ConnectionException class is used to manage errors that occur during a connection to a remote service. These errors can be related to misconfiguration, network issues, or the remote service itself.

### Constructors
Creates an error instance and assigns its values.

> ConnectionException([String correlation_id, String code, String message])

- **correlation_id**: String - (optional) unique transaction id used to trace execution through the call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN".
- **message**: String - (optional) human-readable description of the error.

