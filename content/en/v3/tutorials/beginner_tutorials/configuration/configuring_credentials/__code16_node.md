
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { MemoryCredentialStore } from "pip-services3-components-nodex";

let config = ConfigParams.fromTuples(
    "key1.user", "jdoe",
    "key1.pass", "pass123",
    "key2.user", "bsmith",
    "key2.pass", "mypass"
);
let credentialStore = new MemoryCredentialStore(config);

```
