
```ts
import { ProcessContainer } from "pip-services4-container-node";

export class MyProcess extends ProcessContainer {
    public constructor() {
        super('myservice', 'My service running as a process');
        this._configPath = './config.yaml'
        this._factories.add(new MyFactory())
    }
}
```
