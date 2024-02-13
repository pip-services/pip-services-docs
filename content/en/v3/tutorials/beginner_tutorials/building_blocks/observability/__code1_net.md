
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Log;


public class MyComponent : IReferenceable
{
    private CompositeLogger _logger = new CompositeLogger();

    public void SetReferences(IReferences references)
    {
        this._logger.SetReferences(references);
    }

    public void DoSomething(string correlationId)
    {
        this._logger.Debug(correlationId, "Did something…");
        ...
    }
}

```
