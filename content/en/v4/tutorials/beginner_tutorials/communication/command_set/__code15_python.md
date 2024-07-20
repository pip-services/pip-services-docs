
```python
from pip_services3_commons.commands import Command, CommandSet, ICommand, IEvent, Event, IEventListener

# Step 1 - Create the command set with events

class my_eventset(CommandSet):

    def __init__(self, controller):
        super(my_eventset, self).__init__()
        self.add_event(self._event1())  
        self.add_events([self._event2(), self._event3()])  
        self.add_listener(self._listener1()) 
        

    def _event1(self):
        event = Event("event1")
        event.add_listener(MyListener())
        return Event("event1")

    def _event2(self):
        event = Event("event2")
        event.add_listener(MyListener())
        return Event("event2")

    def _event3(self):
        event = Event("event3")
        event.add_listener(MyListener())
        return Event("event3")

    def _listener1(self):
        return MyListener()

# Step 2 - Create a listener
class MyListener(IEventListener):
    def on_event(self, correlation_id, event, args):
        print("Fired event with name " + event.get_name())

# Step 3  - Create an instance of the command set
my_events = my_eventset(None)

# Step 4 - Obtain events
event1 = my_events.find_event("event1")
events = my_events.get_events()  # Returns a list with event1, event2 and event3

# Step 5 - Select event1 (first element in the list)
event2 = events[1]  # Returns event1

# Step 6 - Notify the listener of an event occurrence
event1.notify("123", None)
event2.notify("123", None)
my_events.notify("123", 'event3', None)

```
