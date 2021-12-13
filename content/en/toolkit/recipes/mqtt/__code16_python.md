
```python
# Pre-requisites
from pip_services3_mqtt.queues import MqttMessageQueue
from pip_services3_commons.config import ConfigParams
from pip_services3_messaging.queues import MessageEnvelope

# Component creation and configuration
queue = MqttMessageQueue() 

queue.configure(ConfigParams.from_tuples(
     "topic", "mytopic", # set topic
    'connection.protocol', 'mqtt',
    "connection.host", "localhost",
    "connection.port", 1883,
    'options.autosubscribe', True, # autosubscription on the topic
    'options.serialize_envelope', True # converts object into musquitto values 
))

# Connection
queue.open("123")

# Send a message
queue.send("123", MessageEnvelope(None, "mymessage", "ABC1234"))

# Receive a message
message = queue.receive("123", 10000)
print(message.get_message_as_string ()) # Prints 'ABC1234'

# Close the connection
queue.close(None)
```
