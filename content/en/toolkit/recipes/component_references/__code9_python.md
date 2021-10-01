
```python
class SimpleController(IConfigurable, IReferenceable, IUnreferenceable):
	_depedency_resolver = DependencyResolver.from_tuples(
    	"worker", Descriptor("*", "worker", "*", "*", 1.0)
  	)

  	def configure(self, config):
    	self._depedency_resolver.configure(config);
  
  	def set_references(self, references):
    	self._depedency_resolver.set_references(references)
    	self._worker = self._depedency_resolver.get_one_required("worker")
  
  	def unset_references():
    	self._dependency_resolver.unsetReferences()
  
	...

references = References.from_tuples(
	Descriptor("sample", "worker", "worker1", "111", "1.0"), Worker1(),
	Descriptor("sample", "worker", "worker2", "222", "1.0"), Worker2()
)
config = ConfigParams.from_tuples(
	"dependencies.worker", "*:worker:worker1:111:1.0"
)
controller = SimpleController()
controller.configure(config)
controller.setReferences(references)
print(controller.greeting("world"))
controller.unset_references()
controller = None


```

