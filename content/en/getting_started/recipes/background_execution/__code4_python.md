
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

