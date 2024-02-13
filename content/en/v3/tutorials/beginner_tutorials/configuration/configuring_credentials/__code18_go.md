
```go
credential := aauth.NewCredentialParams(cconf.NewConfigParamsFromTuples(
	"user", "jdoe3", "password", "pass123345", "pin", "321345",
).Value())

credentialStore.Store(context.Context(), "", "key2", credential)

```
