
```ts
import { ProcessContainer } from "pip-services4-container-node";
import { DefaultSwaggerFactory } from "pip-services4-swagger-node";
import { DefaultHttpFactory } from "pip-services4-http-node";

class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");

        this._configPath = "./config.yml";
        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultHttpFactory());
        this._factories.add(new DefaultSwaggerFactory());
    }
}

```
