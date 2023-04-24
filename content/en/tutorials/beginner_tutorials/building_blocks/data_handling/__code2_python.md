
```python
from pip_services3_commons.data import FilterParams

filter = FilterParams.from_tuples(
    'key1', 'ABC',
    'key2', 123
)

values = client.get_my_objects(filter)

```
