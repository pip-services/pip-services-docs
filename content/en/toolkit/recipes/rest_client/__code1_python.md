
```python
from bottle import request
from pip_services3_rpc.services import RestService


class MyRestService(RestService):

    def __init__(self):
        super(MyRestService, self).__init__()
        self._base_route = "/my_service"
    
    # GET
    def my_page_get(self, name):
        body_data = self._get_data()
        result = f"{request.query.get('message')}, {name}, " \
                 f'data:{body_data.get("data1")}'
        return self.send_result(result)

    # HEAD
    def my_page_head(self, name):
        body_data = self._get_data()
        result = f"{request.query.get('message')}, {name}, " \
                 f'data:{body_data.get("data1")}'
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
        self.register_route(method="HEAD", route="/my_page/<name>/head", schema=None, handler=self.my_page_head)
        self.register_route(method="POST", route="/my_page/<name>/post", schema=None, handler=self.my_page_post)
        self.register_route(method="PUT", route="/my_page/<name>/put", schema=None, handler=self.my_page_put)


from pip_services3_commons.config import ConfigParams

# Instantiation
my_rest_service = MyRestService()

# REST service configuration
my_rest_service.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                   "connection.host", "localhost",
                                                   "connection.port", 15235))
# Connection
my_rest_service.open("123")
```
