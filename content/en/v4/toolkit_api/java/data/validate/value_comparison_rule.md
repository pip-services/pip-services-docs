---
type: docs
title: "ValueComparisonRule"
linkTitle: "ValueComparisonRule"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
   Validation rule that compares a value to a constant.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The ValueComparisonRule class allows you to create a validation rule that compares a value to a constant.

### Constructors
Creates a new validation rule and sets its values.

> `public` ValueComparisonRule(String operation, Object value)

- **operation**: String - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value**: Object - constant value to compare to

### Instance methods

#### validate
Validates a given value against this rule.

> `public` void validate(String path, [Schema](../schema) schema, Object value, List<[ValidationResult](../validation_result)> results)

- **path**: String - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: Object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

### Examples
```java
{@code
  Schema schema = new Schema()
       .withRule(new ValueComparisonRule("EQ", 1));
 
  schema.validate(1);          // Result: no errors
  schema.validate(2);          // Result: 2 is not equal to 1
  }
```

### See also
- #### [IValidationRule](../ivalidation_rule)
