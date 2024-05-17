
```python
# Pre-requisites
import time
from threading import Thread
from pip_services4_messaging.queues import IMessageReceiver, MemoryMessageQueue, MessageEnvelope

from pip_services4_components.context import IContext

my_context = IContext()

# Message receiver
class MyMessageReceiver(IMessageReceiver):
    def receive_message(self, envelop, queue):
        print("Received message: " + envelop.get_message_as_string())

# Message queue
messageQueue = MemoryMessageQueue()
messageQueue.open(my_context)

# Listener
Thread(target=messageQueue.listen, args=(my_context, MyMessageReceiver()), daemon=True).start()

# Send message
messageQueue.send(my_context, MessageEnvelope(None, "mymessage", "ABC")) 
time.sleep(0.1)  # wait message

# Close message queue
messageQueue.close(my_context)

```
