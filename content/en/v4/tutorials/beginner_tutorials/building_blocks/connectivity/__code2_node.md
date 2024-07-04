
```ts
import { 
    ConfigParams, IConfigurable, 
    IReferenceable, IReferences
} from "pip-services4-components-node";

import { CredentialResolver } from "pip-services4-config-node";


class MyPersistence implements IConfigurable, IReferenceable {
    ...
    private _credentialResolver = new CredentialResolver();
    private _username: string;
    private _password: string;

    public configure(config: ConfigParams) {
        ...
        this._credentialResolver.configure(config);
    }

    public setReferences(refs: IReferences) {
        ...
        this._credentialResolver.setReferences(refs);

        let credentials = this._credentialResolver.lookup(null);
        this._username = (await credentials).getUsername();
        this._password = (await credentials).getPassword();
    }
}

```
