
```ts
import { ConfigParams, IConfigurable, IReferenceable, IReferences } from "pip-services4-components-node";

export async function main() {
    // Instantiation
    let myService = new MyService();
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
