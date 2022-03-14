
```python
# Pre-requisites
import time
from grpc import ServicerContext
from pip_services3_grpc.services import GrpcService
from pip_services3_commons.config import ConfigParams
from pip_services3_commons.refer import References

import summator

import summator_pb2
import summator_pb2_grpc

# gRPC service


class MyGrpcService(GrpcService, summator_pb2_grpc.SummatorServicer):

    def __init__(self):
        super().__init__('my_data_v1')

    def add_servicer_to_server(self, server):
        summator_pb2_grpc.add_SummatorServicer_to_server(self, server)

    def register(self):
        self._register_method("sum", None, self.__sum2)

    def __sum2(self, number: summator_pb2.Number1, context: ServicerContext):
        res = summator.sum(number.value1, number.value2)
        return summator_pb2.Number2(value=res)

# Create service
service = MyGrpcService()
service.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
))

service.set_references(References())

service.open(None)

```
