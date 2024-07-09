
```go
config = conf.NewConfigParamsFromTuples(
	"key1.user", "jdoeV2",
	"key1.pass", "pass123",
	"key4.user", "bsmith",
	"key4.pass", "mypass",
)

credentialStore.ReadCredentials(config)
```
