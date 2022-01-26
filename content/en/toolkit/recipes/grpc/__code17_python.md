
```python
# Pre-requisites
from pip_services3_grpc.clients import GrpcClient
from pip_services3_commons.config import ConfigParams
import summator2_pb2
import summator2_pb2_grpc

# gRPC client
class MyGrpcClient(GrpcClient):
     def __init__(self):
        super().__init__(summator2_pb2_grpc.SummatorStub, 'Summator')
        
     def get_data(self, correlation_id, value1, value2):
        number = summator2_pb2.Number1(value1=value1, value2=value2)
        result = self._call("sum", None, number)
        return result.value
    
client = MyGrpcClient()
client.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 50055
))

client.open(None)

# Function call and result

result = client.get_data(None, 3,5)  # Returns 8
```
