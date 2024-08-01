
```python
from typing import Optional, List
from pip_services4_components.context import IContext
from pip_services4_data.query import SortParams

def get_list_by_filter(self, context: Optional[IContext], filter: FilterParams, sort: SortParams) -> List[MyData]:
         return super().get_list_by_filter(trace_id, self._compose_filter(filter), None, self._compose_sort(sort))
```
