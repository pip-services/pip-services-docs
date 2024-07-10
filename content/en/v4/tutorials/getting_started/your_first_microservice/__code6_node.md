
**/HelloWorldRestService.js**
```typescript
"use strict";

const http = require("pip-services4-http-node");
const components = require("pip-services4-components-node");

class HelloWorldRestController extends http.RestController {
    constructor() {
        super();
        this._baseRoute = "/hello_world";
        this._dependencyResolver.put("service", new components.Descriptor("hello-world", "service", "*", "*", "1.0"));
    }

    public setReferences(references) {
        super.setReferences(references);
        this._service = this._dependencyResolver.getOneRequired('service');
    }

    public register() {
        this.registerRoute("get", "/greeting", null, async (req, res) => {
            let name = req.query.name;
            try {
                let result = await this._service.greeting(name);
                this.sendResult(req, res, result);
            } catch (ex) {
                this.sendError(req, res, ex);
            }
        });
    }
}

exports.HelloWorldRestController = HelloWorldRestController
```
