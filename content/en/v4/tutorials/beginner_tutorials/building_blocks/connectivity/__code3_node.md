
```ts
import { ConfigParams, IConfigurable } from "pip-services4-components-node";

import { CredentialParams } from "pip-services4-config-node";

class MyPersistence implements IConfigurable {
    ...
    private _username: string;
    private _password: string;

    public configure(config: ConfigParams) {
        ...
        let credentials = CredentialParams.fromConfig(config.getSection("credential"));
        this._username = credentials.getUsername();
        this._password = credentials.getPassword();
    }
}
```
