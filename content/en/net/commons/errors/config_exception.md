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

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with an error message.

> `public` ConfigException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance with a misconfiguration error category and assigns its values.

> `public` ConfigException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance.

> `protected` ConfigException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialization information
- **context**: StreamingContext - streaming context
