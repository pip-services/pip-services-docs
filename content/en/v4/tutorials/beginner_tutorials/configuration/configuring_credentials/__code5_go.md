
```go
import (
	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	auth "github.com/pip-services4/pip-services4-go/pip-services4-config-go/auth"
)

config := conf.NewConfigParamsFromTuples("credential.user", "user1", "credential.password", "password1")
credential := auth.NewCredentialParamsFromConfig(config) // Returns {'user': 'user1', 'password': 'password1'}
```
