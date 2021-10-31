
```python
# Long converter

from pip_services3_commons.convert import LongConverter

value1 = LongConverter.to_long("123.456")            # Returns 123
value2 = LongConverter.to_long("ABC")            # Returns 0
value3 = LongConverter.to_nullable_long("123.456")   # Returns 123
value4 = LongConverter.to_nullable_long("ABC")       # Returns None
value5 = LongConverter.to_nullable_long(True)        # Returns 1
value6 = LongConverter.to_long_with_default("123.456", "0");  # Returns 123
value7 = LongConverter.to_long_with_default("ABC", 0);        # Returns 0
```
