
```python
# NotRule - Case: value different from 1
from pip_services3_commons.validate import Schema,NotRule
schema = Schema().with_rule(NotRule(ValueComparisonRule("EQ", 1)))

# Case 1: good value
validation = schema.validate(2)
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())

# Case 2: bad value
validation = schema.validate(1)
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())
```
