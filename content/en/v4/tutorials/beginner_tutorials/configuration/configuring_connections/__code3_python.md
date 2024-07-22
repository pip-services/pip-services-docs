
```python
connection = ConnectionParams()

connection.set_discovery_key("discovery key 1")
connection.set_host("localhost")
connection.set_port("8080")
connection.set_protocol("http")
connection.set_uri("abc.com")

connection  # Returns {'discovery_key': 'discovery key 1', 'host': 'localhost', 'port': '8080', 'protocol': 'http', 'uri': 'abc.com'}
```
