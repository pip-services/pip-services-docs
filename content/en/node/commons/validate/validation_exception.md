---
type: docs
title: "ValidationException"
linkTitle: "ValidationException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Errors in schema validation.

    
---

**Implements:** [BadRequestException](../../errors/bad_request_exception)

### Description

The ValidationException is used to define errors in schema validation.

Important points

- Validation errors are usually generated based in [ValidationResult](../validation_result).
- If using strict mode, warnings will also raise validation exceptions.

### Constructors
Creates a new instance of validation exception and assigns its values.  

> ValidationException(correlation_id: Optional[str], message: Optional[str], results: List[[ValidationResult](../validation_result)])

- **correlation_id**: Optional[str] - (optional) a unique transaction id to trace execution through call chain.
- **message**: Optional[str] - (optional) a human-readable description of the error.
- **results**:  List[[ValidationResult](../validation_result)] - (optional) a list of validation results


### Static methods

#### compose_message
Composes a human readable error message based on validation results.  

> `static` compose_message(results: List[[ValidationResult](../validation_result)]): str

- **results**: List[[ValidationResult](../validation_result)] - a list of validation results.
- **returns**: str -  a composed error message.


#### from_results
Creates a new ValidationException based on errors in validation results.
If validation results have no errors, then None is returned.

> `static` from_results(correlation_id: Optional[str], results: List[[ValidationResult](../validation_result)], strict: bool)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **results**: List[[ValidationResult](../validation_result)] -  list of validation results that may contain errors
- **strict**: bool - true to treat warnings as errors.
- **returns**: [ValidationException]() - a newly created ValidationException or None if no errors in found.

#### throw_exception_if_needed
Throws ValidationException based on errors in validation results.
If validation results have no errors, then no exception is thrown.

> `static` throw_exception_if_needed(correlation_id: Optional[str], results: List[[ValidationResult](../validation_result)], strict: bool)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **results**: List[[ValidationResult](../validation_result)] - list of validation results that may contain errors
- **strict**: bool - true to treat warnings as errors.



### See also
- #### [BadRequestException](../../errors/bad_request_exception)
- #### [ValidationResult](../validation_result)
