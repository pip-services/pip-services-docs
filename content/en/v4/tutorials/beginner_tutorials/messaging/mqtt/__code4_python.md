
```python
from pip_services4_components.config import ConfigParams

queue.configure(ConfigParams.from_tuples(
    "topic", "mytopic",                 # set topic
    'connection.protocol', 'mqtt',
    "connection.host", "localhost",
    "connection.port", 1883,
    'options.qos', '1',                 # sets the qos level to 'At least once'
    'options.autosubscribe', True,      # autosubscription on the topic
    'options.serialize_envelope', True  # converts object into mosquitto values 
))
```
