
```python
# Pre-requisites
from pip_services4_grpc.clients import GrpcClient
from pip_services4_components.config import ConfigParams
from pip_services4_components.refer import References

import summator_pb2
import summator_pb2_grpc

# gRPC client
class MyGrpcClient(GrpcClient):
    def __init__(self):
        super().__init__(summator_pb2_grpc.SummatorStub, 'Summator')

    def get_data(self, correlation_id, value1, value2):
        number = summator_pb2.Number1(value1=value1, value2=value2)
        result = self._call("sum", None, number)
        return result.value



# Create client
client = MyGrpcClient()
client.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
))

client.open(None)

# Function call and result
result = client.get_data(None, 3, 5)  # Returns 8

print(f'Function result: {result}')
```
