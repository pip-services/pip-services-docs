
```python
config = ConfigParams.from_tuples("key1.user", "jdoe",
    "key1.pass", "pass123",
    "key2.user", "bsmith",
    "key2.pass", "mypass"
)

credentialStore = MemoryCredentialStore()
credentialStore.read_credentials(config)


```
