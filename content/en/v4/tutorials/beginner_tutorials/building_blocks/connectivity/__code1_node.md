```ts
import { ConfigParams, IConfigurable } from "pip-services4-components-node";
import { ConnectionParams } from "pip-services4-config-node";

class MyPersistence implements IConfigurable {
    private _host: string;
    private _port: number;

    public configure(config: ConfigParams) {
        let connection = ConnectionParams.fromConfig(config.getSection("connection"));
        this._host = connection.getHost();
        this._port = connection.getPortWithDefault(27017);
    }
}
```
