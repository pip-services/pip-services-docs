
```ts
import { RestController } from "pip-services4-http-node";
import { ConfigParams } from "pip-services4-components-node";

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


// Instantiation
let myRestController = new MyRestController();

// REST service configuration
myRestController.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 15235
));

// Connection
await myRestController.open(ctx);
```
