---
type: docs
title: "ValidationException"
linkTitle: "ValidationException"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors in schema validation.

    
---

### Description

The ValidationException is used to define errors in schema validation.

Important points

- Validation errors are usually generated based in [ValidationResult](../validation_result).
- If using strict mode, warnings will also raise validation exceptions.

### Constructors
Creates a new instance of validation exception and assigns its values.  

> NewValidationError(correlationId string, message string, results [][*ValidationResult](../validation_result)) [*errors.ApplicationError](../../errors/application_error)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **message**: string - (optional) a human-readable description of the error.
- **results**: [][*ValidationResult](../validation_result) - (optional) a list of validation results

Creates a new ValidationError based on errors in validation results. If validation results have no errors, than nil is returned.

> NewValidationErrorFromResults(correlationId string, results [][*ValidationResult](../validation_result), strict bool) [*errors.ApplicationError](../../errors/application_error)

- **correlationId**: string - transaction id to trace execution through call chain.
- **results**: [][*ValidationResult](../validation_result) - list of validation results that may contain errors
- **strict**: bool - true to treat warnings as errors.


### Methods

#### composeErrorMessage
Composes human readable error message based on validation results.  

> composeErrorMessage(results [][*ValidationResult](../validation_result)) string

- **results**: [][*ValidationResult](../validation_result) - a list of validation results.
- **returns**: string - a composed error message.


#### ThrowValidationErrorIfNeeded
Throws ValidationException based on errors in validation results.
If validation results have no errors, than no exception is thrown.

> ThrowValidationErrorIfNeeded(correlationId string, results [][*ValidationResult](../validation_result), strict bool)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **results**: [ValidationResult](../validation_result)[] - list of validation results that may contain errors
- **strict**: bool - true to treat warnings as errors.



### See also
- #### [BadRequestException](../../errors/bad_request_exception)
- #### [ValidationResult](../validation_result)
