
```python
from pip_services4_components.refer import IReferenceable, References, Descriptor

class SimpleService(IReferenceable, IUnreferenceable):
    
	#...
    def set_references(self, references):
        self._worker = self._references.get_one_required(
    	    Descriptor("*", "worker", "worker1", "*", "1.0")
        )
  
	#...

references = References.from_tuples(
	Descriptor("sample", "worker", "worker1", "111", "1.0"), Worker1(),
	Descriptor("sample", "worker", "worker2", "222", "1.0"), Worker2()
)
service = SimpleService()
service.set_references(references)
service.greeting("world")
service.unset_references();
service = None
```
