
```python

from pip_services3_elasticsearch.log.ElasticSearchLogger import ElasticSearchLogger
from pip_services3_commons.config import ConfigParams

logger = ElasticSearchLogger()
logger.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
))

logger.set_level(5)

logger.info("123" , "My message")

```
