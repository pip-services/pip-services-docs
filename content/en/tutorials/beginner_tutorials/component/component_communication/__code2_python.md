
```python
from pip_services3_prometheus.services import PrometheusMetricsService
from pip_services3_commons.config import ConfigParams

service = PrometheusMetricsService()

service.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))
```
