
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { RestService } from "pip-services3-rpc-nodex";


class MyRestService extends RestService {

    constructor() {
        super();
        this._baseRoute = "/my_service";
    }

    private async myPage(req, res) {
        let result = req.query.message + ', ' + req.params.name;
        this.sendResult(req, res, result);
    }

    public register() {
        this.registerRoute("GET", "/my_page/:name", null, this.myPage);
    }

}

export async function main() {
    let myRestService = new MyRestService();

    myRestService.configure(ConfigParams.fromTuples("connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 15239));

    await myRestService.open("123");
}

```
