
```python
# Find out if it contains a value
value = AnyValueArray([1, "123.456", "2018-01-01"])

value.contains(1) # Returns True

from pip_services3_commons.convert import TypeCode
result1 = value.contains_as_type(TypeCode.Integer, 1)   # Returns True
```
