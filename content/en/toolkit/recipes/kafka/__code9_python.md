
```python
from pip_services3_kafka.connect import IKafkaMessageListener

class my_listener(IKafkaMessageListener):
    
    def on_message(topic, partition, message):
        print(message.value().decode('utf-8'), message.offset())
        
kc.subscribe("my_topicA", None, {}, my_listener)
```
