
```python
from pip_services4_components.config import ConfigParams

config = ConfigParams.from_tuples("connection.protocol",  "http34343", 
                                   "connection.host", "host123", 
                                   "connection.uri", "uri321")
connection = ConnectionParams.from_config(config) # Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}
```
