
```ts
class MyComponent {
  private _store: IStateStore;

  ...

  public doSomething(correlationId: string, objectId: string) {
    // Get state from the store or create a new one if the state wasn’t found
    let state: MyState = await this._store.load(correlationId, “mycomponent:” + objectId);
    if (state != null) { state = new MyState(); }

    …
    
    await this._store.save(correlationId, “mycomponent:” + objectId, state);
  }
}


```
