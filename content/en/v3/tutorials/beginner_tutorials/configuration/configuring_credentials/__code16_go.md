
```go
import (
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	aauth "github.com/pip-services3-gox/pip-services3-components-gox/auth"
)

config := cconf.NewConfigParamsFromTuples(
	"key1.user", "jdoe",
	"key1.pass", "pass123",
	"key2.user", "bsmith",
	"key2.pass", "mypass",
)

credentialStore := aauth.NewManyCredentialParamsFromConfig(config)

```
