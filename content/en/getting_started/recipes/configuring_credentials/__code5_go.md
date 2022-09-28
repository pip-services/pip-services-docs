
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	auth "github.com/pip-services3-go/pip-services3-components-go/auth"
)

config := conf.NewConfigParamsFromTuples("credential.user", "user1", "credential.password", "password1")
credential := auth.NewCredentialParamsFromConfig(config) // Returns {'user': 'user1', 'password': 'password1'}

```
