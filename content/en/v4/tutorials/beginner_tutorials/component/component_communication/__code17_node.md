
```ts
class MyComponentA implements IReferenceable {
    public consoleLog: boolean = true; // console log flag
    private counters: CachedCounters;

    public constructor() {

        if (this.consoleLog)
            console.log("MyComponentA has been created.");
    }
    public setReferences(references: IReferences): void {
        this.counters = references.getOneRequired<CachedCounters>(
            new Descriptor("*", "counters", "*", "*", "*")
        );
    }
}

```
