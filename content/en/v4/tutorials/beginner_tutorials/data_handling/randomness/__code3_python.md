```python
from pip_services4_data.random import RandomDateTime
import datetime

value1 = RandomDateTime.next_date(datetime.datetime(2010,1,1))   # Possible result: 2002-01-05 00:00:00
value2 = RandomDateTime.next_date(datetime.datetime(2010,1,1), datetime.datetime(2015,1,1))   # Possible result: 2008-01-03
value3 = RandomDateTime.next_datetime(datetime.datetime(2017,1,1))   # Possible result: 2007-03-11 11:20:32
value4 = RandomDateTime.update_datetime(datetime.datetime(2010,1,2)) # Possible result: 2010-02-05 11:33:23
``
