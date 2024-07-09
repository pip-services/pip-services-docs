
```go
credential1 := auth.NewCredentialParams(conf.NewConfigParamsFromTuples(
	"user", "jdoe3V2", "password", "pass123345", "pin", "321345",
).Value())

credentialStore.Store(context.Background(), "key3", credential1)
}
```
