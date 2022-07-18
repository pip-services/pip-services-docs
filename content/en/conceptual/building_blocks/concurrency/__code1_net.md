
```cs
using PipServices3.Components.State;

public class MyComponent
{
    private IStateStore _store;

    ...

    public async void DoSomething(string correlationId, string objectId)
    {
        // Get state from the store or create a new one if the state wasn’t found
        MyState state = await this._store.LoadAsync<MyState>(correlationId, "mycomponent:" + objectId);
        if (state != null) { state = new MyState(); }
        ...

        await this._store.SaveAsync(correlationId, "mycomponent:" + objectId, state);
    }
}


```
