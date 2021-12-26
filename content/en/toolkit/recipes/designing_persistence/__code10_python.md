
```python
database2 = MyIdentifiablePostgresPersistence()
database2.configure(ConfigParams.from_tuples(
    "connection.host", host,
    "connection.port", port,
    "connection.database", db_name,
    "credential.user", user,
    "credential.password", password
))
```
