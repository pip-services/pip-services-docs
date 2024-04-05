
```python
# Or rule - Case x < 1 OR x > 10
from pip_services3_commons.validate import Schema,OrRule
schema = Schema().with_rule(OrRule(ValueComparisonRule("LT", 1), ValueComparisonRule("GT", 10)))

# Case 1: good value
validation = schema.validate(0)
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())

# Case 2: bad value
validation = schema.validate(5)
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())

```
