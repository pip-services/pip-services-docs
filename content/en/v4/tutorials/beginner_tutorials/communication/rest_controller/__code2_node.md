
```ts
import { RestController } from "pip-services4-http-node";

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
```
