
```
# MongoDb persistence component
descriptor: “myservice:mypersistance:mongodb:default:1.0”
credential:
  username: admin
  password: pass123
```

```ts
import { ConfigParams, IConfigurable } from "pip-services3-commons-nodex";
import { CredentialParams } from "pip-services3-components-nodex";


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
