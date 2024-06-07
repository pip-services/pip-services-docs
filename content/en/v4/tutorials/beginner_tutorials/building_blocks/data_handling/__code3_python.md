
```python
from pip_services4_data.query import SortParams, SortField

sorting = SortParams(SortField("key1=true", "key2=false"), True)

values = client.get_my_objects(filter, sorting)

```
