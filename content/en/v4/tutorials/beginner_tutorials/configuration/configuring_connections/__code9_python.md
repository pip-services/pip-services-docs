
```python
connection.add_section("sectionA", ConfigParams.from_tuples("key1", "ABCDE"))
# Returns 
#{'discovery_key': 'discovery key 1',
# 'host': 'localhost',
# 'port': '8080',
# 'protocol': 'http',
# 'uri': 'abc.com',
# 'parameter_name': 'paramter_value',
# 'sectionA.key1': 'ABCDE'}
```
