
```python
controller = PrometheusMetricsController()

controller.configure(ConfigParams.from_tuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080,
        "prometheus_counters", counters
    ))
```
