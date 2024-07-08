
```ts
import { Descriptor, ConfigParams } from "pip-services4-components-node";
import { CommandableHttpController } from "pip-services4-http-node";

class FriendCommandableHttpService2 extends CommandableHttpController {
    private _swaggerPath: string;

    public constructor() {
        super("commandable_hello_friend1");
        this._dependencyResolver.put('service', new Descriptor("hello-friend", "service", "*", "*", "*"));
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
