
```ts
import { ConfigParams, Descriptor, IReferenceable, IReferences, References } from "pip-services3-commons-nodex";
import { ICache, MemoryCache, MemoryLock } from "pip-services3-components-nodex";

export class MyComponent implements IReferenceable {
    private _cache: ICache;
    private _lock: MemoryLock;

    public setReferences(references: IReferences): void {
        this._cache = references.getOneRequired(new Descriptor("*", "cache", "*", "*", "1.0"));
        this._lock = references.getOneRequired(new Descriptor("*", "lock", "*", "*", "1.0"));
    }
    
    public async storeResult(correlationId: string, param1: string): Promise<void> {
        // Lock
        this._lock.acquireLock(correlationId, "mykey", 1000, 1000);

        let config = ConfigParams.fromTuples("retry_timeout", 200);
        this._lock.configure(config);
        
        // Do processing
        // ...
        console.log("The stored value is " + param1);

        // Store result to cache async
        await  this._cache.store(correlationId, 'mykey', param1, 3600000);
    
        // Release lock async
        await this._lock.releaseLock(correlationId, 'mykey');
    }

    public async obtainResult(correlationId: string): Promise<any> {
        // Lock..
        this._lock.acquireLock(correlationId, "mykey", 1000, 1000);
        
        // Do processing
        // ...
        let result = this._cache.retrieve(correlationId, "mykey");
    
        // Release lock async
        await this._lock.releaseLock(correlationId, "mykey");

        return result
    }
}
    
    
// Use the component
let my_component = new MyComponent();
my_component.setReferences(References.fromTuples(
    new Descriptor("pip-services", "cache", "memory", "default", "1.0"), new MemoryCache(),
    new Descriptor("pip-services", "lock", "memory", "default", "1.0"), new MemoryLock(),
));

await my_component.storeResult(null, "param1");

let result = my_component.obtainResult(null);

console.log("The retrieved value is " + result);
```
