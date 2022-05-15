
```python
# Pre-requisites
from pip_services3_rpc.clients import DirectClient
from pip_services3_commons.refer import Descriptor, References, IReferences, IReferenceable, DependencyResolver
from pip_services3_commons.config import IConfigurable


# Direct client
class MyDirectClient(DirectClient):
    _dependencyResolver = DependencyResolver() 
        
    def __init__(self):
        self._controller: MyController = None
        self._dependencyResolver.put("controller", Descriptor("pip-services", "controller", "*", "*", "1.0"))
        super(MyDirectClient, self).__init__()
        
    def set_references(self, references: IReferences):
        self._dependencyResolver.set_references(references)
        self._controller = self._dependencyResolver.get_one_required("controller")
        
    def my_method(self):
        self._controller.my_method()

# Instantiation        
client = MyDirectClient()

# Controller
class MyController(IConfigurable, IReferenceable):

    def __init__(self):
        pass

    def configure(self, config):
        pass

    def set_references(self, references: IReferences):
        pass

    def my_method(self):
        print("Hello world")

# Instantiation 
myController = MyController()

# Reference setting
client.set_references(References.from_tuples(
    Descriptor("pip-services", "controller", "controller", "default", "1.0"), myController))

# Calling "my_method"
client.my_method()
```
