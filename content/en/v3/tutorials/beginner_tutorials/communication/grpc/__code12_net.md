
```python
class MyGrpcClient(GrpcClient):
     def __init__(self):
        super().__init__(summator2_pb2_grpc.SummatorStub, 'Summator')
        
     def get_data(self, correlation_id, value1, value2):
        number = summator2_pb2.Number1(value1=value1, value2=value2)
        result = self._call("sum", None, number)
        return result.value
```
