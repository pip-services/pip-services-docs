
```python
# String converter

from pip_services3_commons.convert import StringConverter
import datetime

value1 = StringConverter.to_string(123.456)     # Returns '123.456'
value2 = StringConverter.to_string(True)        # Returns 'True'
value3 = StringConverter.to_string(datetime.datetime(2018,10,1))       # Returns '2018-10-01T00:00:00Z'
value4 = StringConverter.to_string(["a","b","c"])     # Returns 'a,b,c'
value5 = StringConverter.to_string(None)              # Returns ""
value6 = StringConverter.to_nullable_string(None)     # Returns None
value7 = StringConverter.to_string_with_default(None,"my default")     # Returns 'my default' 
```
