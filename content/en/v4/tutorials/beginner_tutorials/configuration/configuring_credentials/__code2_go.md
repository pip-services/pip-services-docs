
```go
import (
	"fmt"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	auth "github.com/pip-services4/pip-services4-go/pip-services4-config-go/auth"
)

// Case 1: Constructor + ConfigParams object
config := conf.NewConfigParamsFromTuples(
	"user", "user1",
	"password", "password1",
)
credential := auth.NewCredentialParams(config.Value()) // Returns {'credential.user': 'user1', 'credential.password': 'password1'}

// Case 2: Constructor + set/put methods
credential = auth.NewEmptyCredentialParams()
credential.SetUsername("user1")
credential.SetPassword("password1")
credential.SetStoreKey("store key1")
credential.SetAccessKey("access key 1")
credential.SetAccessId("access id 1")
credential.Put("parameter1", "value1")

fmt.Println(credential)
// Returns
//{'username': 'user1',
// 'password': 'password1',
// 'store_key': 'store key1',
// 'access_key': 'access key 1',
// 'access_id': 'access id 1'
// 'parameter1': 'value1'}
```
