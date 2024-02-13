
```python
value = AnyValueMap({ 'key1': 1, 'key2': "123.456", 'key3': "2018-01-01" })
value.set_as_object('key1', 2)           # Returns {'key1': 2, 'key2': '123.456', 'key3': '2018-01-01'}
```
