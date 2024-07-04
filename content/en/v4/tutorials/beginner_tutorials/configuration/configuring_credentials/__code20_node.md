
```ts
let credential1 = new CredentialParams(ConfigParams.fromTuples("user", "jdoe3V2", "password", "pass123345", "pin", "321345"));
await credentialStore.store(ctx, "key3", credential1);
```
