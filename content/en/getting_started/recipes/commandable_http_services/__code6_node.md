
```ts
import { ProcessContainer } from "pip-services3-container-nodex";
import { DefaultRpcFactory } from "pip-services3-rpc-nodex";
import { DefaultSwaggerFactory } from "pip-services3-swagger-nodex";

export class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");

        this._configPath = "./config.yaml";

        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultRpcFactory());
        this._factories.add(new DefaultSwaggerFactory());
    }
}

```

