
```python
config1 = ConfigParams.from_tuples("password", "password5")
credential2 = credential1.override(config1)
# Returns
#{'username': 'user1',
# 'password': 'password5',
# 'store_key': 'store key1',
# 'access_key': 'access key 1',
# 'access_id': 'access id 1',
# 'parameter_name': 'new_parameter_value'}
```
