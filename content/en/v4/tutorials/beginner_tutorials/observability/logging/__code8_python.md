
```python
from pip_services4_components.context import IContext
from pip_services4_datadog.log import DataDogLogger
from pip_services4_components.config import ConfigParams

logger = DataDogLogger()

logger.configure(ConfigParams.from_tuples(
   "credential.access_key", "827349874395872349875493"
))

logger.set_level(5)

logger.open("123")

context = IContext

context={}

logger.info(context , "My message")
```
