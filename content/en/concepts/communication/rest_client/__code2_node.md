
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { RestClient } from "pip-services3-rpc-nodex";

export class MyRestClient extends RestClient {
    public constructor() {
        super();
        this._baseRoute = '/my_service';
    }

    // GET
    public async getDataGet(correlationId: string, name: string): Promise<string> {
        let result = await this.call<string>("get", "/my_page/" + name, correlationId, { message: 'Hello' });
        return result;
    }

    // HEAD
    public async getDataHead(correlationId: string, name: string): Promise<string> {
        let result = await this.call<string>("head", "/my_page/" + name, correlationId, { message: 'Hello' });
        return result;
    }

    // POST
    public async getDataPost(correlationId: string, name: string): Promise<string> {
        let result = await this.call<string>("post", "/my_page/" + name, correlationId, { message: 'Hello' }, { data1: 'my data' });
        return result;
    }

    // PUT
    public async getDataPut(correlationId: string, name: string): Promise<string> {
        let result = await this.call<string>("put", "/my_page/" + name, correlationId, { message: 'Hello' }, { data1: 'my data' });
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
client.open("123")  
```
