
```python
# Comparing 1 <= x <= 10 by using a list of rules
my_rules = [ValueComparisonRule("LTE", 10), ValueComparisonRule("GTE", 1)]
schema = Schema(rules=my_rules)

validation = schema.validate(0)

# Case 1: bad value
if len(validation) > 0:
    # Case: bad value
    print(validation[0].get_message())
    print(validation[0].get_code())
else:
    # Case: good value
    print("Value within range")

# Case 2: good value    
validate_schema1_2 = schema.validate(5)

if len(validate_schema1_2) > 0:
    # Case: bad value
    print(validate_schema1_2[0].get_message())
    print(validate_schema1_2[0].get_code())
else:
    # Case: good value
    print("Value within range")

```
