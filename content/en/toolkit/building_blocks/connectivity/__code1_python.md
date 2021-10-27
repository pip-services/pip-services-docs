
```python
from pip_services3_commons.config import ConfigParams, IConfigurable
from pip_services3_components.connect import ConnectionParams


class MyPersistence(IConfigurable):
    _host: str
    _port: int

    def configure(self, config: ConfigParams):
        connection = ConnectionParams.from_config(config.get_section("connection"))
        self._host = connection.get_host()
        self._port = connection.get_port_with_default(27017)


```
