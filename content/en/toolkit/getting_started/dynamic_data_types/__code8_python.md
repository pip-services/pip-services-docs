
```python
value = AnyValue("123.456")
value7 = value.clone()

result1 = value.equals(value7)                           # Returns True

from pip_services3_commons.convert import TypeCode 
result2 = value.equals_as_type(TypeCode.Object, value7)  # Returns True
```
