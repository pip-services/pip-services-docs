
```cs
var credential1 = new CredentialParams(ConfigParams.FromTuples("user", "jdoe3V2", "password", "pass123345", "pin", "321345"));
await credentialStore.StoreAsync(null, "key3", credential1);
```
