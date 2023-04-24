
```python
# Case 1: Constructor + ConfigParams object
config = ConfigParams.from_tuples("user",  "user1", 
                                   "password", "password1")
credential = CredentialParams(config) # Returns {'credential.user': 'user1', 'credential.password': 'password1'}

# Case 2: Constructor + set/put methods
credential = CredentialParams()
credential.set_username("user1")
credential.set_password("password1")
credential.set_store_key("store key1")
credential.set_access_key("access key 1")
credential.set_access_id("access id 1")
credential.put("parameter1", "value1") 
credential
# Returns
#{'username': 'user1',
# 'password': 'password1',
# 'store_key': 'store key1',
# 'access_key': 'access key 1',
# 'access_id': 'access id 1'
# 'parameter1': 'value1'}
```
