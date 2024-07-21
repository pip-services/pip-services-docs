
```python
# Pre-requisites

from pip_services4_rpc.clients import DirectClient
from pip_services4_components.refer import Descriptor, IReferences, DependencyResolver
from pip_services4_components.config import IConfigurable


# Direct client
class MyDirectClient(DirectClient):
    _dependencyResolver = DependencyResolver() 
        
    def __init__(self):
        super(MyDirectClient, self).__init__()
        self._service: MyController = None
        self._dependencyResolver.put("service", Descriptor("pip-services", "service", "*", "*", "1.0"))
        
        
    def set_references(self, references: IReferences):
        self._dependencyResolver.set_references(references)
        self._service = self._dependencyResolver.get_one_required("service")
        
    def my_method(self):
        self._service.my_method()

# Instantiation        
client = MyDirectClient()

```
