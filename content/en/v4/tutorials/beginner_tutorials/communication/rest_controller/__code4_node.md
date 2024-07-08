
```ts
import { RestController } from "pip-services4-http-node";
import { ConfigParams } from "pip-services4-components-node";

class MyRestController extends RestController {

    constructor(){
        super();
        this._baseRoute = "/my_service";
    }

    private async myPage(req, res){
        let result = req.params.message + req.query.name;
        this.sendResult(req, res, result);
    }

    public register() {
        this.registerRoute("GET", "/my_page/:name", null, this.myPage)
    }

}

export async function main() {
    let myRestService = new MyRestController();

    myRestService.configure(ConfigParams.fromTuples("connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 15239));

    await myRestService.open(ctx);
}
```
