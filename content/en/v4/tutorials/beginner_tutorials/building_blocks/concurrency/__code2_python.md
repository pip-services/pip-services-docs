
```python
from pip_services4_logic.cache import ICache
from pip_services4_components.context import IContext

class MyObject:
    def myMethod():
        return "some result"

class MyComponent:
    _cache: ICache = None

    #...

    def get_my_object_by_id(self, context: IContext, object_id: str) -> MyObject:
        result = self._cache.retrieve(context, "mycomponent:" + object_id)
        if result is not None:
            return result

        # Retrieve the object
        #...

        self._cache.store(context, "mycomponent:" + object_id, result, 1000)
        return result

```
