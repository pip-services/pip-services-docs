
```python
# Double converter

from pip_services3_commons.convert import DoubleConverter

value1 = DoubleConverter.to_double("123.456")                   # Returns 123.456
value2 = DoubleConverter.to_double("ABC")                       # Returns 0
value3 = DoubleConverter.to_double_with_default("123.456", 0)   # Returns 123.456
value4 = DoubleConverter.to_double_with_default("ABC", 0)       # Returns 0
value5 = DoubleConverter.to_nullable_double("123.456")       # Returns 123.456
value6 = DoubleConverter.to_nullable_double("ABC")           # Returns None
value7 = DoubleConverter.to_nullable_double(True)            # Returns 1
```
