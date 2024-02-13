
```python
from pip_services3_commons.config import ConfigParams

counters = PrometheusCounters()
counters.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

counters.open("123")

mycomponent = MyComponentA(counters)
```
