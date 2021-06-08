---
type: docs
no_list: true
title: "Background Execution!"
linkTitle: "Background Execution!"
weight: 60
---

- by Alex Mazur

### Introduction

Microservices are capable of successfully solving a wide variety of business tasks. However, where they really shine (and are especially effective) is when it comes to scaling. Scaling is the process of creating a number of identical instances of a microservice for performing large and resource-hungry tasks. Thanks to scaling, many tasks can now be completed in adequate time and with optimal use of resources. Archiving a database, batch processing, and 3D video rendering are all examples of tasks that benefit from scaling, and many others exist as well!

Microservices are usually stateless, meaning that they don’t store any information about their state or the task they are running. Because of this, there arises the problem of multiple execution of the same task by different instances of a microservice. A number of Active Logic patterns were developed for the PipServices Toolkit to help solve such complexities. Three main strategies are used to accomplish this:


- using a timer and distributed locks
- using message queues
- using the Jobs microservice (see pip-services-infrastructure)

Suppose we have a microservice that is responsible for loading images to a file server, and we need to add some new functionality that will periodically analyse any newly loaded files.

Let’s take a look at how we can approach this task using the strategies mentioned above.

### 1. Using a timer.

When creating the controller, we can add in a timer and structure the processing of requests in the following manner:

```python
__timer = FixedRateTimer()

...

def open(self, correlation_id: Optional[str]):
    self.__timer.set_callback(lambda: self.perform_analysis(correlation_id))
    self.__timer.set_interval(1000)
    self.__timer.set_delay(1000)
    self.__timer.start()
    self.__logger.trace(correlation_id, "Counter controller opened")

```

As long as the execution time of the task does not exceed the timer’s interval, this implementation will work as expected. However, if there’s a large amount of files to process and the task takes too long, the timer will create another thread for running the task. This would result in an error, as we’d end up processing the data more than once. To prevent this from happening, the controller should expose distributed locks (e.g. CloudStorageTableLock from pip-services-azure) while it’s executing the task:


```python
def perform_analysis(self, correlation_id):

    key = ImageBatchProcessor.__name__
    if not Lock.try_acquire_lock(correlation_id, key, Parameters.get_as_integer("interval")):
 	    return
   
    ... # Long running tasks
    Lock.release_lock(correlation_id, key)

```


### 2. Initiating task execution using messages

n this case, task execution is triggered by a message/signal that is received from a message queue (preferably with guaranteed delivery). A simple listener can be used to watch the queue and initiate the task. Once the listener receives a message, it starts the task, but leaves the message/signal in the queue as a lock for the duration of the processing event. Once the task has been processed, the message/signal is deleted from the queue. This method guarantees that the task will be executed once and only once.

TODO: complete recipe