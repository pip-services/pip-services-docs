
```go
credential := auth.NewCredentialParams(conf.NewConfigParamsFromTuples(
	"user", "jdoe3", "password", "pass123345", "pin", "321345",
).Value())

credentialStore.Store(context.Background(), "key2", credential)
```
