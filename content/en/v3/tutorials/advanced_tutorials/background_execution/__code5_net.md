
```cs
public async Task PerformAnalysisAsync(string correlationId)
{
   if (await JobsClient.IsJobExecutingAsync(correlationId, JobType))
  	   return Task.CompletedTask;
 
   var newJob = new NewJobV1()
   {
   	Type = JobType,
   	ReferenceId = correlationId
   };
   var job = await JobsClient.AddJobAsync(correlationId, newJob);
   await JobsClient.StartJobByIdAsync(correlationId, job.Id, TimeSpan.FromHours(2));
   ...   // Long running tasks
   ...   // Extend job if needed
   await JobsClient.CompleteJobAsync(correlationId, job.Id);
}

```

