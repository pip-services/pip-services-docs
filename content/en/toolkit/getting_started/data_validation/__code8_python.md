
```python
# Included rule - Case: include 1, 2, 3
from pip_services3_commons.validate import Schema,IncludedRule
schema = Schema().with_rule(IncludedRule(1, 2, 3))

# Case 1: good value
validation = schema.validate(2)
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())

# Case 2: bad value
validation = schema.validate(10)
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())
```
