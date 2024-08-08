
```python
from pip_services4_components.config import ConfigParams

mycomponent = MyComponentA()

counters = PrometheusCounters()
counters.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

counters.open(None)
```
