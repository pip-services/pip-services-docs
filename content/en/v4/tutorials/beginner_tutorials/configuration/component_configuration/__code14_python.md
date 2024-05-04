
See: [YamlConfigReader](../../../toolkit_api/python/config/config/yaml_config_reader/)

```python
from pip_services4_config.config import YamlConfigReader

configReader = YamlConfigReader("config.yml")
parameters2 = ConfigParams.from_tuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader.read_config_("123", parameters2)    # Result: key1=1234;key2=ABCD
```
