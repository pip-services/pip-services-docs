
```python
from pip_services4_components.refer import References

references = References.from_tuples(
	111, Worker1(),
	222, Worker2()
)

controller = SimpleService()
controller.set_references(references)
controller.greeting("world")
controller.unset_references()
controller = None

```
