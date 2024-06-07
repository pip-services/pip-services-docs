
```python
from pip_services4_data.query import FilterParams

filter = FilterParams.from_tuples(
    'key1', 'ABC',
    'key2', 123
)

values = client.get_my_objects(filter)

```
