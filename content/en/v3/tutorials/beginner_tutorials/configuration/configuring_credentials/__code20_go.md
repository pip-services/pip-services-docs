
```go
credential1 := aauth.NewCredentialParams(cconf.NewConfigParamsFromTuples(
	"user", "jdoe3V2", "password", "pass123345", "pin", "321345",
).Value())

credentialStore.Store(context.Backgroudn(), "", "key3", credential1)
```
