
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Auth;

var config = ConfigParams.FromTuples(
    "key1.user", "jdoe",
    "key1.pass", "pass123",
    "key2.user", "bsmith",
    "key2.pass", "mypass"
);

var credentialStore = new MemoryCredentialStore();
credentialStore.ReadCredentials(config);

```
