
```python
config = ConfigParams.from_tuples(
    "key1.user", "jdoeV2",
    "key1.pass", "pass123",
    "key4.user", "bsmith",
    "key4.pass", "mypass"
)

credentialStore.read_credentials(config)
```
