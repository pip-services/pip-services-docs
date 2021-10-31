
```python
# IntegerConverter
from pip_services3_commons.convert import IntegerConverter

value1 = IntegerConverter.to_integer("123.456")                   # Returns 123
value2 = IntegerConverter.to_integer("ABC")                   # Returns 0
value3 = IntegerConverter.to_nullable_integer("123.456")      # Returns 123
value4 = IntegerConverter.to_nullable_integer("ABC")          # Returns None
value5 = IntegerConverter.to_nullable_integer(True)           # Returns 1
value6 = IntegerConverter.to_integer_with_default("ABC", 123) # Returns 123  
value7 = IntegerConverter.to_integer_with_default("123.456", 123) # Returns 123  

```
