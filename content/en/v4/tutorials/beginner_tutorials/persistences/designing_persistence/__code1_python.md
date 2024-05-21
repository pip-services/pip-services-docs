
```python
from abc import ABC
from typing import Optional, Any, List
from typing import TypeVar

from pip_services4_data.data import IStringIdentifiable
from pip_services4_components.config import ConfigParams
from pip_services4_data.query import SortParams, PagingParams, DataPage, FilterParams
from pip_services4_commons.data import AnyValueMap
from pip_services4_mysql.persistence import IdentifiableMySqlPersistence
from pip_services4_postgres.persistence import IdentifiablePostgresPersistence
```
