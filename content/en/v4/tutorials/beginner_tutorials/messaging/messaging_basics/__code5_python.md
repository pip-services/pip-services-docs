
```python
from threading import Thread

Thread(target=messageQueue.listen, args=(my_context, MyMessageReceiver()), daemon=True).start()
```
