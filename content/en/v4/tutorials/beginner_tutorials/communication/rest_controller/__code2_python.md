
```python
class MyRestController(RestController):

    def __init__(self):
        super(MyRestController, self).__init__()
        self._base_route = "/my_controller"

    def my_page(self, name):
        result = f"{request.query.get('message')}, {name}"
        return self.send_result(result)

    def register(self):
        self.register_route(method="GET", route="/my_page/<name>", schema=None, handler=self.my_page)
```
