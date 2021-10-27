
```python
from pip_services3_container import ProcessContainer
from pip_services3_grpc.build.DefaultGrpcFactory import DefaultGrpcFactory
from pip_services3_rpc.build import DefaultRpcFactory
from pip_services3_swagger.build.DefaultSwaggerFactory import DefaultSwaggerFactory


class MyProcess(ProcessContainer):
    def __init__(self):
        super().__init__("mymicroservice", "Sample microservice container")

        self._factories.add(MyComponentFactory())
        self._factories.add(DefaultRpcFactory())
        self._factories.add(DefaultSwaggerFactory())
        self._factories.add(DefaultGrpcFactory())


```
