
```ts
export class MyService implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greeting(name: string): Promise<string> {
        return "Hello, " + name + " !";
    }
}
```
