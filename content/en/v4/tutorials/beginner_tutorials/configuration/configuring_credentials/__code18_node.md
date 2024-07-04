
```ts
let credential = new CredentialParams(ConfigParams.fromTuples("user", "jdoe3", "password", "pass123345", "pin", "321345"));
await credentialStore.store(ctx, "key2", credential);

```
