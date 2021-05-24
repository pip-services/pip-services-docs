---
type: docs
title: "ConfigException"
linkTitle: "ConfigException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors related to mistakes in microservice's user-defined configurations.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The ConfigException is used to manage errors related to mistakes in microservice's user-defined configurations. 

### Constructors
Creates an error instance and assigns its values.

> `public` ConfigException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message.

> `public` ConfigException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance with misconfiguration error category and assigns its values.

> `public` ConfigException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` ConfigException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description