
```python
class MyCommandableHttpClient(CommandableHttpClient):
    
    def __init__(self, base_route: str):
        super().__init__(base_route)

    def greeting(self, correlation_id):
        return self.call_command("greeting", correlation_id, {'name': 'Peter'})
```
