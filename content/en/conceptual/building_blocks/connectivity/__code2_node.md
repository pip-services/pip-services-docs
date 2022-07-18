
```ts
import { 
    ConfigParams, IConfigurable, 
    IReferenceable, IReferences 
} from "pip-services3-commons-nodex";

import { CredentialResolver } from "pip-services3-components-nodex";


class MyPersistence implements IConfigurable, IReferenceable {
    ...
    private _credentialResolver = new CredentialResolver();
    private _username: string;
    private _password: string;

    public configure(config: ConfigParams) {
        ...
        this._connectionResolver.configure(config);
    }

    public setReferences(refs: IReferences) {
        ...
        this._credentialResolver.setReferences(refs);

        let credentials = this._credentialResolver.lookup(null);
        this._username = credentials.getUsername();
        this._password = credentials.getPassword();
    }
}

```
