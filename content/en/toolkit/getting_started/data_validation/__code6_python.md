
```python
# AndRule - Case:  1<= x <= 10
from pip_services3_commons.validate import Schema,AndRule
schema = Schema().with_rule(AndRule(ValueComparisonRule("GTE", 1), ValueComparisonRule("LTE", 10)))

# Case 1: good value
validation = schema.validate(1)
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())

# Case 2: bad value
validation = schema.validate(12)
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())
```
