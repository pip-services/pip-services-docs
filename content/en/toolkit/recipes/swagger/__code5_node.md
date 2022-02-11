
```ts
import { ConfigParams, Descriptor } from 'pip-services3-commons-nodex';
import { CommandableHttpService } from 'pip-services3-rpc-nodex';

class FriendCommandableHttpService1 extends CommandableHttpService {
    private _swaggerPath: string;

    public constructor() {
        super("commandable_hello_friend1");
        this._dependencyResolver.put('controller', new Descriptor("hello-friend", "controller", "*", "*", "*"));
    }

    public configure(config: ConfigParams): void {
        super.configure(config);

        // Swagger
        this._swaggerPath = config.getAsNullableString("swagger.path");
    }

    public register(): void {
        super.register();

        if (this._swaggerPath != null)
            this.registerOpenApiSpecFromFile(this._swaggerPath);
    }
}

```
