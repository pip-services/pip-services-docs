
```python
from pip_services4_elasticsearch.log import ElasticSearchLogger
from pip_services4_components.config import ConfigParams

logger = ElasticSearchLogger()
logger.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
))

logger.set_level(5)

logger.open("123")

context = IContext

context={}
logger.info(context , "My message")
```
