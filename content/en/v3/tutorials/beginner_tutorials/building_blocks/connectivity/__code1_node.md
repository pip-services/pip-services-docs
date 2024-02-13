
```ts
import { ConfigParams, IConfigurable } from "pip-services3-commons-nodex";
import { ConnectionParams } from "pip-services3-components-nodex";


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
