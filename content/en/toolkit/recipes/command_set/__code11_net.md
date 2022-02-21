
```cs
public class MyListener : IEventListener
{
    public void OnEvent(string correlationId, IEvent e, Parameters value)
    {
        Console.WriteLine("Fired event name " + e.Name);
    }
}

public class MyEventSet: CommandSet
{
    public MyEventSet(): base()
    {
        AddEvents(new List<IEvent> { Event2(), Event3() });
        AddListener(Listener1());
    }

    private IEvent Event2()
    {
        return new Event("event2");
    }

    private IEvent Event3()
    {
        return new Event("event3");
    }

    private IEventListener Listener1()
    {
        return new MyListener();
    }
}

```
