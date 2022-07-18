
```python
discovery.register('123', 'key1', ConnectionParams.from_tuples( 
    'param1', 'val1', 
    'param2', 'val2' 
)) 

connections = discovery.resolve_all(None, "key1") 
# Returns [{'host': '10.1.1.100', 'port': '8080'}, {'param1': 'val1', 'param2': 'val2'}]
```
