
```python
from pip_services4_data.query import PagingParams

paging = PagingParams(0, 100, True)

page = client.get_my_objects(filter, sorting, paging)

```
