
**‍/HelloWorldProcess.js**

```typescript
"use strict";

const http = require("pip-services4-http-node");
const container = require('pip-services4-container-node');
const factory = require("./HelloWorldServiceFactory");

class HelloWorldProcess extends container.ProcessContainer {
    constructor() {
        super('hello-world', 'HelloWorld microservice');
        this._configPath = './config.yaml';
        this._factories.add(new factory.HelloWorldServiceFactory());
        this._factories.add(new http.DefaultHttpFactory());
    }
}

exports.HelloWorldProcess = HelloWorldProcess;
```
