---
type: docs
title: "ValidationException"
linkTitle: "ValidationException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors in schema validation.

    
---

**Inherits**: [BadRequestException](../../errors/bad_request_exception)

### Description

The ValidationException is used to define errors in schema validation.

Important points

- Validation errors are usually generated based in [ValidationResult](../validation_result).
- If using strict mode, warnings will also raise validation exceptions.

### Constructors
Creates a new instance of a validation exception and assigns its values.  

> `public` ValidationException(string correlationId, string message, IList<[ValidationResult](../validation_result)> results)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **message**: string - (optional) human-readable description of the error.
- **results**: IList<[ValidationResult](../validation_result)> - (optional) list of validation results

Creates a new instance of a validation exception and assigns its values.

> `public` ValidationException(string correlationId, string message)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **message**: string - (optional) human-readable description of the error.


### Static methods

#### ComposeMessage
Composes a human readable error message based on validation results.  

> `public static` string ComposeMessage(IList<[ValidationResult](../validation_result)> results)

- **results**: IList<[ValidationResult](../validation_result)> - list of validation results.
- **returns**: string - composed error message.


#### FromResults

Creates a new ValidationException based on errors in validation results.
If validation results have no errors, then null is returned.

> `public static` [ValidationException]() FromResults(correlationId: string, List<[ValidationResult](../validation_result)> List<[ValidationResult](../validation_result)> results, bool strict)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **results**: List<[ValidationResult](../validation_result)> -  list of validation results that may contain errors.
- **strict**: bool - true to treat warnings as errors.
- **returns**: [ValidationException]() - newly created ValidationException or null if no errors in found.

#### ThrowExceptionIfNeeded
Throws ValidationException based on errors in validation results.
If validation results have no errors, then no exception is thrown.

> `public static` void ThrowExceptionIfNeeded(string correlationId, IList<[ValidationResult](../validation_result)> results, bool strict)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **results**: IList<[ValidationResult](../validation_result)> - list of validation results that may contain errors
- **strict**: bool - true to treat warnings as errors.



### See also
- #### [BadRequestException](../../errors/bad_request_exception)
- #### [ValidationResult](../validation_result)
