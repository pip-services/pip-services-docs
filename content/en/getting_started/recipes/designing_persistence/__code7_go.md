
```go
database1 := NewMyPostgresPersistence()
database1.Configure(conf.NewConfigParamsFromTuples(
	"connection.host", host,
	"connection.port", port,
	"connection.database", db_name,
	"credential.username", user,
	"credential.password", password,
))
```
