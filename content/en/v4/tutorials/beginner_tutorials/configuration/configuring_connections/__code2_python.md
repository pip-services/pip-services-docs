
```python
from pip_services4_components.config import ConfigParams

config = ConfigParams.from_tuples("protocol",  "http34343", "host", "host123", "uri", "uri321")
connection = ConnectionParams(config) # Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}
```
