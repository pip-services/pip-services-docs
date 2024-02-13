
```python
from pip_services3_components.state import IStateStore


class MyComponent:
    _store: IStateStore = None

    ...

    def do_something(self, correlation_id: str, object_id: str):
        # Get state from the store or create a new one if the state wasn't found
        state: MyState = self._store.load(correlation_id, "mycomponent:" + object_id)
        if state is not None: state = MyState()
        ...

        self._store.save(correlation_id, "mycomponent:" + object_id, state)


```
