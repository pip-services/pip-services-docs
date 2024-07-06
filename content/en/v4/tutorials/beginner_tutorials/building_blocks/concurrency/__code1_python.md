
```python
from pip_services4_logic.state import IStateStore


class MyComponent:
    _store: IStateStore = None

    ...

    def do_something(self, context: IContext, object_id: str):
        # Get state from the store or create a new one if the state wasn't found
        state: MyState = self._store.load(context, "mycomponent:" + object_id)
        if state is not None: state = MyState()
        ...

        self._store.save(context, "mycomponent:" + object_id, state)

```
