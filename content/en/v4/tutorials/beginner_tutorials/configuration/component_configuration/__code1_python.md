
See: [IConfigurable](../../../toolkit_api/python/commons/config/iconfigurable/)
```python
from abc import ABC
from pip_services4_components.config import ConfigParams

class IConfigurable(ABC):

    def configure(self, config: ConfigParams):
        raise NotImplementedError('Method from interface definition')
```
