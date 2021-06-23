---
type: docs
no_list: true
title: "Background Execution"
linkTitle: "Background Execution"
weight: 60
---

- by Alex Mazur

### Introduction

Sometimes you may need to use your microservices as background tasks. From an architectural point of view, we call this type of tasks Active Logic, as they don’t need any external event to prompt them but a background task logic only.
There are several ways to design this task. One approach consists of adding a timer to the microservice’s controller and distributed locks. Another method would be using a message queue to manage the execution process. Lastly, we can use a microservice, such as the Pip.Services’ Job microservice, which keeps a list of jobs performed by other microservices and manages their execution.
This article explains how to tackle those three approaches through the use of a practical example.

### Background execution

Microservices are usually stateless, meaning that they don’t store any information about their state or the task they are running. Because of this, there arises the problem of multiple execution of the same task by different instances of a microservice. A number of Active Logic patterns were developed for the PipServices Toolkit to help solve such complexities. The three main strategies used to accomplish this are:


- using a timer and distributed locks
- using message queues
- using the Jobs microservice (see pip-services-infrastructure)

To understand these three strategies we will use the following example:

Suppose we have a microservice that is responsible for loading images to a file server, and we need to add some new functionality that will periodically analyse any newly loaded files.

Let’s now take a look at how we can approach this task using the strategies mentioned above.

### 1. Using a timer and distributed lock.

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


### 2. Using message queues

In this case, task execution is triggered by a message/signal that is received from a message queue (preferably with guaranteed delivery). A simple listener can be used to watch the queue and initiate the task. Once the listener receives a message, it starts the task, but leaves the message/signal in the queue as a lock for the duration of the processing event. Once the task has been processed, the message/signal is deleted from the queue. This method guarantees that the task will be executed once and only once.


```python

def open(self, correlation_id):
   self._message_queue.begin_listen(correlation_id, self.perform_analysis)


def perform_analysis(self, correlation_id):
   ... # Long running tasks


```

### 3. Using the Jobs microservice
For cases where distributed locks and message queues can’t be used, the PipServices Job Queue microservice can be used instead (https://github.com/pip-services-infrastructure/pip-services-jobs-python). This microservice acts as a simple manager for the tasks that are running and provides relevant information to any interested services. For our example of periodic file processing, we’ll need 
1. a timer, 
2. the Jobs service’s client, and 
3. a type for the job/task being executed.

```python
# Step 1 – Create a timer, the Jobs service’s client,  and a type for the job/task being executed
__timer = FixedRateTimer()
__jobs_client: IJobsClientV1 = None
__job_type = "AnalysisOfNewFiles"
...

# Step2 – Structure the processing of requests
def open(self, correlation_id):
   self.__timer.set_task(lambda: self.perform_analysis(correlation_id)) 
   self.__timer.set_interval(Parameters.get_as_integer("interval"))
   self.__timer.set_delay(Parameters.get_as_integer("delay"))
   self.__timer.start()

```
Now, in the task’s method, we need to add some code that checks whether or not a job of this type is already running or not. If it is, then no processing is required. If it isn’t, then a job is created, started, and eventually completed, once all processing has been performed.

TODO: complete it for Python
```python
public async Task PerformAnalysisAsync(string correlationId)
{
// Step 1: check whether or not a job of this type is already running or not
   if (await JobsClient.IsJobExecutingAsync(correlationId, JobType))
   {
	// Case 1: a job of this type is already running
  	return Task.CompletedTask; 
   }
  
// Case 2: no job of this type is already running
   var newJob = new NewJobV1()
   {
   	Type = JobType,
   	ReferenceId = correlationId
   };
   var job = await JobsClient.AddJobAsync(correlationId, newJob);
   await JobsClient.StartJobByIdAsync(correlationId, job.Id, TimeSpan.FromHours(2));
   ... // Long running tasks
   …// Extend job if needed
   await JobsClient.CompleteJobAsync(correlationId, job.Id);
}
```
