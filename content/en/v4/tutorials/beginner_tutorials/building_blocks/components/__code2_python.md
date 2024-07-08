
```python
from pip_services4_container import ProcessContainer
from pip_services4_grpc.build.DefaultGrpcFactory import DefaultGrpcFactory
from pip_services4_http.build import DefaultRpcFactory
from pip_services4_swagger.build.DefaultSwaggerFactory import DefaultSwaggerFactory


class MyProcess(ProcessContainer):
    def __init__(self):
        super().__init__("mymicroservice", "Sample microservice container")

        self._factories.add(MyComponentFactory())
        self._factories.add(DefaultRpcFactory())
        self._factories.add(DefaultSwaggerFactory())
        self._factories.add(DefaultGrpcFactory())

```
