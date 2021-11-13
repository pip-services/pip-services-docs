
```python
# Comparing 1 <= x <= 10 by using a list of rules
my_rules = [ValueComparisonRule("LTE", 10), ValueComparisonRule("GTE", 1)]
my_schema1 = Schema(rules=my_rules)

validate_schema1_1 = my_schema1.validate(0)

# Case 1: bad value
if len(validate_schema1_1) > 0:
    # Case: bad value
    print(validate_schema1_1[0].get_message())
    print(validate_schema1_1[0].get_code())
else:
    # Case: good value
    print("Value within range")

# Case 1: good value    
validate_schema1_2 = my_schema1.validate(5)

if len(validate_schema1_2) > 0:
    # Case: bad value
    print(validate_schema1_2[0].get_message())
    print(validate_schema1_2[0].get_code())
else:
    # Case: good value
    print("Value within range")
```
