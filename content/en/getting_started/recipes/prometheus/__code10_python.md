
```python
service = PrometheusMetricsService()

service.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))
```
