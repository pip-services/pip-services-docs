
```python
class MyGrpcController(GrpcController, summator2_pb2_grpc.SummatorServicer):

    def __init__(self):
        super().__init__('my_data_v1')

    def add_servicer_to_server(self, server):
        summator2_pb2_grpc.add_SummatorServicer_to_server(self, server)

    def register(self):
        self._register_method("sum", None, self.__sum2)

    def __sum2(self, number: summator2_pb2.Number1, context: ServicerContext):
        res = summator.sum(number.value1, number.value2)
        return summator2_pb2.Number2(value1=res)
```
