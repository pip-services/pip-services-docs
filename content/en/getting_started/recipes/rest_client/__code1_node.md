
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { RestService } from "pip-services3-rpc-nodex";


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
        let result = req.query.message + ", " + req.route.params.name
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


```
