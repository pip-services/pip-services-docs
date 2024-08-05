
```python
from pip_services4_kafka.connect import IKafkaMessageListener

class MyListener(IKafkaMessageListener):
    
    def on_message(topic, partition, message):
        print(message.value().decode('utf-8'), message.offset())

my_listener = MyListener()
kc.subscribe("my_topicA", None, {}, my_listener)
```
