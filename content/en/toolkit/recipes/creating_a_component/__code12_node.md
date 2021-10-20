
```ts
import { ProcessContainer } from "pip-services3-container-nodex";

// Creating a process container
class MyProcess extends ProcessContainer {
    public constructor() {
        super("myservice", "My service running as a process");

        this._configPath = './config.yaml';
        this._factories.add(new MyClassFactory());
    }
}

```

