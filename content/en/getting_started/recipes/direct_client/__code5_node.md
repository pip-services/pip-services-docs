
```ts
import { ConfigParams, DependencyResolver, Descriptor, IConfigurable, IReferenceable, IReferences, References } from "pip-services3-commons-nodex";
import { DirectClient } from "pip-services3-rpc-nodex";


export async function main() {
    // Instantiation
    let myController = new MyController();

    // Instantiation
    let client = new MyDirectClient();

    // Reference setting
    client.setReferences(References.fromTuples(
        new Descriptor("pip-services", "controller", "controller", "default", "1.0"), myController));
    
    // Calling "my_method"
    client.myMethod();
}

export class MyDirectClient extends DirectClient<MyController> {
    _dependencyResolver =  new DependencyResolver();

    public constructor() {
        super();
        this._controller = null
        this._dependencyResolver.put("controller", new Descriptor("pip-services", "controller", "*", "*", "1.0"))
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired("controller");
    }

    public myMethod(): void {
        this._controller.myMethod();
    }
}


export class MyController implements IConfigurable, IReferenceable {
    public configure(config: ConfigParams): void {
    }

    public setReferences(references: IReferences): void {
    }

    public myMethod(): void {
        console.log('Hello world');
    }
}
```
