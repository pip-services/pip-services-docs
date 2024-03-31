
```python
from pip_services4_data.random import RandomFloat

# Random value between 5 and 10
value1 = RandomFloat.next_float(5, 10)     # Possible result: 8.109282778264653

# Random value lower than 10
value2 = RandomFloat.next_float(10)        # Possible result: 5.281760648272185

# Random value
value3 = RandomFloat.update_float(10, 3)   # Possible result: 7.731874405844179
```

