---
type: docs
title: "ConnectionException"
linkTitle: "ConnectionException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors that occur during connections to remote services.
    
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The ConnectionException class is used to manage errors that occur during a connection to a remote service. These errors can be related to misconfiguration, network issues, or the remote service itself.

### Constructors
Creates an error instance and assigns its values.

> `public` ConnectionException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with error message

> `public` ConnectionException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance with a noresponse error category and assigns its values.

> `public` ConnectionException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance by processing native C# Exceptions.

> `protected` ConnectionException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.

