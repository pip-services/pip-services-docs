
```python
from pip_services4_prometheus.controllers import PrometheusMetricsController
from pip_services4_prometheus.count import PrometheusCounters
from pip_services4_components.config import ConfigParams

controller = PrometheusMetricsController()

controller.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

counters = PrometheusCounters()
counters.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8081
))
```
