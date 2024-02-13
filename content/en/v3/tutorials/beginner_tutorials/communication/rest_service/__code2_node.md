
```ts
import { RestService } from "pip-services3-rpc-nodex";


class MyRestService extends RestService {

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
