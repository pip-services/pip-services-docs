
```python
import threading
import time
from typing import List, Optional
from pip_services4_components.config import ConfigParams
from pip_services4_components.run import ICleanable
from pip_services4_messaging.queues import IMessageReceiver, MessageEnvelope, IMessageQueue
from pip_services4_kafka.queues import KafkaMessageQueue

class MyMessageReceiver(IMessageReceiver, ICleanable):

    def __init__(self):
        self.__messages: List[MessageEnvelope] = []
        self.__lock = threading.Lock()

    @property
    def messages(self) -> List[MessageEnvelope]:
        return self.__messages

    @property
    def message_count(self) -> int:
        return len(self.__messages)

    def receive_message(self, message: MessageEnvelope, queue: IMessageQueue):
        with self.__lock:
            self.__messages.append(message)

    def clear(self, correlation_id: Optional[str]):
        with self.__lock:
            self.__messages = []
                      
queue = KafkaMessageQueue()
queue.configure(ConfigParams.from_tuples(
    "topic", "mytopic2",
    'connection.protocol', 'tcp',
    "connection.host", "localhost",
    "connection.port", 9092,
    "options.autosubscribe", True
))
queue.open(None)

message_receiver = MyMessageReceiver()
queue.begin_listen(None, message_receiver)

envelope1 = MessageEnvelope(ctx, "Test", "Test message")
queue.send(None, envelope1)

# await message
for i in range(15):
    if len(message_receiver.messages) > 0:
        break
    time.sleep(0.5)

envelope2 = message_receiver.messages[0]

print(envelope1.message.decode('utf-8') == envelope2.message.decode('utf-8'))

queue.end_listen(None)

queue.close(None)

```
