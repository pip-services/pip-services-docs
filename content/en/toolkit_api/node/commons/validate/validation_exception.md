---
type: docs
title: "ValidationException"
linkTitle: "ValidationException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors in schema validation.

    
---

**Extends:** [BadRequestException](../../errors/bad_request_exception)

### Description

The ValidationException is used to define errors in a schema validation.

Important points

- Validation errors are usually generated based in [ValidationResult](../validation_result).
- If using strict mode, warnings will also raise validation exceptions.

### Constructors
Creates a new instance of validation exception and assigns its values.  

> `public` constructor(correlationId: string, message?: string, results?: [ValidationResult](../validation_result)[])

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **message**: string - (optional) human-readable description of the error.
- **results**: [ValidationResult](../validation_result)[] - (optional) list of validation results.


### Static methods

#### composeMessage
Composes human readable error message based on validation results.  

> `public static` composeMessage(results: [ValidationResult](../validation_result)[]): string

- **results**: [ValidationResult](../validation_result)[] - list of validation results.
- **returns**: string - composed error message.


#### fromResults
Creates a new ValidationException based on errors in validation results.
If validation results have no errors, then null is returned.

> `public static` fromResults(correlationId: string, results: [ValidationResult](../validation_result)[], strict: boolean): [ValidationException]()

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **results**: [ValidationResult](../validation_result)[] -  list of validation results that may contain errors.
- **strict**: boolean - true to treat warnings as errors.
- **returns**: [ValidationException]() - newly created ValidationException or null if no errors were found.

#### throwExceptionIfNeeded
Throws ValidationException based on errors in validation results.
If validation results have no errors, then no exception is thrown.

> `public static` throwExceptionIfNeeded(correlationId: string, results: [ValidationResult](../validation_result)[], strict: boolean): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **results**: [ValidationResult](../validation_result)[] - list of validation results that may contain errors.
- **strict**: boolean - true to treat warnings as errors.



### See also
- #### [BadRequestException](../../errors/bad_request_exception)
- #### [ValidationResult](../validation_result)
