
```python
from pip_services4_kafka.connect import KafkaConnection
from pip_services4_components.config import ConfigParams

kc = KafkaConnection()
config = ConfigParams.from_tuples(
    'connection.host', 'localhost', 
    'connection.port', 9092
)

kc.configure(config)
kc.open(None)
```
