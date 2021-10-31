
```python
# Date time converter

from pip_services3_commons.convert import DateTimeConverter
from datetime import date

value0 = DateTimeConverter.to_datetime("2018-01-01T11:30:00.0")     # Returns 2018-01-01 11:30:00+00:00
value1 = DateTimeConverter.to_nullable_datetime("ABC")              # Returns None
value2 = DateTimeConverter.to_nullable_datetime("2018-01-01T11:30:00.0")    # Returns 2018-01-01 11:30:00+00:00
value3 = DateTimeConverter.to_nullable_datetime(12345657755)        # Returns 2361-03-21 15:22:35+00:00
value4 = DateTimeConverter.to_datetime_with_default("ABC", date.today())    # Returns 2021-09-11 00:00:00+00:00
value4 = DateTimeConverter.to_datetime_with_default("2018-01-01T11:30:00.0", date.today())    # Returns 2018-01-01 11:30:00+00:00
```
