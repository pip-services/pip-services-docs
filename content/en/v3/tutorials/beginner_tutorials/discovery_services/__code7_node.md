
```ts
// Pre-requisites
import { ConfigParams } from "pip-services3-commons-nodex";
import { ConnectionParams, MemoryDiscovery } from "pip-services3-components-nodex";

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
    await discovery.register("123", "key1", ConnectionParams.fromTuples(
        "param1", "val1",
        "param2", "val2"
    ));

    await discovery.register("123", "key3", ConnectionParams.fromTuples(
        "host", "localhost",
        "port", "8000"
    ));

    // Resolving connections 
    console.log(await discovery.resolveOne("123", "key1"));
    console.log(await discovery.resolveAll("123", "key1"));
    console.log(await discovery.resolveOne("123", "key3"));
}
```

Which after running produces the following result:

![figure 1](./figure1.png)
