
```ts
class MyListener implements IEventListener {
  @override
  void onEvent(String? correlationId, IEvent event, Parameters args) {
    print('Fired event name ' + event.getName());
  }
}

class MyEventSet extends CommandSet {
  MyEventSet() : super() {
    addEvents([event2(), event3()]);
    addListener(listener1());
  }

  IEvent event2() {
    return Event('event2');
  }

  IEvent event3() {
    return Event('event3');
  }

  IEventListener listener1() {
    return MyListener();
  }
}

```
