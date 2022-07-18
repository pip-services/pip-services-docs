---
type: docs
title: "ExcludedRule"
linkTitle: "ExcludedRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Validation rule used to check that one or more values are excluded from the list of constants.
---

**Inherits**: [IValidationRule](../ivalidation_rule)

### Description

The ExcludedRule allows you to verify that none of the values specified in the rule is present in a list of constants.

### Constructors
Creates a new validation rule and sets its values

> `public` ExcludedRule(params object[] values)

- **values**: object[] - list of constants that value must be excluded from

### Instance methods

#### Validate
Validates the given value. None of the values set in this ExcludedRule object must exist 
in the value that is given for validation to pass.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - path to the value that is to be validated (in dot notation).
- **schema**: [Schema](../schema) - (not used in this implementation).
- **value**: object - value that is to be validated.
- **results**: List<[ValidationResult](../validation_result)> - results of the validation.

### Examples

```cs
var schema = new Schema().WithRule(new ExcludedRule(1, 2, 3));

schema.Validate(2);      // Result: 2 must not be one of 1, 2, 3
schema.Validate(10);     // Result: no errors

```

### See also
- #### [IValidationRule](../ivalidation_rule)
