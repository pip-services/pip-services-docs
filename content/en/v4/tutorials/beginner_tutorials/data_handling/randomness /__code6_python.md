
```python
from pip_services4_data.random import RandomInteger

# Random value between 5 and 10
value1 = RandomInteger.next_integer(5, 10)     # Possible result: 5

# Random value lower than 10
value2 = RandomInteger.next_integer(10)        # Possible result: 4

# Random value
value3 = RandomInteger.update_integer(10, 3)   # Possible result: 12
```

