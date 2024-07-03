
```python
# Rule At least one exists - Case: field1, field2
from pip_services4_data.validate import Schema,AtLeastOneExistsRule
schema = Schema().with_rule(AtLeastOneExistsRule("field1", "field2"))

# Case 1: good value
validation = schema.validate({ 'field1': 1, 'field2': "A" })
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())

# Case 2: bad value
validation = schema.validate({ })
if len(validation) == 0:
    print("No errors")
else:
    print(validation[0].get_message())
    print(validation[0].get_code())

```
