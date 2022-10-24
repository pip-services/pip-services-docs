
```go
persistence := NewMySqlServerPersistence()
persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 1433,
	"connection.database", "pip",
	"credential.username", "user",
	"credential.password", "password"
))

```
