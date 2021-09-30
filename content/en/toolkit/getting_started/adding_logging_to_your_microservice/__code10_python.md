
```python

from pip_services3_aws.log.CloudWatchLogger import CloudWatchLogger
from pip_services3_commons.config import ConfigParams

logger = CloudWatchLogger()
logger.configure(ConfigParams.from_tuples(
    "stream", "mystream",
    "group", "mygroup",
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"
))

logger.set_level(5)

logger.info("123" , "My message")

```
