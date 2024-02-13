
```ts
import { ConfigParams, IConfigurable, IReferenceable, IReferences } from "pip-services3-commons-nodex";

export async function main() {
    // Instantiation
    let myController = new MyController();
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
