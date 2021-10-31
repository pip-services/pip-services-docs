
```python
# Float converter
from pip_services3_commons.convert import FloatConverter


value1 = FloatConverter.to_float("123.456")          # Returns 123.456
value2 = FloatConverter.to_float("ABC")              # Returns 0
value3 = FloatConverter.to_float_with_default("123.456", "0.0")       # Returns 123.456
value4 = FloatConverter.to_float_with_default("ABC", "0.0")           # Returns 0.0
value5 = FloatConverter.to_nullable_float("123.456") # Returns 123.456
value6 = FloatConverter.to_nullable_float("ABC")     # Returns None
value7 = FloatConverter.to_nullable_float(True)      # Returns 1

```
