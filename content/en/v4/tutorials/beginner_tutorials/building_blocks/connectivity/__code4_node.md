
```ts
import { 
    ConfigParams, IConfigurable, 
    IReferenceable, IReferences 
} from "pip-services4-components-node";

import { ConnectionResolver } from "pip-services4-config-node";

class MyPersistence implements IConfigurable, IReferenceable {
    private _connectionResolver = new ConnectionResolver();
    private _host: string;
    private _port: number;

    public configure(config: ConfigParams) {
        this._connectionResolver.configure(config);
    }

    public async setReferences(refs: IReferences) {
        this._connectionResolver.setReferences(refs);

        let connection = await this._connectionResolver.resolve(null);
        this._host = connection.getHost();
        this._port = connection.getPortWithDefault(27017);
    }
}
```
