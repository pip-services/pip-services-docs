
```cs
export class MyController implements IReferenceable {
    public setReferences(references: IReferences): void {
        
    }

    public async greetings(name: string): Promise<string> {
        return "Hello, " + name + " !";
    }
}

```