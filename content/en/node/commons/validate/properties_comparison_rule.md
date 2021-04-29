---
type: docs
title: "PropertiesComparisonRule"
linkTitle: "PropertiesComparisonRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule that compares two object properties.
---

**Implements:** [IValidationRule](../ivalidation_rule)

See also [IValidationRule](../ivalidation_rule)

**Example:**

```typescript
let schema = new ObjectSchema()
    .withRule(new PropertyComparisonRule("field1", "NE", "field2"));

schema.validate({ field1: 1, field2: 2 });       // Result: no errors
schema.validate({ field1: 1, field2: 1 });       // Result: field1 shall not be equal to field2
schema.validate({});                             // Result: no errors

```

### Constructors
Creates a new validation rule and sets its arguments.
See [ObjectComparator.compare](../object_comparator/#compare)

> `public` constructor(property1: string, operation: string, property2: string): [PropertiesComparisonRule]()

- **property1**: string - a name of the first property to compare.
- **operation**: string - a comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **property2**: string - a name of the second property to compare.

### Methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: any - a value to be validated.
- **results**: [ValidationResult](../validation_result - a list with validation results to add new results.


### See also
- #### [IValidationRule](../ivalidation_rule)