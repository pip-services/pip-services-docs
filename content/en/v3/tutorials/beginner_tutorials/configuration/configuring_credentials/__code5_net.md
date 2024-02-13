
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Auth;

var config = ConfigParams.FromTuples("credential.user", "user1", "credential.password", "password1");
var credential = CredentialParams.FromConfig(config); // Returns {'user': 'user1', 'password': 'password1'}

```
