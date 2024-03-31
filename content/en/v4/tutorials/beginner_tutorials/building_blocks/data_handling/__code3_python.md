
```python
from pip_services3_commons.data import SortParams

sorting = SortParams.from_tuples(
  'key1', True,
  'key2', False
)

values = client.get_my_objects(filter, sorting)

```
