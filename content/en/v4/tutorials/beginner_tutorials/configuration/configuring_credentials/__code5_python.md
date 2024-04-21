
```python
config1 = ConfigParams.from_tuples("credential.user",  "user1", 
                                   "credential.password", "password1")
credential = CredentialParams.from_config(config1) # Returns {'user': 'user1', 'password': 'password1'}
```
