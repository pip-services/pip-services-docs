
```typescript
class HelloWorldServiceFactory extends components.Factory
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```typescript
constructor() {
    super();
    this.registerAsType(
        new commons.Descriptor('hello-world', 'service', 'default', '*', '1.0'),
        controller.HelloWorldService
    );
    this.registerAsType(
        new commons.Descriptor('hello-world', 'controller', 'http', '*', '1.0'),
        restService.HelloWorldRestController
    );
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_turorials/containers/process_container).

Full listing of the factory's code found in the file:

**‍/HelloWorldServiceFactory.js**

```typescript
"use strict";

const components = require("pip-services4-components-node");
const service = require("./HelloWorldService");
const restController= require("./HelloWorldRestController");

class HelloWorldServiceFactory extends components.Factory {
    constructor() {
        super();
        this.registerAsType(
            new components.Descriptor('hello-world', 'service', 'default', '*', '1.0'),
            service.HelloWorldService
        );
        this.registerAsType(
            new components.Descriptor('hello-world', 'controller', 'http', '*', '1.0'),
            restController.HelloWorldRestController
        );
    }
}

exports.HelloWorldServiceFactory = HelloWorldServiceFactory
```

