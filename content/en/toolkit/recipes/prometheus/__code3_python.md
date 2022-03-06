
```python
from pip_services3_commons.config import ConfigParams

mycomponent = MyComponentA()

counters = PrometheusCounters()
counters.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

counters.open("123")
```
