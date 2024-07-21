
```python
# Pre-requisites
from pip_services4_rpc.clients import DirectClient
from pip_services4_components.refer import Descriptor, References, IReferences, IReferenceable, DependencyResolver
from pip_services4_components.config import IConfigurable


# Direct client
class MyDirectClient(DirectClient):
    _dependencyResolver = DependencyResolver() 
        
    def __init__(self):
        self._service: MyService = None
        self._dependencyResolver.put("service", Descriptor("pip-services", "service", "*", "*", "1.0"))
        super(MyDirectClient, self).__init__()
        
    def set_references(self, references: IReferences):
        self._dependencyResolver.set_references(references)
        self._service = self._dependencyResolver.get_one_required("service")
        
    def my_method(self):
        self._service.my_method()

# Instantiation        
client = MyDirectClient()

# Controller
class MyService(IConfigurable, IReferenceable):

    def __init__(self):
        pass

    def configure(self, config):
        pass

    def set_references(self, references: IReferences):
        pass

    def my_method(self):
        print("Hello world")

# Instantiation 
myService = MyService()

# Reference setting
client.set_references(References.from_tuples(
    Descriptor("pip-services", "service", "service", "default", "1.0"), myService))

# Calling "my_method"
client.my_method()
```
