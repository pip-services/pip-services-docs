
```python
# Pre-requisites
from pip_services4_components.refer import Descriptor, IReferences, IReferenceable
from pip_services4_components.config import IConfigurable

# Service
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
```
