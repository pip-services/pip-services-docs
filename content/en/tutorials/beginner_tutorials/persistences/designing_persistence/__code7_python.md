
```python
database1 = MyIdentifiableMySqlPersistence()
database1.configure(ConfigParams.from_tuples(
    "connection.host", host,
    "connection.port", port,
    "connection.database", db_name,
    "credential.username", user,
    "credential.password", password
))
```
