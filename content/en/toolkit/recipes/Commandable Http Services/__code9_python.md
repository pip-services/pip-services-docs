
```python
class MyCommandableHttpClient(CommandableHttpClient):
 
    def greeting(self, correlation_id):
        return self.call_command("greeting", None, {'name': 'Peter'})
```
