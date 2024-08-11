
```python
class MyCommandableHttpClient(CommandableHttpClient):
    
    def __init__(self, base_route: str):
        super().__init__(base_route)

    def greeting(self, context):
        return self.call_command("greeting", context, {'name': 'Peter'})
```
