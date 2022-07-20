
```python
# Pre-requisites
from pip_services3_rpc.clients import RestClient


class MyRestClient(RestClient):
    def __init__(self):
        super().__init__()
        self._base_route = '/my_service'

    def get_data_get(self, correlation_id, name: str):
        result = self._call("get", "/my_page/" + name, correlation_id, params={'message': 'Hello'})
        return result

    def get_data_head(self, correlation_id, name: str):
        result = self._call("head", "/my_page/" + name, correlation_id, params={'message': 'Hello'}, data={
            "data1": "my data"})
        return result

    def get_data_post(self, correlation_id, name: str):
        result = self._call("post", "/my_page/" + name, correlation_id, params={'message': 'Hello'}, data={
            "data1": "my data"})
        return result

    def get_data_put(self, correlation_id, name: str):
        result = self._call("put", "/my_page/" + name, correlation_id, params={'message': 'Hello'}, data={
            "data1": "my data"})
        return result


# Instantiation
client = MyRestClient()

# Configuration
client.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                          "connection.host", "localhost",
                                          "connection.port", 15231))
# Connection
client.open("123")
```
