
```python
connection = connection1.override(ConfigParams.from_tuples("host", "localhost3")) 
# Returns
#{'discovery_key': 'discovery key 1',
# 'host': 'localhost3',
# 'port': '8080',
# 'protocol': 'http',
# 'uri': 'abc.com'}
```
