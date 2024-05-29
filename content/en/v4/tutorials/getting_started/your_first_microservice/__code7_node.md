
```typescript
class HelloWorldServiceFactory extends components.Factory
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```typescript
constructor() {
    super();
    this.registerAsType(
        new commons.Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
        controller.HelloWorldController
    );
    this.registerAsType(
        new commons.Descriptor('hello-world', 'service', 'http', '*', '1.0'),
        restService.HelloWorldRestService
    );
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_turorials/containers/process_container).

Full listing of the factory's code found in the file:

**‍/HelloWorldServiceFactory.js**

```typescript
"use strict";

const components = require("pip-services3-components-nodex");
const commons = require("pip-services3-commons-nodex");
const controller = require("./HelloWorldController");
const restService = require("./HelloWorldRestService");

class HelloWorldServiceFactory extends components.Factory {
    constructor() {
        super();
        this.registerAsType(
            new commons.Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
            controller.HelloWorldController
        );
        this.registerAsType(
            new commons.Descriptor('hello-world', 'service', 'http', '*', '1.0'),
            restService.HelloWorldRestService
        );
    }
}

exports.HelloWorldServiceFactory = HelloWorldServiceFactory
```

