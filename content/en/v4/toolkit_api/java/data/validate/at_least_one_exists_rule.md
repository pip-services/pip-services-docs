---
type: docs
title: "AtLeastOneExistsRule"
linkTitle: "AtLeastOneExistsRule"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Validation rule that checks that at least one of the object's properties exists.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The AtLeastOneExistsRule class allows you to check that given a set of properties, at least one of them exists. 

### Constructors
Creates a new validation rule and sets its values

> `public` AtLeastOneExistsRule(AtLeastOneExistsRule(String... properties))

- **properties**: AtLeastOneExistsRule(String... properties) - list of property names where at least one property must exist

### Instance methods

#### validate
Validates a given value against this rule.

> `public` void validate(String path, [Schema](../schema) schema, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from.
- **value**: Object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results.

### Examples
```java
{@code
  Schema schema = new Schema()
       .withRule(new AtLeastOneExistsRule("field1", "field2"));
 
  schema.validate({ field1: 1, field2: "A" });     // Result: no errors
  schema.validate({ field1: 1 });                  // Result: no errors
  schema.validate({ });                            // Result: at least one of properties field1, field2 must exist
  }
```

### See also
- #### [IValidationRule](../ivalidation_rule)
