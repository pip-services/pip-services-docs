
```python
from pip_services4_data.validate import Schema, ValueComparisonRule

# Case x < 1
schema = Schema().with_rule(ValueComparisonRule("LT", 1))

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
