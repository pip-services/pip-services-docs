
```ts
import { Descriptor} from "pip-services3-commons-nodex";
import { CommandableHttpService } from "pip-services3-rpc-nodex";

export class FriendCommandableHttpService extends CommandableHttpService {
    public constructor() {
        super("commandable_hello_friend");

        this._dependencyResolver.put('controller', new Descriptor("hello-friend", "controller", "*", "*", "*"));
    }
}

```
