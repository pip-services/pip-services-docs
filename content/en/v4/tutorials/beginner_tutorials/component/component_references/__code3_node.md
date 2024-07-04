
```ts
class Worker1 {
    private _defaultName: string;

    constructor(name) {
        this._defaultName = name || "Default name1";
    }

    public do(level, message) {
        console.log('Write to ${this._defaultName}.${level} message: ${message}');
    }
}

class Worker2 {
    private _defaultName: string;
  
    constructor(name) {
        this._defaultName = name || "Default name2";
    }

    public do(level, message) {
        console.log('Write to ${this._defaultName}.${level} message: ${message}');
    }
}

```
