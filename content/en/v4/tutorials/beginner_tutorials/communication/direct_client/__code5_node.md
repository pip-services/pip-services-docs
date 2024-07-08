
```ts
import { 
    ConfigParams, DependencyResolver, Descriptor, 
    IConfigurable, IReferenceable, IReferences, References 
} from "pip-services4-components-node";
import { DirectClient } from "pip-services4-rpc-node";

export async function main() {
    // Instantiation
    let myService = new MyService();

    // Instantiation
    let client = new MyDirectClient();

    // Reference setting
    client.setReferences(References.fromTuples(
        new Descriptor("pip-services", "service", "service", "default", "1.0"), myService));
    
    // Calling "my_method"
    client.myMethod();
}

export class MyDirectClient extends DirectClient<MyService> {
    _dependencyResolver =  new DependencyResolver();

    public constructor() {
        super();
        this._service = null
        this._dependencyResolver.put("service", new Descriptor("pip-services", "service", "*", "*", "1.0"))
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._service = this._dependencyResolver.getOneRequired("service");
    }

    public myMethod(): void {
        this._service.myMethod();
    }
}


export class MyService implements IConfigurable, IReferenceable {
    public configure(config: ConfigParams): void {
    }

    public setReferences(references: IReferences): void {
    }

    public myMethod(): void {
        console.log('Hello world');
    }
}
```
