
```python
from pip_services3_commons.config import ConfigParams

persister = JsonFilePersister()
my_config = ConfigParams.from_tuples("path", "E:\data3.json")
persister.configure(my_config)
```
