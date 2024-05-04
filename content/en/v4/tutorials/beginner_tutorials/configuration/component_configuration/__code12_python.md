
See: [MemoryConfigReader](../../../toolkit_api/python/config/config/memory_config_reader/), [ConfigReader](../../../toolkit_api/python/config/config/config_reader/)

```python
import sys

from pip_services4_config.config import MemoryConfigReader

config = ConfigParams.from_tuples(
	"connection.host", "localhost",
	"connection.port", "8080"
)
config_reader = MemoryConfigReader()
config_reader.configure(config)
parameters = ConfigParams.from_value(sys.argv)
config_reader.read_config_("123", parameters) # Result: connection.host=localhost;connection.port=8080
```
