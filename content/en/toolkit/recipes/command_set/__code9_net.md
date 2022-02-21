
```cs
public class MyEventSet: CommandSet
{
    public MyEventSet(): base()
    {
        AddEvent(Event1());
    }

    private IEvent Event1()
    {
        return new Event("event1");
    }
}

```
