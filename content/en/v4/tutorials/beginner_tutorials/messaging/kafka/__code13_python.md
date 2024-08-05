
```python

from pip_services4_kafka.queues import KafkaMessageQueue

queue = KafkaMessageQueue()
queue.configure(ConfigParams.from_tuples(
    "topic", "mytopic",
    'connection.protocol', 'tcp',
    "connection.host", "localhost",
    "connection.port", 9092,
    "options.autosubscribe", True
))

queue.open(None)
```
