
```python
from pip_services4_components.context import Context

context_data = {
  "traceId": "123",
}

my_context = Context(context_data)

messageQueue = MemoryMessageQueue()
messageQueue.open(my_context) 
```
