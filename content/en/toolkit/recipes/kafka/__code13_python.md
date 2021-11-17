
```python
from pip_services3_kafka.queues import KafkaMessageQueue

queue = KafkaMessageQueue("myqueue")
queue.configure(ConfigParams.from_tuples(
    "topic", "mytopic",
    'connection.protocol', 'tcp',
    "connection.host", "localhost",
    "connection.port", 9092,
))

queue.open("123")
```
