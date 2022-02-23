
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { CommandableHttpClient } from "pip-services3-rpc-nodex";


export async function main() { 
    
    let client = new MyCommandableHttpClient("commandable_hello_friend");
    client.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ));

    await client.open(null);

    let data = await client.greeting("123"); // Returns 'Hello, Peter !'
    console.log(data);
}

export class MyCommandableHttpClient extends CommandableHttpClient {
    public constructor(baseRoute: string) {
        super(baseRoute);
    }

    public async greeting(correlationId: string): Promise<string> {
        return await this.callCommand<string>("greeting", correlationId, { name: "Peter" });
    }
}

```

