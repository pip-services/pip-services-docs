
```python
from pip_services3_components.cache import ICache


class MyComponent:
    _cache: ICache = None

    ...

    def get_my_object_by_id(self, correlation_id: str, object_id: str) -> MyObject:
        result = self._cache.retrieve(correlation_id, "mycomponent:" + object_id)
        if result is not None:
            return result

        # Retrieve the object
        ...

        self._cache.store(correlation_id, "mycomponent:" + object_id, result, 1000)
        return result

```
