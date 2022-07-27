
```python
from pip_services3_container import ProcessContainer
from pip_services3_grpc.build import DefaultGrpcFactory

from build.DefaultMyDataFactory import DefaultMyDataFactory


class MyDataProcess(ProcessContainer):
    def __init__(self):
        super().__init__("my_data", "simple my data microservice")
        self._factories.add(DefaultMyDataFactory())
        self._factories.add(DefaultGrpcFactory())
```
