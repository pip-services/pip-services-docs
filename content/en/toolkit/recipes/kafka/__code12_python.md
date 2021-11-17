
```python
from pip_services3_kafka.connect import KafkaConnection
from pip_services3_commons.config import ConfigParams
from pip_services3_kafka.connect import IKafkaMessageListener
import threading

kc = KafkaConnection()
config = ConfigParams.from_tuples( 'connection.host', 'localhost', 'connection.port', 9092)

kc.configure(config)
kc.open(None)

kc.create_queue("my_queueA")
kc.create_queue("my_queueB")
kc.create_queue("my_queueC")


list_of_messages1 = ["message 1", "message 2"]
list_of_messages2 = ["message 3", "message 4"]
list_of_messages3 = ["message 5", "message 6"]

kc.publish("my_topicA", list_of_messages1,{})
kc.publish("my_topicB", list_of_messages2,{})
kc.publish("my_topicC", list_of_messages3,{})

class my_listener(IKafkaMessageListener):
    def on_message(topic, partition, message):
        
        print(message.value().decode('utf-8'), message.offset())

kc.subscribe("my_topicA", None, {}, my_listener)        
kc.subscribe("my_topicB", None, {}, my_listener)         
kc.subscribe("my_topicC", None, {}, my_listener) 

print("Execution completed!")
```
