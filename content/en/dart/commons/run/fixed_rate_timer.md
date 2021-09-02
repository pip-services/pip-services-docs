---
type: docs
title: "FixedRateTimer"
linkTitle: "FixedRateTimer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Timer that is triggered in equal time intervals.

---

**Implements:** [IClosable](../iclosable)

### Description

The FixerRateTimer class represents a timer that is triggered in equal time intervals.

**Important points**

- It has symmetric cross-language implementation and is often used by the Pip.Services toolkit to perform periodic processing and cleanup in microservices.

### Constructors
Creates new instance of the timer and sets its values.

> FixedRateTimer([dynamic taskOrCallback, int interval, int delay])

- **taskOrCallback**: dynamic - (optional) Notifiable object or callback function to call when timer is triggered.
- **interval**: int - (optional) interval to trigger timer in milliseconds.
- **delay**: int - (optional) delay before the first triggering in milliseconds.

### Instance methods

#### close
Closes the timer.

This is required by the [IClosable](../iclosable) interface,
but besides that it is identical to [stop()](#stop).

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### getCallback
Gets the callback function that is called when this timer is triggered.

> Function() getCallback()

- **returns**: Function() - callback function or null if it is not set. 


#### getDelay
Gets an initial delay before the timer is triggered for the first time.

> int getDelay()

- **returns**: int - delay in milliseconds.

#### getInterval
Gets a periodic timer triggering interval.

> int getInterval()

- **returns**: int - interval in milliseconds


#### getTask
Gets the INotifiable object that receives notifications from this timer.

> [INotifiable](../inotifiable) getTask()

- **returns**: [INotifiable](../inotifiable) - INotifiable object or null if it is not set.


#### setTask
Sets a new INotifiable object to receive notifications from this timer.

> void setTask([INotifiable](../inotifiable) value)

- **value**: [INotifiable](../inotifiable) - INotifiable object to be triggered.

#### isStarted
Checks if the timer is started.

> bool isStarted()

- **returns**: bool - true if the timer is started and false if it is stopped.

#### setCallback
Sets the callback function that is called when this timer is triggered.

> void setCallback(Function() value)

- **value**: Function() - callback function to be called.

#### setDelay
Sets an initial delay before the timer is triggered for the first time.

> void setDelay(int value)

- **value**: int - delay in milliseconds. 

#### setInterval
Sets a periodic timer triggering interval.

> void setInterval(int value)

- **value**: int - interval in milliseconds.


#### start
Starts the timer.

Initially. the timer is triggered after delay.
After that, it is triggered after interval until it is stopped.

> void start()


#### stop
Stops the timer.

> void stop()

### Examples
```dart
class MyComponent {
    FixedRateTimer timer  = FixedRateTimer(() { cleanup }, 60000);
    ...
    Future open(String correlationId) {
        ...
        timer.start();
        ...
    }
    Future close(String correlationId) {
        ...
        timer.stop();
        ...
    }
    void cleanup() {
        ...
    }
    ...
}

```

### See also
- #### [INotifiable](../inotifiable)
