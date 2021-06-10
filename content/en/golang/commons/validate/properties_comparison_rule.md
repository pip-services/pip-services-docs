---
type: docs
title: "PropertiesComparisonRule"
linkTitle: "PropertiesComparisonRule"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Validation rule that compares two object properties.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The PropertiesComparisonRule class allows you to create a validation rule to compare two object properties.

### Constructors
Creates a new validation rule and sets its arguments.
See [ObjectComparator.compare](../object_comparator/#compare)

> NewPropertiesComparisonRule(property1 string, operation string, property2 string) [*PropertiesComparisonRule]()

- **property1**: string - a name of the first property to compare.
- **operation**: string - a comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **property2**: string - a name of the second property to compare.

### Methods

#### Validate
Validates a given value against this rule.

> (c [*PropertiesComparisonRule]()) Validate(path string, schema ISchema, value interface{}) [][*ValidationResult](../validation_result)

- **path**: string - a dot notation path to the value.
- **schema**: [ISchema](../ischema) - a schema this rule is called from
- **value**: interface{} - a value to be validated.
- **results**: [][*ValidationResult](../validation_result) - a list with validation results to add new results.

### Examples

```go
var schema = NewObjectSchema()
    .WithRule(NewPropertyComparisonRule("field1", "NE", "field2"));
 
schema.Validate({ field1: 1, field2: 2 });       // Result: no errors
schema.Validate({ field1: 1, field2: 1 });       // Result: field1 shall not be equal to field2
schema.Validate({});                             // Result: no errors

```

### See also
- #### [IValidationRule](../ivalidation_rule)
