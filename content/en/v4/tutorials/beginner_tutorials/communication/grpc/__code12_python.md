
```python
class MyGrpcClient(GrpcClient):
     def __init__(self):
        super().__init__(summator_pb2_grpc.SummatorStub, 'Summator')
        
     def get_data(self, context, value1, value2):
        number = summator_pb2.Number1(value1=value1, value2=value2)
        result = self._call("sum", None, number)
        return result,value
```
