
```python
class SimpleController(IReferenceable, IUnreferenceable):
	...
  	def set_references(self, references):
        self._worker = self._references.get_one_required(
    	    Descriptor("*", "worker", "worker1", "*", "1.0")
        )
  
	...

references = References.from_tuples(
	Descriptor("sample", "worker", "worker1", "111", "1.0"), Worker1(),
	Descriptor("sample", "worker", "worker2", "222", "1.0"), Worker2()
)
controller = SimpleController()
controller.set_references(references)
controller.greeting("world")
controller.unset_references();
controller = None

```

