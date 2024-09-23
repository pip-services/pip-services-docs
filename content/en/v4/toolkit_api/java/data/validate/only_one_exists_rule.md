---
type: docs
title: "OnlyOneExistsRule"
linkTitle: "OnlyOneExistsRule"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Validation rule that checks that only one property of a list of properties exists in an object.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The OnlyOneExistsRule allows you to check that only one property of a list of properties exists in an object.

### Constructors
Creates a new validation rule and sets its values. 

> `public` OnlyOneExistsRule(String... properties)

- **properties**: String... - list of property names where only one property must exist

### Instance methods

#### validate
Validates a given value against this rule.

> `public` void validate(String path, [Schema](../schema) schema, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: Object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.


### Examples

```java
{@code
  Schema schema = new Schema()
       .withRule(new OnlyOneExistsRule("field1", "field2"));
 
  schema.validate({ field1: 1, field2: "A" });     // Result: only one of properties field1, field2 must exist
  schema.validate({ field1: 1 });                  // Result: no errors
  schema.validate({ });                            // Result: only one of properties field1, field2 must exist
  }                            // Result: only one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)
