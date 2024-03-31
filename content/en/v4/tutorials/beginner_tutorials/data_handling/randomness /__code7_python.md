
```python
from pip_services4_data.random import RandomString

value1 = RandomString.distort("hello John") # Possible result: Hello john
value2 = RandomString.next_alpha_char() # Possible result: C
value3 = RandomString.next_string(5,10) # Possible result .h*_N9}
value4 = RandomString.pick(["A","B","C", "D", "E"]) # Possible result: c
value5 = RandomString.pick_char("Jonathan") # Possible result: n
```

