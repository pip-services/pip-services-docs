
```go
database1 := NewMyMySqlPersistence()
database1.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.host", host,
	"connection.port", port,
	"connection.database", db_name,
	"credential.username", user,
	"credential.password", password,
))
```
