
```cs
var credential = new CredentialParams(ConfigParams.FromTuples("user", "jdoe3", "password", "pass123345", "pin", "321345"));
await credentialStore.StoreAsync(null, "key2", credential);

```
