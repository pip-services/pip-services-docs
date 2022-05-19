
```python
from pip_services3_rpc.clients import RestClient   

class MyRestClient(RestClient):
    
    def __init__(self):
        super().__init__()
        self._base_route = '/my_service'

    # GET
    def get_data_get(self, correlation_id, name: str):
        result = self._call("get", "/my_page/" + name + "/get", correlation_id, params={'message': 'Hello'},  data={
                "data1": "my data"})
        return result

    # HEAD
    def get_data_head(self, correlation_id, name: str):
        result = self._call("head", "/my_page/" + name + "/head", correlation_id, params={'message': 'Hello'},  data={
                "data1": "my data"})
        return result
    
    # POST
    def get_data_post(self, correlation_id, name: str):
        result = self._call("post", "/my_page/" + name + "/post", correlation_id, params={'message': 'Hello'},  data={
                "data1": "my data"})
        return result
    
    # PUT
    def get_data_put(self, correlation_id, name: str):
        result = self._call("put", "/my_page/" + name + "/put", correlation_id, params={'message': 'Hello'},  data={
                "data1": "my data"})
        return result
        
from pip_services3_commons.config import ConfigParams

# Instantiation
client = MyRestClient()

# REST client configuration
client.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                         "connection.host", "localhost",
                                         "connection.port", 15235))
                                         
# Connection
client.open("123")
```
