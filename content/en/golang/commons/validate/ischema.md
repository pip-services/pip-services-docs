---
type: docs
title: "ISchema"
linkTitle: "ISchema"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Validation schema interface
---

### Description

TODO: add description


### Methods


#### Validate
TODO: add description

> Validate(value interface{}) [][*ValidationResult](../validation_result)

- **value**: interface{} - TODO: add description
- **returns**: [][*ValidationResult](../validation_result) - TODO: add description


#### ValidateAndReturnError
TODO: add description

> ValidateAndReturnError(correlationId string, value interface{}, strict bool) *errors.ApplicationError

- **correlationId**: string - TODO: add description
- **value**: interface{} - TODO: add description
- **strict**: bool - TODO: add description
- **returns**: [*errors.ApplicationError](../../errors/application_error) - TODO: add description


#### ValidateAndThrowError
TODO: add description

> ValidateAndThrowError(correlationId string, value interface{}, strict bool)

- **correlationId**: string - TODO: add description
- **value**: interface{} - TODO: add description
- **strict**: bool - TODO: add description

