
```python
from pip_services3_commons.random import RandomDouble

# Random value between 5 and 10
value1 = RandomDouble.next_double(5, 10)      # Possible result: 7.3252274575446155

# Random value lower than 10
value2 = RandomDouble.next_double(10)      # Possible result: 8.104104435251225

# Random value 
value3 = RandomDouble.update_double(10, 5)      # Possible result: 8.051623143638789
```
