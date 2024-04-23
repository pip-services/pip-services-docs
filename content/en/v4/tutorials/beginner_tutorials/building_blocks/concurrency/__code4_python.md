
```python
from pip_services4_logic.lock import ILock


class MyComponent:
    _lock: ILock = None

    ...

    def process_my_object(self, correlation_id: str, object_id: str):
        # Try to acquire lock for 10 secs
        if not self._lock.try_acquire_lock(correlation_id, "mycomponent:" + object_id, 10000):

            # Other instance already executing that transaction
            return

        ...


```
