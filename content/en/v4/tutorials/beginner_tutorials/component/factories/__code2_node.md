
```ts

export class MyComponent1 {
    private _status: string;
    /**
     * Creates a new instance of the component.
     */
    public constructor() {
        this._status = "Created";
        console.log("MyComponent1 has been created.");
    }

    public async myTask() {
        console.log("task executed")
    }
}

```
