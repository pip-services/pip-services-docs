
```python
from pip_services4_persistence.persistence import JsonFilePersister
from pip_services4_components.config import ConfigParams

persister = JsonFilePersister()
my_config = ConfigParams.from_tuples("path", "data.json")
persister.configure(my_config)

```
