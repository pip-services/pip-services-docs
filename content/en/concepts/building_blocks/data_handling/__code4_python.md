
```python
from pip_services3_commons.data import PagingParams

paging = PagingParams(0, 100, True)

page = client.get_my_objects(filter, sorting, paging)

```
