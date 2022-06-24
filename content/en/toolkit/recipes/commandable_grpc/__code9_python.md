
```python
from pip_services3_commons.refer import Descriptor
from pip_services3_grpc.services.CommandableGrpcService import CommandableGrpcService


class MyDataCommandableGrpcService(CommandableGrpcService):

    def __init__(self):
        super().__init__('mydata')
        self._dependency_resolver.put('controller', Descriptor('service-mydata', 'controller', '*', '*', '*'))
```
