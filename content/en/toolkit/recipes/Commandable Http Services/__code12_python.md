
```python
import requests
res = requests.post("http://localhost:8080/commandable_hello_friend/greeting", json={"name": "Cosme"})
res.text # Returns '"Hello, Cosme !"'
```
