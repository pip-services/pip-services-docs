
```ts
import { RestClient } from "pip-services4-http-node";
import { ConfigParams, Context } from "pip-services4-components-node";

export class MyRestClient extends RestClient {
    public constructor() {
        super();
        this._baseRoute = '/my_service';
    }

    // GET
    public async getDataGet(ctx: Context, name: string): Promise<string> {
        let result = await this.call<string>("get", "/my_page/" + name, ctx, { message: 'Hello' });
        return result;
    }

    // HEAD
    public async getDataHead(ctx: Context, name: string): Promise<string> {
        let result = await this.call<string>("head", "/my_page/" + name, ctx, { message: 'Hello' });
        return result;
    }

    // POST
    public async getDataPost(ctx: Context, name: string): Promise<string> {
        let result = await this.call<string>("post", "/my_page/" + name, ctx, { message: 'Hello' }, { data1: 'my data' });
        return result;
    }

    // PUT
    public async getDataPut(ctx: Context, name: string): Promise<string> {
        let result = await this.call<string>("put", "/my_page/" + name, ctx, { message: 'Hello' }, { data1: 'my data' });
        return result;
    }
}
        
// Instantiation
let client = new MyRestClient();
// REST client configuration
client.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 15235
));
                                     
// Connection
client.open(ctx)  
```
