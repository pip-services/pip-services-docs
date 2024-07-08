
```ts
import { ConfigParams, Context } from "pip-services4-components-node";
import { CommandableHttpClient } from "pip-services4-http-node";

export async function main() { 
    
    let client = new MyCommandableHttpClient("commandable_hello_friend");
    client.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ));

    await client.open(null);

    let data = await client.greeting(ctx); // Returns 'Hello, Peter !'
    console.log(data);
}

export class MyCommandableHttpClient extends CommandableHttpClient {
    public constructor(baseRoute: string) {
        super(baseRoute);
    }

    public async greeting(ctx: Context): Promise<string> {
        return await this.callCommand<string>("greeting", ctx, { name: "Peter" });
    }
}
```
