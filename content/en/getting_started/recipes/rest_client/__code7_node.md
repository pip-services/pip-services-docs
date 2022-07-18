
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { RestClient, RestService } from "pip-services3-rpc-nodex";

export async function main() {
    // Instantiation
    let myRestService = new MyRestService();

    // REST service configuration
    myRestService.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 15235
    ));
    // Connection
    await myRestService.open("123");


    // Instantiation
    let client = new MyRestClient();

    // REST client configuration
    client.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 15235
    ));
                                         
    // Connection
    await client.open("123");

    // Using the different HTTP methods
    // GET
    console.log("GET: " + await client.getDataGet("123", "David"));
    // HEAD
    console.log("HEAD: " + await client.getDataHead("123", "David"));
    // POST
    console.log("POST: " + await client.getDataPost("123", "David"));
    // PUT
    console.log("PUT: " + await client.getDataPut("123", "David"));
    
    // Close REST service and REST client
    await client.close("123");
    await myRestService.close("123");
}

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

export class MyRestService extends RestService {

    public constructor() {
        super();
        this._baseRoute = "/my_service";
    }

    // GET
    public async myPageGet(req: any, res: any): Promise<void> {
        let result = req.query.message + ", " + req.route.params.name;
        this.sendResult(req, res, result);
    }

    // HEAD
    public async myPageHead(req: any, res: any): Promise<void> {
        let result = req.query.message + ", " + req.route.params.name;
        this.sendResult(req, res, result);
    }

    // POST
    public async myPagePost(req: any, res: any): Promise<void> {
        let result = req.query.message + ", " + req.route.params.name + ", " + "data:" + req.body.data1;
        this.sendResult(req, res, result);
    }

    // PUT
    public async myPagePut(req: any, res: any): Promise<void> {
        let result = req.query.message + ", " + req.route.params.name + ", " + "data:" + req.body.data1;
        this.sendResult(req, res, result);
    }

    // Route registration
    public register(): void {
        this.registerRoute("GET", "/my_page/:name", null, this.myPageGet)
        this.registerRoute("HEAD", "/my_page/:name", null, this.myPageHead)
        this.registerRoute("POST", "/my_page/:name", null, this.myPagePost)
        this.registerRoute("PUT", "/my_page/:name", null, this.myPagePut)
    }
}
```
