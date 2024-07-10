
```ts
public async getOneByUdi(correlationId: string, udi: string): Promise<BeaconV1> {
    let criteria = {
        udi: udi
    };
    return new Promise((resolve, reject) => {
        this._collection.findOne(criteria, (err, item) => {
            if (err != null) {
                reject(err);
                return;
            }
            if (item != null) this._logger.trace(correlationId, "Found beacon by %s", udi);
            else this._logger.trace(correlationId, "Cannot find beacon by %s", udi);
            
            item = this.convertToPublic(item);
            resolve(item);
        });    
    });     
}



```
