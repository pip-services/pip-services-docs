
```python
# Pre-requisites
from pip_services3_commons.refer import Descriptor, IReferences, IReferenceable
from pip_services3_commons.config import IConfigurable

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
```
