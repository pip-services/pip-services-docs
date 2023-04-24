
```python
# Date time converter

from pip_services3_commons.convert import DateTimeConverter
from datetime import date

value0 = DateTimeConverter.to_datetime("2021-11-09T17:24:50.750Z")              # Returns 2021-11-09 17:24:50.75
value1 = DateTimeConverter.to_nullable_datetime("ABC")                          # Returns None
value2 = DateTimeConverter.to_nullable_datetime("2021-11-09T17:24:50.750Z")     # Returns 2021-11-09 17:24:50.75
value3 = DateTimeConverter.to_nullable_datetime(12345657755000)                 # Returns 2361-03-21 16:22:35
value4 = DateTimeConverter.to_datetime_with_default("ABC", date.today())        # Returns current datetime
value4 = DateTimeConverter.to_datetime_with_default("2021-11-09T17:24:50.750Z", date.today())   # Returns 2021-11-09 17:24:50.75
```
