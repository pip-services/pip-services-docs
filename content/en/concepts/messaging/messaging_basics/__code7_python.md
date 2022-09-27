
```python
# Pre-requisites
import time
from threading import Thread
from pip_services3_messaging.queues import IMessageReceiver, MemoryMessageQueue, MessageEnvelope

# Message receiver
class MyMessageReceiver(IMessageReceiver):
    def receive_message(self, envelop, queue):
        print("Received message: " + envelop.get_message_as_string())

# Message queue
messageQueue = MemoryMessageQueue()
messageQueue.open("123")

# Listener
Thread(target=messageQueue.listen, args=("123", MyMessageReceiver()), daemon=True).start()

# Send message
messageQueue.send("123", MessageEnvelope(None, "mymessage", "ABC")) 
time.sleep(0.1)  # wait message

# Close message queue
messageQueue.close('123')

```
