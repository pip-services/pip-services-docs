
```python

references = References.from_tuples(
	111, Worker1('worker1'),
	222, Worker2('worker2')
)

controller = SimpleController()
controller.set_references(references)
controller.greeting("world")
controller.unset_references()
controller = None


```

