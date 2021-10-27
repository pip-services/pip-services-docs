
```
# In-memory discovery service
descriptor: "pip-services:discovery:memory:default:1.0"
mongo:
  host: mongo
  port: 27017

# MongoDb persistence component
descriptor: "myservice:mypersistance:mongodb:default:1.0"
connection:
  discovery_key: mongo
```

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
