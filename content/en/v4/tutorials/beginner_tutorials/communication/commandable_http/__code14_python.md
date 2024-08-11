
```python
from pip_services4_http.clients import CommandableHttpClient
from pip_services4_components.config import ConfigParams

class MyCommandableHttpClient(CommandableHttpClient):
 
    def greeting(self, correlation_id):
        return self.call_command("greeting", None, {'name': 'Peter'})
    
client = MyCommandableHttpClient("commandable_hello_friend")
client.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                 "connection.host", "localhost",
                                                 "connection.port", 8080))

client.open(None)

data = client.greeting("123")  # Returns 'Hello, Peter !'
```
