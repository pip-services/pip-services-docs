
```python
from pip_services4_components.context import IContext

my_context = IContext()

messageQueue = MemoryMessageQueue()
messageQueue.open(my_context)   
```
