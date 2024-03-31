
```python
from pip_services3_commons.random import RandomText

value1 = RandomText.adjective() # Possible result: Small
value2 = RandomText.color() # Possible result: White
value3 = RandomText.email() # Possible result: NickStay@Hotel.com
value4 = RandomText.full_name() # Possible result; Dr. Pamela Smith
value5 = RandomText.noun() # Possible result: Car
value6 = RandomText.phone() # Possible result: (147) 371-7084
value7 = RandomText.phrase(3) # Possible result: Large
value8 = RandomText.name()      # Possible result: Hurry Johns
value9 = RandomText.verb()      # Possible result: Lay
value10 = RandomText.text(5,20)    # Possible result: Small carmack large
```

