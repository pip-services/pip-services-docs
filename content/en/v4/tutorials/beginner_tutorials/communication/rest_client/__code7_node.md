
```ts

import { RestClient } from "pip-services4-http-node";
import { ConfigParams, Context } from "pip-services4-components-node";
import { RestController } from "pip-services4-http-node";

export async function main() {
    // Instantiation
    let myRestService = new MyRestController();

    // REST service configuration
    myRestService.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 15235
    ));
    // Connection
    await myRestService.open(null);


    // Instantiation
    let client = new MyRestClient();

    // REST client configuration
    client.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 15235
    ));

    // Connection
    await client.open(null);

    // Using the different HTTP methods
    // GET
    console.log("GET: " + await client.getDataGet(null, "David"));
    // HEAD
    console.log("HEAD: " + await client.getDataHead(null, "David"));
    // POST
    console.log("POST: " + await client.getDataPost(null, "David"));
    // PUT
    console.log("PUT: " + await client.getDataPut(null, "David"));

    // Close REST service and REST client
    await client.close(null);
    await myRestService.close(null);
}

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

export class MyRestController extends RestController {

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
        this.sendResult(req, res, null);
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
