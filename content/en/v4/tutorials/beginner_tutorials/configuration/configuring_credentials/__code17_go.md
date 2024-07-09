
```go
import (
	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	auth "github.com/pip-services4/pip-services4-go/pip-services4-config-go/auth"
)


config := conf.NewConfigParamsFromTuples(
	"key1.user", "jdoe",
	"key1.pass", "pass123",
	"key2.user", "bsmith",
	"key2.pass", "mypass",
)

credentialStore := auth.NewEmptyMemoryCredentialStore()
credentialStore.ReadCredentials(config)
```
