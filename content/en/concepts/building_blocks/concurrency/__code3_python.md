
```python
from pip_services3_components.lock import ILock


class MyComponent:
    _lock: ILock = None

    ...

    def process_my_object(self, correlation_id: str, object_id: str):
        # Acquire lock for 10 secs
        self._lock.acquire_lock(correlation_id, "mycomponent:" + object_id, 10000, 10000)
        try:
            ...
        finally:
            # Release lock
            self._lock.release_lock(correlation_id, "mycomponent:" + object_id)


```
