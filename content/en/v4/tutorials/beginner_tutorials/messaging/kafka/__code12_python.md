
```python
from pip_services4_kafka.connect import KafkaConnection
from pip_services4_components.config import ConfigParams
from pip_services4_kafka.connect import IKafkaMessageListener

kc = KafkaConnection()
config = ConfigParams.from_tuples(
    'connection.host', 'localhost',
    'connection.port', 9092
)

kc.configure(config)
kc.open(None)

kc.create_queue("my_queueA")
kc.create_queue("my_queueB")
kc.create_queue("my_queueC")

list_of_messages1 = [{'value': "message 1"}, {'value': "message 2"}]
list_of_messages2 = [{'value': "message 3"}, {'value': "message 4"}]
list_of_messages3 = [{'value': "message 5"}, {'value': "message 6"}]

kc.publish("my_topicA", list_of_messages1, {})
kc.publish("my_topicB", list_of_messages2, {})
kc.publish("my_topicC", list_of_messages3, {})

class MyListener(IKafkaMessageListener):
    def on_message(self, topic, partition, message):
        print(message.value().decode('utf-8'), message.offset())

my_listener = MyListener()

kc.subscribe("my_topicA", None, {}, my_listener)
kc.subscribe("my_topicB", None, {}, my_listener)
kc.subscribe("my_topicC", None, {}, my_listener)

kc.close(None)

print("Execution completed!")
```
