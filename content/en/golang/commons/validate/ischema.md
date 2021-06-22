---
type: docs
title: "ISchema"
linkTitle: "ISchema"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Validation schema interface
---

### Description

The ISchema interface contains several validation methods.


### Methods


#### Validate
Validates the given value and returns validation results 

> Validate(value interface{}) [][*ValidationResult](../validation_result)

- **value**: interface{} - value to be validated.
- **returns**: [][*ValidationResult](../validation_result) - list with validation results


#### ValidateAndReturnError
Validates the given value and returns a [ValidationException](../validation_exception) if errors were found.

> ValidateAndReturnError(correlationId string, value interface{}, strict bool) *errors.ApplicationError

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **value**: interface{} - value to be validated.
- **strict**: bool - if true,warnings will also raise validation exceptions.
- **returns**: [*errors.ApplicationError](../../errors/application_error) - Application error


#### ValidateAndThrowError
Validates the given value and throws a [ValidationException](../validation_exception) if errors were found.

> ValidateAndThrowError(correlationId string, value interface{}, strict bool)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **value**: interface{} - value to be validated.
- **strict**: bool - 

