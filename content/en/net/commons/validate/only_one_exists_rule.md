---
type: docs
title: "OnlyOneExistsRule"
linkTitle: "OnlyOneExistsRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Validation rule that checks that only one property of a list of properties exists in an object.
---

**Inherits**: [IValidationRule](../ivalidation_rule)

### Description

The OnlyOneExistsRule allows you to check that only one property of a list of properties exists in an object.

### Constructors
Creates a new validation rule and sets its values

> `public` OnlyOneExistsRule(params string[] properties)

- **properties**: string[] - a list of property names where at only one property must exist

### Instance methods

#### Validate
Validates a given value against this rule.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: object - a value to be validated.
- **results**: [ValidationResult](../validation_result)[] - a list with validation results to add new results.


### Examples

```cs
var schema = new Schema().WithRule(new OnlyOneExistsRule("field1", "field2"));

schema.Validate({ field1: 1, field2: "A" });     // Result: only one of properties field1, field2 must exist
schema.Validate({ field1: 1 });                  // Result: no errors
schema.Validate({ });                            // Result: only one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)
