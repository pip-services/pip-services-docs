
```python
connection1.get_discovery_key()  # Returns 'discovery key 1'
connection1.get_host()  # Returns 'localhost'
connection1.get_port()  # Returns 8080
connection1.get_port_with_default(0000) # Returns 8080 or 0000 if port not defined
connection1.get_protocol()  # Returns 'http'
connection1.get_protocol_with_default("default protocol") # Returns 'http' or 'default protocol' if protocol field not defined
connection1.get_uri()  # Returns 'abc.com'
```
