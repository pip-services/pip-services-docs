
See: [JsonConfigReader](../../../toolkit_api/python/config/config/json_config_reader/)

```python
from pip_services4_config.config import JsonConfigReader

configReader = JsonConfigReader("config.json")
parameters = ConfigParams.from_tuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader.read_config_("123", parameters)    # Result: key1=123;key2=ABC
```
