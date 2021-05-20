---
type: docs
title: "ConnectionException"
linkTitle: "ConnectionException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors that occur during connections to remote services.
    
---

**Implements:** [ApplicationException](../application_exception)

### Description

The ConnectionException class is used to manage errors that occur during a connection to a remote service. These errors can be related to misconfiguration, network issues, or the remote service itself.

### Constructors
Creates an error instance and assigns its values.

> `public` ConnectionException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message

> `public` ConnectionException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance with noresponse error category and assigns its values.

> `public` ConnectionException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` ConnectionException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description

