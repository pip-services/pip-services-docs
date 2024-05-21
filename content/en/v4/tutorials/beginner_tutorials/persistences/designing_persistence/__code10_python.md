
```python
database2 = MyIdentifiablePostgresPersistence()
database2.configure(ConfigParams.from_tuples(
   "connection.host", "localhost",
    "connection.port", 5431,
    "connection.database", "pip1",
    "credential.user", "postgres", 
    "credential.password", "admin"
))
```
