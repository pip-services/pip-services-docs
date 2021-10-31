
```python
# Long converter

from pip_services3_commons.convert import LongConverter
from datetime import date

value1 = LongConverter.to_long("123.456")            # returns 123
value2 = LongConverter.to_long("ABC")            # returns 0
value3 = LongConverter.to_nullable_long("123.456")   # returns 123
value4 = LongConverter.to_nullable_long("ABC")       # returns None
value5 = LongConverter.to_nullable_long(True)        # returns 1
value6 = LongConverter.to_long_with_default("123.456", "0");  # returns 123
value7 = LongConverter.to_long_with_default("ABC", 0);        # returns 0
```
