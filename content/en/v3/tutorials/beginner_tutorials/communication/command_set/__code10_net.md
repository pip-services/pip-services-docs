
```cs
public class MyEventSet: CommandSet
{
    public MyEventSet(): base()
    {
        AddEvents(new List<IEvent> { Event2(), Event3() });
    }

    private IEvent Event2()
    {
        return new Event("event2");
    }

    private IEvent Event3()
    {
        return new Event("event3");
    }
}

```
