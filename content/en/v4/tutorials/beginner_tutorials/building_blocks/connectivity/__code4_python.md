
```python
from pip_services4_components.config import IConfigurable, ConfigParams
from pip_services4_components.refer import IReferenceable, IReferences
from pip_services4_config.connect import ConnectionResolver


class MyPersistence(IConfigurable, IReferenceable):
    _connectionResolver = ConnectionResolver()
    _host: str
    _port: int

    def configure(self, config: ConfigParams):
        self._connectionResolver.configure(config)

    def set_references(self, refs: IReferences):
        self._connectionResolver.set_references(refs)

        connection = self._connectionResolver.resolve(None)
        self._host = connection.get_host()
        self._port = connection.get_port_with_default(27017)
```
