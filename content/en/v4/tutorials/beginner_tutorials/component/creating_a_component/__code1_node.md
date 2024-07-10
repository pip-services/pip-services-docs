
```ts
class MyComponentA {
    private _param1: string = "ABC";
    private _param2: number = 123;
    private _open: boolean = false;
    private _status: string;

    // Creates a new instance of the component.
    public constructor(){
        this._status = "Created";
        console.log("MyComponentA has been created.");
    }
}
```
