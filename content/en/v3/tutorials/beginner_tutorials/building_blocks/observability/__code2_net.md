
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Count;
using PipServices3.Messaging.Queues;


public class MyComponent : IReferenceable
{
    private CompositeCounters _counters = new CompositeCounters();

    public void SetReferences(IReferences references)
    {
        this._counters.SetReferences(references);
    }

    public void OnMessage(MessageEnvelope message)
    {
        var timing = this._counters.BeginTiming("mycomponent:msg_time");
        try
        {
            this._counters.Increment("mycomponent:msg_count", 1);
            ...
        }
        catch (Exception ex)
        {
            this._counters.Increment("mycomponent:msg_errors", 1);
        }
        finally
        {
            timing.EndTiming();
        }
    }
}

```
