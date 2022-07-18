
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

