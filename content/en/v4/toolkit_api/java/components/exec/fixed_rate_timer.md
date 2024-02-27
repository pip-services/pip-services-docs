---
type: docs
title: "FixedRateTimer"
linkTitle: "FixedRateTimer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Timer that is triggered in equal time intervals.

---

**Implements:** [IClosable](../iclosable)

### Description

The FixerRateTimer class represents a timer that is triggered in equal time intervals.

Important points

- It has symmetric cross-language implementation and is often used by the Pip.Services toolkit to perform periodic processing and cleanup in microservices.

### Constructors
Creates new instance of the timer and sets its values.

> `public` FixedRateTimer([INotifiable](../inotifiable) task, long interval, long delay)

- **task**: [INotifiable](../inotifiable) - (optional) a Notifiable object to call when timer is triggered
- **interval**: long - (optional) an interval to trigger timer in milliseconds.
- **delay**: long - (optional) delay before the first triggering in milliseconds.

### Instance methods

#### close
Closes the timer.

This is required by the [IClosable](../iclosable) interface,
but besides that it is identical to [stop()](#stop).

> `public` void close([IContext](../../context/context) context)

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.

#### getTask
Gets the INotifiable object that receives notifications from this timer.

> `public` [INotifiable](../inotifiable) getTask()

- **returns**: [INotifiable](../inotifiable) - the INotifiable object or null if it is not set. 


#### getDelay
Gets an initial delay before the timer is triggered for the first time.

> `public` long getDelay()

- **returns**: long - delay in milliseconds.

#### getInterval
Gets a periodic timer triggering interval.

> `public` long getInterval()

- **returns**: long - interval in milliseconds


#### setTask
Sets a new INotifiable object to receive notifications from this timer.

> `public` void setTask([INotifiable](../inotifiable) task)

- **value**: [INotifiable](../inotifiable) - INotifiable object to be triggered.

#### isStarted
Checks if the timer is started.

> `public` boolean isStarted()

- **returns**: boolean - true if the timer is started and false if it is stopped.

#### setDelay
Sets an initial delay before the timer is triggered for the first time.

> `public` void setDelay(long delay)

- **value**: long - delay in milliseconds. 

#### setInterval
Sets a periodic timer triggering interval.

> `public` void setInterval(long interval)

- **value**: long - interval in milliseconds.


#### start
Starts the timer.

Initially. the timer is triggered after delay.
After that, it is triggered after interval until it is stopped.

> `public` void start()


#### stop
Stops the timer.

> `public` void stop()

### Examples
```java
 {
  class MyComponent {
    FixedRateTimer timer = new FixedRateTimer(() -> { this.cleanup }, 60000, 0);
    ...
    public void open(IContext context) {
      ...
      timer.start();
      ...
    }
 
    public void open(IContext context) {
      ...
      timer.stop();
      ...
    }
  
    private void cleanup() {
      ...
    }
    ...
  }
  }

```

### See also
- #### [INotifiable](../inotifiable)
