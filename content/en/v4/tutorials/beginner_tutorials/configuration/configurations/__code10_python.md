
```python
from pip_services4_components.config import ConfigParams

additional_config1 = ConfigParams.from_tuples("my_store1.user", "jdoe",
                                              "my_store1.password", "pass123",
                                              "my_store1.pin", "321")

additional_config2 = ConfigParams.from_tuples("my_store2.user", "David",
                                              "my_store2.password", "another_pass",
                                              "my_store2.pin", "0000")

additional_config3 = ConfigParams.from_tuples('param1', 'value1')

config = ConfigParams.merge_configs(additional_config1, additional_config2, additional_config3)

config

```
