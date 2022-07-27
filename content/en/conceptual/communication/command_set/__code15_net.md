
```cs
from pip_services3_commons.commands import Command, CommandSet, ICommand, IEvent, Event, IEventListener

// Step 1 - Create the command set with events
public class MyEventSet : CommandSet
{
    public MyEventSet() : base()
    {
        AddEvent(Event1());
        AddEvents(new List<IEvent> { Event2(), Event3() });
        AddListener(Listener1());
    }

    private IEvent Event1()
    {
        return new Event("event1");
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

// Step 2 - Create a listener
public class MyListener : IEventListener
{
    public void OnEvent(string correlationId, IEvent e, Parameters value)
    {
        Console.WriteLine("Fired event name " + e.Name);
    }
}


// Step 3  - Create an instance of the command set
var myEvents = new MyEventSet();

// Step 4 - Obtain events
var event1 = myEvents.FindEvent("event1");
var events = myEvents.Events;  // Returns a list with event1, event2 and event3

// Step 5 - Select event1 (first element in the list)
var event2 = events[1];  // Returns event1

// Step 6 - Notify the listener of an event occurrence
await event1.NotifyAsync("123", null);
await event2.NotifyAsync("123", null);
await myEvents.NotifyAsync("123", "event3", null);
```

After running, this code produces the following output:         
         
![figure 2](./figure2.png)
