
```ts
import { MemoryCredentialStore } from "pip-services4-config-node"
import { ConfigParams } from "pip-services4-components-node"

let config = ConfigParams.fromTuples(
    "key1.user", "jdoe",
    "key1.pass", "pass123",
    "key2.user", "bsmith",
    "key2.pass", "mypass"
);
let credentialStore = new MemoryCredentialStore(config);
```
