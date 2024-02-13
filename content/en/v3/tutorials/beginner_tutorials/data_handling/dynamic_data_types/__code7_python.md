
```python
value = AnyValue("123.456")
value2 = value.clone()

result1 = value.equals(value2)                           # Returns True

from pip_services3_commons.convert import TypeCode 
result2 = value.equals_as_type(TypeCode.Object, value2)  # Returns True
```
