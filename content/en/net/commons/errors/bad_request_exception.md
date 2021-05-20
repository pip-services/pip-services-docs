---
type: docs
title: "BadRequestException"
linkTitle: "BadRequestException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors due to improper user requests. 
    
---

**Implements:** [ApplicationException](../application_exception)

### Description

The BadRequestException class is used to manage errors created by improper user requests. For example, when there are missing or incorrect parameters in the request.

### Constructors
Creates an error instance and assigns its values.

> `public` BadRequestException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message.

> `public` BadRequestException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance with bad request error category and assigns its values.

> `public` BadRequestException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` BadRequestException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description