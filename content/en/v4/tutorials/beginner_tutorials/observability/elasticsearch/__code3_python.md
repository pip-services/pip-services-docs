
```python
logger = ElasticSearchLogger()
logger.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
))
logger.open(ctx)
```
