
```python

from pip_services3_datadog.log.DataDogLogger import DataDogLogger
from pip_services3_commons.config import ConfigParams

logger = DataDogLogger()

logger.configure(ConfigParams.from_tuples(
   "credential.access_key", "827349874395872349875493"
))

logger.set_level(5)

logger.info("123" , "My message")

```
