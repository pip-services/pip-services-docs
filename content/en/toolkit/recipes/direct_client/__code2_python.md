
```python
# Pre-requisites

from pip_services3_rpc.clients import DirectClient
from pip_services3_commons.refer import Descriptor, IReferences, DependencyResolver
from pip_services3_commons.config import IConfigurable


# Direct client
class MyDirectClient(DirectClient):
    _dependencyResolver = DependencyResolver() 
        
    def __init__(self):
        super(MyDirectClient, self).__init__()
        self._controller: MyController = None
        self._dependencyResolver.put("controller", Descriptor("pip-services", "controller", "*", "*", "1.0"))
        
        
    def set_references(self, references: IReferences):
        self._dependencyResolver.set_references(references)
        self._controller = self._dependencyResolver.get_one_required("controller")
        
    def my_method(self):
        self._controller.my_method()

# Instantiation        
client = MyDirectClient()
```
