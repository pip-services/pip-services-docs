
```python
from pip_services4_logic.lock import ILock
from pip_services4_components.context import IContext

class MyComponent:
    _lock: ILock = None

    ...

    def process_my_object(self, context: IContext, object_id: str):
        # Acquire lock for 10 secs
        self._lock.acquire_lock(context, "mycomponent:" + object_id, 10000, 10000)
        try:
            ...
        finally:
            # Release lock
            self._lock.release_lock(context, "mycomponent:" + object_id)



```
