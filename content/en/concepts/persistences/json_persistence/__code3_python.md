
```python
from pip_services3_data.persistence import JsonFilePersister
from pip_services3_commons.config import ConfigParams

persister = JsonFilePersister()
my_config = ConfigParams.from_tuples("path", "E:\data.json")
persister.configure(my_config)
```
