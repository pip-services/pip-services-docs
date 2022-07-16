
```python
# REST service

# Pre-requisites
from bottle import request
from pip_services3_rpc.services import RestService
from pip_services3_commons.config import ConfigParams

class MyRestService(RestService):

    def __init__(self):
        super(MyRestService, self).__init__()
        self._base_route = "/my_service"
    
    # GET
    def my_page_get(self, name):
        result = f"{request.query.get('message')}, {name}"
        return self.send_result(result)

    # HEAD
    def my_page_head(self, name):
        result = f"{request.query.get('message')}, {name}"
        return self.send_result(result)    
   
    # POST
    def my_page_post(self, name):
        body_data = self._get_data()
        result = f"{request.query.get('message')}, {name}, " \
                 f'data:{body_data.get("data1")}'
        return self.send_result(result)
   
    # PUT
    def my_page_put(self, name):
        body_data = self._get_data()
        result = f"{request.query.get('message')}, {name}, " \
                 f'data:{body_data.get("data1")}'
        return self.send_result(result)
    
    # Route registration
    def register(self):
        self.register_route(method="GET", route="/my_page/<name>", schema=None, handler=self.my_page_get)
        self.register_route(method="HEAD", route="/my_page/<name>", schema=None, handler=self.my_page_head)
        self.register_route(method="POST", route="/my_page/<name>", schema=None, handler=self.my_page_post)
        self.register_route(method="PUT", route="/my_page/<name>", schema=None, handler=self.my_page_put)

# Instantiation
service = MyRestService()

# Configuration
service.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                   "connection.host", "localhost",
                                                   "connection.port", 15231))
# Connection
service.open("123")

# REST client

# Pre-requisites
from pip_services3_rpc.clients import RestClient

class MyRestClient(RestClient):
    def __init__(self):
        super().__init__()
        self._base_route = '/my_service'

    def get_data_get(self, correlation_id, name: str):
        result = self._call("get", "/my_page/" + name + "/get", correlation_id, params={'message': 'Hello'})
        return result

    def get_data_head(self, correlation_id, name: str):
        result = self._call("head", "/my_page/" + name + "/head", correlation_id, params={'message': 'Hello'},  data={
                "data1": "my data"})
        return result
    
    def get_data_post(self, correlation_id, name: str):
        result = self._call("post", "/my_page/" + name + "/post", correlation_id, params={'message': 'Hello'},  data={
                "data1": "my data"})
        return result
    
    def get_data_put(self, correlation_id, name: str):
        result = self._call("put", "/my_page/" + name + "/put", correlation_id, params={'message': 'Hello'},  data={
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

# Using the different HTTP methods

# GET
print("GET: ", client.get_data_get("123", "David"))

# HEAD
print("HEAD: ", client.get_data_head("123", "David"))

# POST
print("POST: ", client.get_data_post("123", "David"))

# PUT
print("PUT: ", client.get_data_put("123", "David"))

# Close REST service and REST client
client.close("123")
service.close("123")
```
