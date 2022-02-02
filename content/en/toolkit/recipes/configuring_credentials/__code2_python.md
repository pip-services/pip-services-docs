
```python
# Case 1: Constructor + ConfigParams object
config0 = ConfigParams.from_tuples("user",  "user1", 
                                   "password", "password1")
credential0 = CredentialParams(config0) # Returns {'credential.user': 'user1', 'credential.password': 'password1'}

# Case 2: Constructor + set/put methods
credential1 = CredentialParams()
credential1.set_username("user1")
credential1.set_password("password1")
credential1.set_store_key("store key1")
credential1.set_access_key("access key 1")
credential1.set_access_id("access id 1")
credential1.put("parameter1", "value1") 
# Returns
#{'username': 'user1',
# 'password': 'password1',
# 'store_key': 'store key1',
# 'access_key': 'access key 1',
# 'access_id': 'access id 1'
# 'parameter1': 'value1'}
```
