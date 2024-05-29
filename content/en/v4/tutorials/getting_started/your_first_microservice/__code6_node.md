
**/HelloWorldRestService.js**
```typescript
"use strict";

const rpc = require("pip-services3-rpc-nodex");
const commons = require("pip-services3-commons-nodex");

class HelloWorldRestService extends rpc.RestService {
    constructor() {
        super();
        this._baseRoute = "/hello_world";
        this._dependencyResolver.put("controller", new commons.Descriptor("hello-world", "controller", "*", "*", "1.0"));
    }

    public setReferences(references) {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
    }

    public register() {
        this.registerRoute("get", "/greeting", null, async (req, res) => {
            let name = req.query.name;
            try {
                let result = await this._controller.greeting(name);
                this.sendResult(req, res, result);
            } catch (ex) {
                this.sendError(req, res, ex);
            }
        });
    }
}

exports.HelloWorldRestService = HelloWorldRestService
```
