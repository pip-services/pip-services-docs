
```ts
import { ConfigParams } from "pip-services4-components-node";
import { MemoryDiscovery, ConnectionParams } from "pip-services4-config-node";

export async function main() {
    // Defining the component 
    let config = ConfigParams.fromTuples(
        "key1.host", "10.1.1.100",
        "key1.port", "8080",
        "key2.host", "10.1.1.100",
        "key2.port", "8082"
    );

    let discovery = new MemoryDiscovery();
    discovery.configure(config);

    // Adding more parameters 
    await discovery.register(ctx, "key1", ConnectionParams.fromTuples(
        "param1", "val1",
        "param2", "val2"
    ));

    await discovery.register(ctx, "key3", ConnectionParams.fromTuples(
        "host", "localhost",
        "port", "8000"
    ));

    // Resolving connections 
    console.log(await discovery.resolveOne(ctx, "key1"));
    console.log(await discovery.resolveAll(ctx, "key1"));
    console.log(await discovery.resolveOne(ctx, "key3"));
}
```
