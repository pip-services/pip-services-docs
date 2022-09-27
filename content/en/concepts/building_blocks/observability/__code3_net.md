
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Trace;

public class MyComponent : IReferenceable
{
    private CompositeTracer _tracer = new CompositeTracer();

    public void SetReferences(IReferences references)
    {
        this._tracer.SetReferences(references);
    }

    public void DoSomething(string correlationId)
    {
        var timing = this._tracer.BeginTrace(correlationId, "mycomponent", "do_something");
        try
        {
            // ...
            timing.EndTrace();
        }
        catch (Exception ex)
        {
            timing.EndFailure(ex);
        }
    }
}


```
