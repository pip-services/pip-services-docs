
```python
from pip_services3_commons.refer.Descriptor import Descriptor
from pip_services3_components.build.Factory import Factory

from logic.MyDataController import MyDataController
from services.MyDataCommandableGrpcService import MyDataCommandableGrpcService


class DefaultMyDataFactory(Factory):
    FactoryDescriptor = Descriptor("service-mydata", "factory", "default", "default", "1.0")
    ControllerDescriptor = Descriptor("service-mydata", "controller", "default", "*", "1.0")
    CommandableGrpcServiceDescriptor = Descriptor("service-mydata", "service", "commandable-grpc", "*", "1.0")

    def __init__(self):
        """
        Create a new instance of the factory.
        """
        super().__init__()
        self.register_as_type(DefaultMyDataFactory.ControllerDescriptor, MyDataController)
        self.register_as_type(DefaultMyDataFactory.CommandableGrpcServiceDescriptor, MyDataCommandableGrpcService)
        self.register_as_type(DefaultMyDataFactory.ControllerDescriptor, MyDataController)
```
