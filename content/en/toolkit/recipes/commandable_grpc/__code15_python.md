
```python
from pip_services3_commons.config import ConfigParams
from pip_services3_commons.refer import References

from clients.IMyDataClient import IMyDataClient
from clients.MyCommandableGrpcClient import MyCommandableGrpcClient
from data.MyData import MyData

correlation_id = 'example'

# create client
grpc_config = ConfigParams.from_tuples(
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8090
)

grpcClient = MyCommandableGrpcClient()
grpcClient.configure(grpc_config)
grpcClient.set_references(References())
grpcClient.open(correlation_id)

# simple data
data1: MyData = MyData('1', '0005', 'any content 1')
data2: MyData = MyData('2', '0010', 'any content 2')

# using the client
res = grpcClient.create_my_data(correlation_id, data1)
assert res.id == data1.id

res = grpcClient.create_my_data(correlation_id, data2)
assert res.id == data2.id

res = grpcClient.get_my_datas(correlation_id, None, None)
assert len(res.data) == 2

res = grpcClient.delete_my_data(correlation_id, data2.id)
assert res.id == data2.id

res = grpcClient.get_my_data_by_id(correlation_id, data2.id)
assert res is None

```
