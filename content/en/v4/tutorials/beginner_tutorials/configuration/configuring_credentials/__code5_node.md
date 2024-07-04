
```ts
import { CredentialParams } from "pip-services4-config-node"
import { ConfigParams } from "pip-services4-components-node"

let config = ConfigParams.fromTuples("credential.user", "user1", "credential.password", "password1");
let credential = CredentialParams.fromConfig(config); // Returns {'user': 'user1', 'password': 'password1'}

```
