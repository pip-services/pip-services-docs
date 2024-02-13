---
type: docs
title: "ValidationException"
linkTitle: "ValidationException"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Errors in schema validation.

    
---

### Description

The ValidationException class is used to define errors in a schema validation.

Important points

- Validation errors are usually generated based in [ValidationResult](../validation_result).
- If using strict mode, warnings will also raise validation exceptions.

### Constructors

#### NewValidationError
Creates a new instance of validation exception and assigns its values.  

> NewValidationError(correlationId string, message string, results [][*ValidationResult](../validation_result)) [*errors.ApplicationError](../../../commons/errors/application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **message**: string - (optional) human-readable description of the error.
- **results**: [][*ValidationResult](../validation_result) - (optional) list of validation results

#### NewValidationErrorFromResults
Creates a new ValidationError based on errors in validation results. If validation results have no errors, then nil is returned.

> NewValidationErrorFromResults(correlationId string, results [][*ValidationResult](../validation_result), strict bool) [*errors.ApplicationError](../../../commons/errors/application_error)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **results**: [][*ValidationResult](../validation_result) - list of validation results that may contain errors
- **strict**: bool - true to treat warnings as errors.


### Methods

#### composeErrorMessage
Composes human readable error message based on validation results.  

> composeErrorMessage(results [][*ValidationResult](../validation_result)) string

- **results**: [][*ValidationResult](../validation_result) - list of validation results.
- **returns**: string - composed error message.


#### ThrowValidationErrorIfNeeded
Throws ValidationException based on errors in validation results.
If validation results have no errors, then no exception is thrown.

> ThrowValidationErrorIfNeeded(correlationId string, results [][*ValidationResult](../validation_result), strict bool)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **results**: [ValidationResult](../validation_result)[] - list of validation results that may contain errors
- **strict**: bool - true to treat warnings as errors.



### See also
- #### [BadRequestError](../../../commons/errors/bad_request_error)
- #### [ValidationResult](../validation_result)

