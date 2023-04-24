
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { CredentialParams } from "pip-services3-components-nodex";

let config = ConfigParams.fromTuples("credential.user", "user1", "credential.password", "password1");
let credential = CredentialParams.fromConfig(config); // Returns {'user': 'user1', 'password': 'password1'}

```
