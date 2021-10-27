
```ts
import { 
  ConfigParams, IConfigurable, 
  IReferenceable, IReferences 
} from "pip-services3-commons-nodex";

import { ConnectionResolver } from "pip-services3-components-nodex";


class MyPersistence implements IConfigurable, IReferenceable {
    private _connectionResolver = new ConnectionResolver();
    private _host: string;
    private _port: number;

    public configure(config: ConfigParams) {
        this._connectionResolver.configure(config);
    }

    public setReferences(refs: IReferences) {
        this._connectionResolver.setReferences(refs);

        let connection = this._connectionResolver.resolve(null);
        this._host = connection.getHost();
        this._port = connection.getPortWithDefault(27017);
    }
}

```
